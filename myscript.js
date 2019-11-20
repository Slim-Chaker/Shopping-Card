function color1() {
  document.getElementById("col1").classList.toggle("red");
}

function color2() {
  document.getElementById("col2").classList.toggle("red");
}

function color3() {
  document.getElementById("col3").classList.toggle("red");
}

function remove1() {
    document.getElementById("carre1").style.display = "none";
}

function remove2() {
    document.getElementById("carre2").style.display = "none";
}

function remove3() {
    document.getElementById("carre3").style.display = "none";
}

function inc1() {
    let x = document.getElementById('comt1');
    let y = document.getElementById('total');
    x.innerHTML = +x.innerHTML + 50;
    y.innerHTML = +y.innerHTML + 50}

function dec1() {
    let x = document.getElementById('comt1');
    let y = document.getElementById('total');

    if (x.innerHTML <= 0 || y.innerHTML <= 0) {
        x.innerHTML = 0;
        y.innerHTML = +y.innerHTML ;
    } else {
        x.innerHTML = +x.innerHTML - 50;
        y.innerHTML = +y.innerHTML - 50;
    }}

function inc2() {
    let x = document.getElementById('comt2');
    let y = document.getElementById('total');
    x.innerHTML = +x.innerHTML + 100;
    y.innerHTML = +y.innerHTML + 100
}


function dec2() {
    let x = document.getElementById('comt2');
    let y = document.getElementById('total');

    if (x.innerHTML <= 0 || y.innerHTML <= 0) {
        x.innerHTML = 0;
        y.innerHTML = +y.innerHTML ;
    } else {
        x.innerHTML = +x.innerHTML - 100;
        y.innerHTML = +y.innerHTML - 100;
    }

}

function inc3() {
    let x = document.getElementById('comt3');
    let y = document.getElementById('total');
    x.innerHTML = +x.innerHTML + 150;
    y.innerHTML = +y.innerHTML + 150;
}


function dec3() {
    let x = document.getElementById('comt3');
    let y = document.getElementById('total');

    if (x.innerHTML <= 0 || y.innerHTML <= 0) {
        x.innerHTML = 0;
        y.innerHTML = +y.innerHTML;
    } else {
        x.innerHTML = +x.innerHTML - 150;
        y.innerHTML = +y.innerHTML - 150;
    }

}