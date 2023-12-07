// ? Old Macdonald Sing Along

/* 
I want to create a function that takes in 2 paramenters
- The first parameter will be an animal
- The second parameter will be the sound the animal makes


Create a function that takes those parameters and will output a verse from the song:
! "Old MacDonald Had A Farm"
-Use string interpolation, to incorperate your parametes into the song.
-Call the function at least 3 times, with 3 different animals and sounds.


! Example with "cow" & "moo"
Old MacDonald had a farm,
    Ee i ee i o!
And on his farm he had some cows,
    Ee i ee i oh!
With a moo-moo here,
    And a moo-moo there.
Here a moo, there a moo,
    Everywhere a moo-moo.
Old MacDonald had a farm,
    Ee i ee i o!!!


TODO Bonus Challanges
1 - Have the function return it, and then Output the song to the window

2- If(you wrote a Traditional Function === true){
    return (create a new version that utilizes Arrow Functions)
} else{
    return (create a Traditional function from your arrow function)
}

 */

function anifunc(Animal, Noise) {
  console.log(
    `Old MacDonald had a farm
    Ee i ee i o!
    And on his farm he had some ${Animal},
    Ee i ee i oh!
    With a ${Noise}-${Noise} here,`
  );
}

anifunc("Dog", "Bark");
anifunc("Cat", "Meow");
anifunc("Duck", "Quack");

//Arrow Function
() => {};

let anifunc = (Animal, Noise) => {
  console.log(
    `Old MacDonald had a farm
      Ee i ee i o!
      And on his farm he had some ${Animal},
      Ee i ee i oh!
      With a ${Noise}-${Noise} here,`
  );
};
