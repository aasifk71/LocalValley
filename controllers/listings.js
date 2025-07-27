const Listing=require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});




module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing = (async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
  .populate({path:"reviews",
    populate:{
      path:"author",
    },
  })
  .populate("owner");

  if(!listing){
    req.flash("error","Listing does not exist");
   
     return res.redirect("/listings"); 
  }
  
  res.render("listings/show.ejs", { listing });
})
module.exports.createListing = async (req, res, next) => {
  const response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  const geoData = response.body.features[0].geometry;
  if (!geoData) {
    req.flash("error", "Could not find location on map. Please try a more specific address.");
    return res.redirect("/listings/new");
  }

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url: req.file.path, filename: req.file.filename };
  newListing.geometry = geoData;

  let savedListing = await newListing.save();
 
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};






module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if(!listing){
    req.flash("error","Listing does not exist");
    return res.redirect("/listings");
  }
   let originalImageUrl = listing.image.url;
   originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250")
  res.render("listings/edit.ejs", { listing,originalImageUrl });
}
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;

  // Fetch geodata from Mapbox for updated location
  const response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  const geoData = response.body.features[0]?.geometry;

  // Update listing basic info
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  // Update geometry if available
  if (geoData) {
    listing.geometry = geoData;
  }

  // Update image if file uploaded
  if (typeof req.file !== "undefined") {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
  }

  await listing.save();

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success","Listing Deleted! ")
  res.redirect("/listings");
}