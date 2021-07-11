

function showPosition(lat , long) {
    let x = document.getElementById("running-status");
    x.innerHTML = "Latitude: " + lat + 
    "<br>Longitude: " + long;
}

function showOrHide(){
    let togglebtn = document.getElementById('running-btn');
    if(!togglebtn.checked){
        document.getElementById('running-status').style.display = "none";
    }else{
        document.getElementById('running-status').style.display = "block";
    }
}

function hideLocation(){
    let x = document.getElementById("running-status");
    x.innerHTML = "";
}

// const observer = new MutationObserver(mutation => {
    //     console.log('DOM mutation detected');
    // });
const watchID = navigator.geolocation.watchPosition((position) => {
    let togglebtn = document.getElementById('running-btn');
    if(togglebtn.checked){
        showPosition(position.coords.latitude , position.coords.longitude);
    }
});

    




