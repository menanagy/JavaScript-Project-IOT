var context, loop ,img ;
var initX = 0;
var initY = 0;
var CharacterNumber,level;
context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 950; //950==> 7dod el shasha el soda el marsoma fo2 el asl
context.canvas.width = 2000;
img = document.getElementById("myImg");
img.style.visibility = "hidden";

var EnemyPositionX=2000, EnemyPositionY=810;
var lastEnemyPositionX=-1,lastEnemyPositionY=-1;
var  EnemyIndex=0;
var EnemiesArray=["../images/enemy.gif","../images/Hammer_Bro_death.gif","../images/Mega_Goomba.gif"];
var LivesCounter=5,score=0,screenScore=0;
var ScoresFrequency={ 7:0 , 14:0 , 21:0 };



/*Create Playe and Choose Character*/
var character = new playerCharacters(100,true,100,0,0,0,0);//Constructor and Defualt Value 

/*Choose Character from 4 Character */ 
CharacterNumber=parseInt(localStorage.getItem("characterNum"));
character.setCharacterImage(CharacterNumber);//Choose Character


/*Declaring an instance of the class*/
var CurrentEnemy =new Enemy(80,80);

/* Choosing the level and updating the score */
level=parseInt(localStorage.getItem("localLevelNum"));

score =((level/3)-2)*7;

for (var k in ScoresFrequency) {
  if(score >= k){
    ScoresFrequency[k]=1;
  }
}
/* Showing the lives, level and score to the screen */
document.getElementById('level_p').innerHTML=`Level number  ${(level/3)-1}`;
document.getElementById('score_p').innerHTML=`Your score is  ${score}`;
document.getElementById('lives_p').innerHTML=`Number of lives remaining  ${LivesCounter}`;


CheckEnemyCollision= function(){
  //console.log(character.x ,character.y,lastEnemyPositionX,EnemyPositionY);
  //if(parseInt(character.x)+100 < EnemyPositionX) return ;
  if(EnemyPositionX <=0 ){
    //EnemyFlag = 0;                                                   //da 2 conditions y3adini aw yb2a wa2f fa lazm a-check 3ala l y
    EnemyIndex = Math.floor((Math.random() * 2) + 1);
    EnemyPositionX = 2500 + character.x, EnemyPositionY=810;  
    CurrentEnemy.SetEnemyOnScreen(EnemiesArray[EnemyIndex]);
    score++;
   
  }
  else if( parseInt(EnemyPositionX)  >=  parseInt(character.x) + 100  && parseInt(EnemyPositionX)  <=  parseInt(character.x) + 100 +level  && character.y == 800){
    
    EnemyIndex=Math.floor((Math.random() * 2) + 1);
    EnemyPositionX= 1500 + character.x, EnemyPositionY=810;  
    CurrentEnemy.SetEnemyOnScreen(EnemiesArray[EnemyIndex]);
    LivesCounter--;

  }

}

/*Game Loop */
loop = function() {

  context.clearRect(character.x, character.y ,character.width,character.height);
  /* Controlling character movements */
  if (controller.up && character.jumping == false) {

    character.y_velocity -= 50;
    character.jumping = true;
  }
  if (controller.left) {
        initX += 20;
        document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
        character.x_velocity -= 0.9;
  }
  if (controller.right) {
    character.x_velocity += 0.9;
    initX -= 20;
    document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";  
  }
  character.y_velocity +=0.9 ;// gravity
  character.x += character.x_velocity;
  character.y += character.y_velocity; 
  character.x_velocity *= 0.9;// friction
  character.y_velocity *= 0.9;// friction

  // if character is falling below floor line
  if (character.y > 800) {
    character.jumping = false;
    character.y = 800;
    character.y_velocity = 0;
  }

  // if character is going off the left of the screen // hytshal 3alshan a7na 3andna msh 3ayzeno yalf l a5r el shasha
  if (character.x < 0) {
    character.x = 0;
  } else if (character.x > 300) {// if character goes past right boundary
    character.x = 300;
  }
  //context.fillRect(0, 0, 1800, 1600);// x, y, width, height
  context.drawImage(img, character.x, character.y ,character.width,character.height);
  context.beginPath();
  /*Setting the enemy and updating it's position */
  UpdateEnemyPosition();
  CheckEnemyCollision();
  /* Redirecting to last page (game over or congrats) */
  if(LivesCounter <= 0){
  
    window.location.href = "../html/GAMEOVER.html"
 
  }

  if(score && score % 7 == 0 && ScoresFrequency[score] == 0){
      if(score ==21 ){
        
        window.location.href = "../html/CongtartsPage.html"; 

      }

      level += 3;
      ScoresFrequency[score] = 1;
    
    }
    /*Setting the enemy and updating it's position */
  CurrentEnemy.SetEnemyOnScreen(EnemiesArray[EnemyIndex]);

  /* Updating the lives, level and score to the screen */
  document.getElementById('level_p').innerHTML=`LEVEL:  ${(level/3)-1}`;
  document.getElementById('score_p').innerHTML=`SCORE:  ${score}`;
  document.getElementById('lives_p').innerHTML=`LIVES:  ${LivesCounter}`;
  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);
};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);