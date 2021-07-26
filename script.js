'use strict';


alert('welcome in my page');

let name = prompt('what is your name ?');
console.log(name);
alert(Hello + name);

alert('we will play aguessing game about me lets go');

let go = prompt('my name is ramzi!');
//console.log(go);
switch (go.toLowerCase()) {
    case ' yes':
    case 'y':
        alert('corect rami is my name');

        break;
    case 'no':
    case 'n':
        alert('thats wrong my name is ramzi');
        break;
    default:
        alert('answer with yes or no to qustions');
        break;
}

let age = prompt('my age is 25!');
//console.log(age);
switch (age.toLowerCase()) {
    case ' yes':
    case 'y':
        alert('thats correct my age is 25');

        break;
    case 'no':
    case 'n':
        alert('no no I am 25');
        break;
    default:
        alert('answer with yes or no to qustions');
        break;
}

let favouritHobby = prompt('my favourite HOBBY IS Drawing!');
//console.log(favouritHobby );
switch (favouritHobby.toLowerCase()) {
    case ' yes':
    case 'y':
        alert('yes it is');

        break;
    case 'no':
    case 'n':
        alert('you wrong');
        break;
    default:
        alert('answer with yes or no to qustions');
        break;
}

let study = prompt('I studied communications engineering');
//console.log(study);
switch (study.toLowerCase()) {
    case ' yes':
    case 'y':
        alert('yes i have it ');

        break;
    case 'no':
    case 'n':
        alert('I already finished it ');
        break;
    default:
        alert('please answer with yes or no to qustions');
        break;
}
/*let game = prompt('i am agamer ');
//console.log(game);
if (game.toLowerCase === 'yes' || game.toLowerCase === 'y') {
    alert('no i am not agamer ');
}
else if (game.toLowerCase === 'no' || game.toLowerCase === 'n') { alert('you are right'); }*/



alert('thank you ' + name);