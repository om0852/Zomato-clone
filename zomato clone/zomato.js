let down_arrow = document.getElementsByClassName("down-arrow")[0];
let location_gps = document.getElementsByClassName("location-gps")[0];

down_arrow.addEventListener("click",()=> {
    location_gps.style.height="20vh";
    // down_arrow.classList.toggle("fa-angle-down");
    location_gps.classList.toggle("location-gps1");
})