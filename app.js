// тоглогчийн ээлжийг хадагалах хувьсагч. жич эхний тоглогчийг 1, гэе
var activePlayer = 1;
// тоглогчдын цуглуулсан оноог хадагалах хувьсагч
var scores = [0,0];
// ээлжийн оноог хадагалах хувьсагч. Тоглогчдын ээлжиндээ цуглуулах хувьсагч
var roundScore=0;
// шооны аль талаараа буусныг хадагалах хувьсагч
//      1-6 тоонуудын хооронд санамсаргүй тоог хадагална.
var dice = Math.floor(Math.random()*6+1);
console.log('Шоо: '+dice);
var element = window.document.getElementById("score-0");
element.innerHTML = "<em>"+0+"</em>";	
//element.innerText = dice;

var element2 = window.document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
var el = document.querySelector(".dice");
el.style = "display:none;";
