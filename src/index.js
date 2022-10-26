// task 1: Create your own JavaScript object representing your
//    favorite movie. Include at least 5 properties: movie title,
//    director, release year, actors (make this an array with at
//    least 3 elements), and length of movie in minutes.
//    Feel free to add more!

let favMovie = {
  title: "The Giver",
  director: "Phillip Noyce",
  author: "Lois Lowry",
  releaseyear: 2014,
  actors: ["Jeff Bridges", "Brenton Thwaits", "Meryl Streep"]
};

// task 2: After you have created your movie object, console log the
//    title of your movie using dot notation.

console.log(favMovie.title);

// task 3: Console log the director's name
console.log(favMovie.director);

// task 4: Console log the release year.
console.log(favMovie.releaseyear);

// task 5: Use bracket notation in combination with dot notation to
//    access one of the actors and console log their name.
console.log(favMovie.actors[0]);

// task 6: Add an actor to the arrays of actors. Console log the array
//    to check the actor was added.
favMovie.actors[3] = "Taylor Swift";
console.log(favMovie.actors);

// task 7: Oh, no! One of the actors has been cancelled! Remove one
//    of the actors from the array. Console log the array to check
//    the actor was removed.
favMovie.actors.splice(3, 1);
console.log();

// task 8: An extended director's cut has been release for your movie!
//    Add 20 minutes to the duration. Console log duration.
