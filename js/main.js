// Initialize and add the map
function initMap() {
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: -24.782127, lng: -65.423195 },
    zoom: 14
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: { lat: -24.782127, lng: -65.423195 }, map: map }); 
}


// Salta (-24.782127, -65.423195)