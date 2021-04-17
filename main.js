// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)
let vzestupnaRada = [];
let sestupnaRada = [];

// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS

let i=0;
while (i < 11) {
    console.log(i);
    i++; 
    rada.innerHTML += i + ", "; 
}

console.log(vzestupnaRada);


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

let x=0;
while (x <= 10) {
    console.log(x);
    x++;
}

console.log(vzestupnaRada);


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

let y=10;
while (y >= 0) {
    console.log(y);
    y--;
    dalsirada.innerHTML += y + ", ";
}

console.log(sestupnaRada);