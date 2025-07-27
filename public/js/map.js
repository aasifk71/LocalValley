

 mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  center: listing.geometry.coordinates, // [lng, lat]
  zoom: 9
});

// ✅ Create popup separately
const popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML(`<h4>${listing.location}</h4><p>Exact Location provide after Booking</p>`);

// ✅ Attach popup to marker
const marker1 = new mapboxgl.Marker({ color: 'red' })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);

