// scripts
ScrollReveal({ duration: 600 })
ScrollReveal().reveal('.nav-bar', { delay: 200 })
ScrollReveal().reveal('.delay-1', { delay: 600 })
ScrollReveal().reveal('.delay-2', { delay: 1200 })
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }