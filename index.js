/*for img1 */
var randomno1=Math.floor(Math.random()*6)+1;

var randomdiceimg1="images/dice"+randomno1+".png";

document.querySelectorAll("img")[0].setAttribute("src" , randomdiceimg1);

/*for img2 */
var randomno2=Math.floor(Math.random()*6)+1;

var randomdiceimg2="images/dice"+randomno2+".png";

document.querySelectorAll("img")[1].setAttribute("src" ,randomdiceimg2);


if(randomno1>randomno2)
{
    document.querySelector("h1").innerHTML="player 1 win!"
}
else if(randomno1<randomno2)
{
    document.querySelector("h1").innerHTML="player 2 win!"
}
else  
{
    document.querySelector("h1"),innerHeight="draw";
}