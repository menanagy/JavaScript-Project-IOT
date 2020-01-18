var NameChar=["Fady Jan<img src='../images/true.gif' width='80' height = '50'>",
"Lamis<img src='../images/true.gif' width='80' height = '50'>",
"Mina Nagy<img src='../images/true.gif' width='80' height = '50'>",
"Nour<img src='../images/true.gif' width='80' height = '50'>"
]
var commentOnChar=[
"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk<br>MMMMMMM",
"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br>JJJJJJJ",
"KSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS<br>iiiiiii",
"VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV<br><<<<<<<"];
var Num_img=0,interval;

function Image_Display(){
    switch(Num_img)
    {
        case 0:     
            image=document.getElementById("image").src=array_character[0];//"Images/beka.gif";
        break;
        case 1:
            image=document.getElementById("image").src=array_character[1];//"Images/lamis.gif";////"Images/.gif"; 
        break;
        case 2:
            image=document.getElementById("image").src=array_character[2];//"Images/sonic.gif";
        break;
        case 3:  
            image=document.getElementById("image").src=array_character[3];//"Images/Circle.gif";//array_character[3];
        break;
    }
}
function myfunc_play(){
    localStorage.setItem("characterNum",Num_img);
    window.location.href ="LevelPage.html";
}

function myfunc_Right(){
    $(document.querySelector("#right")).css('background-color',"pink");
    Num_img++;
    if(Num_img==4){Num_img=0;}
    Image_Display(Num_img);
    console.log("Right : "+Num_img);
    setTimeout(function(){ $(document.querySelector("#right")).css('background-color', "white"); }, 200);
    document.querySelector("#head").innerHTML=NameChar[Num_img];
    document.querySelector("#MessageChar").innerHTML=commentOnChar[Num_img];
    CharacterNumber=Num_img;
}
function myfunc_Left()
{
    $(document.querySelector("#left")).css('background-color',"pink");
    Num_img--;
    if(Num_img<0){Num_img=3;}
    Image_Display(Num_img);
    console.log("Left : "+Num_img);
    setTimeout(function(){ $(document.querySelector("#left")).css('background-color', "white"); }, 200);
    document.querySelector("#head").innerHTML=NameChar[Num_img];
    document.querySelector("#MessageChar").innerHTML=commentOnChar[Num_img];
    CharacterNumber=Num_img;
}
document.querySelector("#play").addEventListener('click',myfunc_play);
document.getElementById("right").addEventListener('click',myfunc_Right);
document.getElementById("left").addEventListener('click',myfunc_Left);
window.addEventListener("keydown",function(event) {
    console.log(event.keyCode);
    switch(event.keyCode) {
      case 37:// left key
        myfunc_Left();
      break;
      case 39:// right key
        myfunc_Right();
      break;
      case 13:// Enter key
        myfunc_play();
      break;
    }
});
