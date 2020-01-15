//var image=document.getElementById("image").src="";
var Num_img=0,interval;
function Image_Display(){
    switch(Num_img)
    {
        case 0:     
                    image=document.getElementById("image").src="img/gray.png";
        break;
        case 1:
                    image=document.getElementById("image").src="img/red.png"; 
        break;
        case 2:
                    image=document.getElementById("image").src="img/orange.png";
        break;
        case 3:  image=document.getElementById("image").src="img/green.png"; 
        break;
    }
}
function myfunc_Diplay(){
    interval=setInterval(myfunc_Right,300);
    console.log("Play");
}
function myfunc_Stop(){
    clearInterval(interval);
    console.log("Stop : "+Num_img);

}
function myfunc_Right(){
    Num_img++;
    if(Num_img==4){Num_img=0;}
    Image_Display(Num_img);
    console.log("Right : "+Num_img);
}
function myfunc_Left()
{
    Num_img--;
    if(Num_img<0){Num_img=3;}
    Image_Display(Num_img);
    console.log("Left : "+Num_img);
}

var play=document.getElementById("play").addEventListener('click',myfunc_Diplay);
document.getElementById("stop").addEventListener('click',myfunc_Stop);
document.getElementById("right").addEventListener('click',myfunc_Right);
document.getElementById("lift").addEventListener('click',myfunc_Left);