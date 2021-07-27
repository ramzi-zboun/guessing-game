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
        alert('corect rami is my name');

        break;
    case 'no':
        alert('thats wrong my name is ramzi');
        break;


}

let age = prompt('my age is 25!');
//console.log(age);
switch (age.toLowerCase()) {
    case ' yes':

        alert('thats correct my age is 25');

        break;
    case 'no':
        alert('no no I am 25');
        break;
}

let favouritHobby = prompt('my favourite HOBBY IS Drawing!');
//console.log(favouritHobby );
switch (favouritHobby.toLowerCase()) {
    case ' yes':

        alert('yes it is');

        break;
    case 'no':

        alert('you wrong');
        break;
}

let study = prompt('I studied communications engineering');
//console.log(study);
switch (study.toLowerCase()) {
    case ' yes':
        alert('yes i have it ');

        break;
    case 'no':
        alert('I already finished it ');
        break;

}
/*let game = prompt('i am agamer ');
//console.log(game);
if (game.toLowerCase === 'yes' || game.toLowerCase === 'y') {
    alert('no i am not agamer ');
}
else if (game.toLowerCase === 'no' || game.toLowerCase === 'n') { alert('you are right'); }*/



alert('thank you ' + name);