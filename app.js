// төлөвийн хувьсагч
var IsOnGame = true;
// тоглогчийн ээлжийг хадагалах хувьсагч. жич эхний тоглогчийг 0, гэе
var activePlayer = 0;
var isFirst = true;
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

var imgDice = document.getElementById("imgDice");
imgDice.style = "display:none;";


document.querySelector(".btn-roll").addEventListener("click", function()
{
    if(IsOnGame){
        
    }
    document.getElementsByClassName("btn-roll")[0].disabled = true;
    imgDice.style.display = "block";
    function sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function Tutor()
    {
        for (let i = 1; i <=6 ; i++)
        {        
            imgDice.src = "dice-"+i +".png";
            await sleep(200);   
        }
        dice = Math.floor(Math.random()*6+1);
        imgDice.src = "dice-"+dice +".png";
        document.getElementsByClassName("btn-roll")[0].disabled = false;
        
        await sleep(200);
        if(!activePlayer)
        {
            if(!isFirst && !document.getElementById("p0p").classList.contains("active")) {
                document.getElementById("p1p").classList.toggle("active");                    
                var el = document.getElementById("p0p");
                el.classList.add("active");
            }    
            var diceCount = parseInt(imgDice.src.substr(-5,1));
            if(diceCount != 1)
            {
                roundScore += diceCount;
                document.getElementById("current-0").textContent=roundScore;        
            }
            else{
                document.getElementById("current-0").textContent = "0";
                roundScore = 0;
                activePlayer = 1;
                var el = document.getElementById("p1p");
                el.classList.add("active");        
                document.getElementById("p0p").classList.toggle("active");
                
            }   

        }
        else
        {
            var diceCount = parseInt(imgDice.src.substr(-5,1));
            if(diceCount != 1)
            {
                roundScore += diceCount;
                document.getElementById("current-1").textContent=roundScore;
            }
            else{
                document.getElementById("current-1").textContent = "0";
                roundScore = 0;
                activePlayer = 0;
                var el = document.getElementById("p0p");
                el.classList.add("active");        
                document.getElementById("p1p").classList.toggle("active");
            }            
        }
        isFirst = false;    
    }
    Tutor();  
})
    document.querySelector(".btn-hold").addEventListener("click",function(){
        if(!activePlayer){
            scores[0] += roundScore; 
            document.getElementById("score-0").textContent = scores[0];
            if(CheckOver100(scores[0])){
                alert("Тоглогч {0} та хожлоо, танд баяр хүргье",activePlayer+1);
                ReDefault();
            }
            else{
                roundScore = 0;
                document.getElementById("current-0").textContent = "0";
                activePlayer = 1;
                document.getElementById("p1p").classList.add("active");
                document.getElementById("p0p").classList.toggle("active");
            } 
        }
        else{
            scores[1] += roundScore;
            document.getElementById("score-1").textContent = scores[1];
            if(CheckOver100(scores[1])){
                alert("Тоглогч {0} та хожлоо, танд баяр хүргье.",activePlayer+1);
                ReDefault();
            }
            else{
                roundScore = 0;    
                document.getElementById("current-1").textContent = "0";
                activePlayer = 0;
                document.getElementById("p1p").classList.toggle("active");
                document.getElementById("p0p").classList.add("active");
                scores[1]=0;
            }
        }
        
            
    })
    function CheckOver100(a){
        if(a >= 100){
            return true;
        }
        return false;
    }
    var ReDefault = function(){
        imgDice.style.display = "none";
        document.getElementById("current-0").textContent = "0";   
        document.getElementById("current-1").textContent = "0";
        document.getElementById("score-0").textContent  = "0"; 
        document.getElementById("score-1").textContent  = "0";
        scores[0] = 0;
        scores[1] = 0;
        if(document.getElementById("p1p").classList.contains("active")){
            document.getElementById("p1p").classList.toggle("active");
            document.getElementById("p0p").classList.add("active");
        }
    }
// оноог өөрчилж тоглогчдын ээлжийг солих
