//szamolas();

var valtA="";
var valtB="";
var valtM="";

function osszead(){
    var osszeg=Number(valtA)+Number(valtB); 
    document.getElementById("szoveg").innerHTML=osszeg;   
}

function kivon(){ 
    var osszeg=Number(valtA)-Number(valtB); 
    document.getElementById("szoveg").innerHTML=osszeg;   
}

function szoroz(){
    var osszeg=Number(valtA)*Number(valtB); 
    document.getElementById("szoveg").innerHTML=osszeg;
}

function oszt(){
    var osszeg=Number(valtA)/Number(valtB); 
    document.getElementById("szoveg").innerHTML=osszeg;
}

function szamolas (){

valtA=document.getElementById("a").value;
valtB=document.getElementById("b").value;
valtM=document.getElementById("muv").value;
if(valtM==="+"){
    osszead();
}else if(valtM==="-"){
    kivon(); 
}else if(valtM==="*"){
    szoroz();
}else if(valtM==="/"){
    oszt();
}

// alert("Hello Világ section!");
// document.write("Hello Világ section!");
// console.log("uzenet");
//document.getElementById("szoveg").innerHTML=osszeg;
//return osszeg

}


