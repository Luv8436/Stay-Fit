

function getLocation() {
    var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var x = document.getElementById("running-status");
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

function getCoordinates(){
    let togglebtn = document.getElementById('running-btn');
    if(togglebtn.checked){
        getLocation();
    }else{
        hideLocation();
    }
}

function hideLocation(){
    var x = document.getElementById("running-status");
    x.innerHTML = "";
}

const observer = new MutationObserver(mutation => {
    console.log('DOM mutation detected');
});


  
window.addEventListener('DOMContentLoaded', (event) => {
    observer.observe(document.querySelector('#running-status'), {
        childList: true,
        attributes: true,
        subtree: true,
        characterData: true,
    });
});
                                 
                             
             
            