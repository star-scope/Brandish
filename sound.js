function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
    console.log("sound");
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}