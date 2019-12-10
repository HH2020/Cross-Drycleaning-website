/*****************
Variables
*****************/

var header = document.getElementById('head');
var hbutton = document.getElementById('hbutton');
var htitle = document.getElementById('htitle');
var nbutton = document.getElementsByClassName('nbutton');
var trans = 0;
var peek;
var peekv;
var hclose;

/*****************
Functions
*****************/

function button_open() {
    header.style.borderLeft = "60px solid #004C75";
    htitle.style.opacity = '1';
    htitle.style.left = '-36px';
    hbutton.style.width = '60px';
    hbutton.style.left = '-60px';
}

function button_close() {
    header.style.borderLeft = "35px solid #004C75";
    htitle.style.opacity = '0';
    htitle.style.left = '-14px';
    hbutton.style.width = '30px';
    hbutton.style.left = '-30px';
}

function button_click() {
    if (trans == 0) {
        clearTimeout(peek);
        header.style.right = '0px';
        button_open();
        trans = 1;
    } else if (trans == 1) {
        clearTimeout(peek);
        header.style.right = '-350px';
        button_close();
        trans = 0;
    }
}

/*****************
Main
*****************/

hbutton.onclick = function () {
    button_click();
};

hbutton.onmouseover = function() {
    if (trans == 0) {
        button_open();
    }
};

nbutton.onclick = function() {
    button_click();
};

hbutton.onmouseout = function() {
    if (trans == 0) {
        button_close();
    }
};


peek = setTimeout(function() {
    header.style.right = '-300px';
    button_open();
    peek = setTimeout(function() {
        header.style.right = '-350px';
        button_close();
    },2000);
}, 3000);

setInterval(function()  {
    peek = setTimeout(function() {
        header.style.right = '-300px';
        button_open();
        peek = setTimeout(function() {
            header.style.right = '-350px';
            button_close();
        },2000);
    }, 3000);
}, 120000);

header.onmouseover = function() {
    if (trans == 1) {
        clearTimeout(hclose);
    }
};

header.onmouseout = function() {
    if (trans == 1) {
        hclose = setTimeout(function() {
            if (trans == 1) {
                button_click();
            }
        }, 5000);
    }
};