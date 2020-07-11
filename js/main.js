// Initialize and add the map
function initMap() {
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: -24.782127, lng: -65.423195 },
    zoom: 14
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: { lat: -24.782127, lng: -65.423195 }, map: map }); 
}


// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    );
  }
});