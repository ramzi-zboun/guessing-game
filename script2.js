'use strict';

alert('welcome in my page');

let name = prompt('what is your name ?');
console.log(name);
alert('Hello' + name);

alert('we will play aguessing game about me lets go');
let score = 0;
function question1()
{
let go = prompt('my name is ramzi!');
//console.log(go);
switch (go.toLowerCase()) {
    case ' yes':
    case ' y':
        score++;
        alert('corect rami is my name');

        break;
    case 'no':
         case "n":
        alert('thats wrong my name is ramzi');
        break;
         default:
        alert('please answer with yes or no to qustions');
        break;

   }

}

function question2()
{
let age = prompt('my age is 25!');
console.log(age);
switch (age.toLowerCase()) {
    case ' yes':
     case "y":
        alert('thats correct my age is 25');
      score++;
        break;
    case 'no':
          case "n":
        alert('no no I am 25');
        break;
         default:
        alert('please answer with yes or no to qustions');
        break;
    }
}

function question3()
{
let favouritHobby = prompt('my favourite HOBBY IS Drawing!');
//console.log(favouritHobby );
switch (favouritHobby.toLowerCase()) {
    case ' yes':
    case "y":
        alert('yes it is');
          score++;
        break;
    case 'no':
  case "n":
        alert('you wrong');
        break;
         default:
        alert('please answer with yes or no to qustions');
        break;
    }
}

function question4()
{
let study = prompt('I studied communications engineering');
//console.log(study);
switch (study.toLowerCase()) {
    case ' yes':
       case "y":
        alert('yes i have it ');
      score++;
        break;
    case 'no':
      case "n":
        alert('I already finished it ');
        break;
         default:
        alert('please answer with yes or no to qustions ');
        break;
  }
}
  
function question5()
{
let num = prompt('please answer with yes or no to qustions ');
while (num !== 10) {
    
        if (num> 10){
        alert("Go with a Higher number ")
                   }
    if (num <10 ){
        alert("Go with a Lower number ")
    num = prompt('nice try , try again ^');
                 }
if (num === 10){
    alert('You're right, I was really born on this day ');
        score++;
          }
/*let game = prompt('i am agamer ');
//console.log(game);
if (game.toLowerCase === 'yes' || game.toLowerCase === 'y') {
    alert('no i am not agamer ');
}
else if (game.toLowerCase === 'no' || game.toLowerCase === 'n') { alert('you are right'); }*/


function qustion6(){ 
let favFood = ['Pizza', 'Mansaf' ,'Burger', 'block','Hot Dog']; 
        let flag = false;
 for (let i = 0 ; i<6;i++)
   {  
     
      let gue7 = prompt(name + 'Can you guess which foods I like the most?');
      for ( let n =0 ; n<6; i++)
       {
         if (favFood[n] == gue7 )
           {  
           counter++;
           alert('yes i love this');
           flag=true;
           break; 
          }
           
       }
  if (flag == true){
    break;
    }
  }
 }
alert('thank you ' + name);
