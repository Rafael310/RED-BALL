

document.getElementById('background-btn').addEventListener('click', function(){

    var backgroundImage = document.getElementById('newimg')
    
    var newimg = document.getElementById('background').style.background = "url('/Volumes/RAFAEL MEZA/JavaScript/assets/background.jpg')";
});

document.getElementById('left').addEventListener('click', function () {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 20;

    document.getElementById('ball').style.left = newPosition + 'px';
});

document.getElementById('right').addEventListener('click', function () {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 20;

    document.getElementById('ball').style.left = newPosition + 'px';
});