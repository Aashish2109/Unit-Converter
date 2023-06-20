//Length Converter
var feet = document.getElementById('Feet');
var inch = document.getElementById('Inches');

feet.addEventListener('input', function () {
    let f = this.value;
    let i = f * 12;
    inch.value = i;
});

inch.addEventListener('input', function () {
    let i = this.value;
    let f = i / 12;
    if (!Number.isInteger(f)) {
        f=f.toFixed(2);
    };
    feet.value = f;
});

//Temperature Converter
var Celsius = document.getElementById('Celsius');
var Fahrenheit = document.getElementById('Fahrenheit');

Celsius.addEventListener('input', function () {
    let c = this.value;
    let f = (9 / 5) * c + 32;
    Fahrenheit.value = f;
});

Fahrenheit.addEventListener('input', function () {
    let f = this.value;
    let c = (5 / 9) * (f - 32);
    Celsius.value = c;
});

//Volume Converter
var litre = document.getElementById('Litre');
var mL = document.getElementById('MLitre');

litre.addEventListener('input', function () {
    let L = this.value;
    let ml = L * 1000;
    mL.value = ml;
});
mL.addEventListener('input', function () {
    let ml = this.value;
    let L = ml / 1000;
    litre.value = L;
});

//Weight Converter
var kg = document.getElementById('KGram');
var gram= document.getElementById('Gram');

kg.addEventListener('input', function () {
    let kG = this.value;
    let G= kG* 1000;
    gram.value = G;
});
gram.addEventListener('input', function () {
    let G = this.value;
    let kG =  G/ 1000;
    kg.value = kG;
});


