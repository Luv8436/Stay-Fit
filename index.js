

function showPosition() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function success(pos) {
        let x = document.getElementById("running-status");
        x.innerHTML = "Latitude: " + pos.coords.latitude + 
        "<br>Longitude: " + pos.coords.longitude;
    }
      
    function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    }
      
    navigator.geolocation.getCurrentPosition(success, error, options);
}

function showOrHide(){
    let togglebtn = document.getElementById('running-btn');
    if(!togglebtn.checked){
        document.getElementById('running-status').style.display = "none";
    }else{
        document.getElementById('running-status').style.display = "block";
    }
}


// const observer = new MutationObserver(mutation => {
    //     console.log('DOM mutation detected');
    // });
const watchID = navigator.geolocation.watchPosition((position) => {
    let togglebtn = document.getElementById('running-btn');
    if(togglebtn.checked){
        showPosition();
    }
});

    




