//Zadaca 1

let daliPalindrom = prompt("Vnesi tricifren broj");
daliPalindrom = parseInt(daliPalindrom);

if (!isNaN(daliPalindrom) && daliPalindrom < 999) {
    let prvaCifra = Math.floor(daliPalindrom / 100);
    let vtoraCifra = Math.floor(daliPalindrom % 100 / 10);
    let tretaCifra = Math.floor(daliPalindrom % 10);
    console.log(daliPalindrom);
    console.log(prvaCifra);
    console.log(vtoraCifra);
    console.log(tretaCifra);
    if (prvaCifra === tretaCifra && prvaCifra !== vtoraCifra) {
        alert("Vneseniot broj " + daliPalindrom + " e palindrom")
    } else {
        alert("Vneseniot broj " + daliPalindrom + " ne e palindrom")
    }
} else {
    document.write("Vnesi validen tricifren broj!" + "<br/>")
}


// Zadaca 2

let telBroj = prompt("Vnesi mobilen telefon");
telBroj = parseInt(telBroj);

if (!isNaN(telBroj) && telBroj < 99999999) {
    let prefiks = Math.floor(telBroj / 1000000);
    let broj3 = Math.floor((telBroj % 1000000) / 1000);
    let broj6 = Math.floor((telBroj % 1000000) % 1000);

    if (prefiks === 70 || prefiks === 71 || prefiks === 72) {
        document.write("0" + prefiks + "/" + broj3 + "-" + broj6 + " - T-Mobile" + "<br/>")
    } else if (prefiks === 75 || prefiks === 76) {
        document.write("0" + prefiks + "/" + broj3 + "-" + broj6 + " - One" + "<br/>")
    } else if (prefiks === 77 || prefiks === 78) {
        document.write("0" + prefiks + "/" + broj3 + "-" + broj6 + " - Vip" + "<br/>")
    } else {
        document.write("Pogresen prefiks" + "<br/>")
    }

}else{
    document.write("Pogresen broj" + "<br/>")
}


// Zadaca 3

let recenica = prompt('Vnesite recenica');
let deloviRecenica = recenica.split(" ");

let max = 0;
let indexMax = 0;
function getMaxLength(item, index){
    if(item.length > max) {
        max = item.length;
        indexMax = index;
    }
}

deloviRecenica.forEach(getMaxLength);

let najdolgZbor = deloviRecenica.filter((item,index) => index === indexMax);
document.write(najdolgZbor[0]);


//Zadaca 4

let prvBroj1 = prompt("Vnesi prv broj");
let vtorBroj2 = prompt("Vnesi vtor broj");
let tretBroj3 = prompt("Vnesi tret broj");



if(!isNaN(prvBroj1) && !isNaN(vtorBroj2) && !isNaN(tretBroj3)){
    let resenie = parseInt(prvBroj1) + parseInt(vtorBroj2) + parseInt(tretBroj3);
    if(resenie < 0){
        document.write("Znakot e -" + "<br/>")
    }else{
        document.write("Znakot e +" + "<br/>")
    }
}else{
    alert("Vnesovte pogresni vlez")
}


//Zadaca 5

for(let i=0; i<=30; i++){
    if(i%2===0){
       document.writeln(i + " e paren broj" + "<br/>")
    }else{
        document.writeln(i + " e neparen broj" + "<br/>")
    }
}