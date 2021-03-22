// declaring variables //
let playing = false
let p1score = []
let p2score = []
let colours = ["red", "yellow", "black"];
let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let player1card =" ";
let player1deck = [];
let player2card =" ";
let player2deck = [];
let deck = []; // the array has to be empty

let details = [["Cameron","Dube"], ["Ash" , "Ketchum"]]; //these are the pre-registered usernames and passwords that the players can use

// login system
function login() {
    let username =document.getElementById("username").value; //the element from index.html is named it username
    let password =document.getElementById("password").value; //the element from index.html is named it password
    console.log(username + password)
    for(let i = 0;i < 2; i++){ //this corresponds to the details array, this expresses that there are 2 sets of detail possibilities
        if (details[i][0] === username){  //this makes sure that the username entered matches the username by the registered user
          if (details[i][1] === password){ //this makes sure that the password entered matches the password by the registered user
              console.log("Login Successful"); //tells the user that they successfully logged in
              play() //this calls in the play function once the login is over
              playing = true // once the login is over the game starts
          }else {
              console.log("Incorrect Username or Password"); //if details entered incorrectly then it tells the user that they have incorrectly entered their details
          }
        }
    }
}


// the play function now gets rid of the login therefore the game can be accessed and played
function play() {
    //this command gets rid of the login page off of the display
    document.getElementById("loginform").style.display="none"; //removes the element from the display
    //play button appears on screen
    document.getElementById("Play_Button").style.display="inline-block";//adds to element to the display
    shuffle (deck);
}
function Play_Now() {
    document.getElementById("Play_Button").style.display = "none"; //removes the element from the display
    document.getElementById("Continue_button").style.display = "inline-block"; //adds to element to the display
}

let count = 0

function Continue() {
    if (count < 15) { // this is the length of the game
            // to determine the winner of that round we have to compare which colour wins
            player1card = player1deck[count];
            player2card = player2deck[count];
            count++ //adds to the count of the players' deck
        document.getElementById("winnerofround").textContent=" ";
            console.log(player1card, player2card);
            if (player1card.includes("red")){ // if player1s card is red
                if (player2card.includes("red")){ // if player2s card is red
                    if (parseInt(player1card.substring(3,player1card.length)) > parseInt(player2card.substring(3,player2card.length))){ //example: red2 - the 2 is the 3rd character
                        // meaning it reads that integer to determine the higher value, which determines the winner of that round
                        // if player one's card has a higher value
                        document.getElementById("winnerofround").textContent+="Player 1 Wins"; //tells player 1 that they won the round
                        p1score.push(player1card, player2card); //gives player 1 both cards which equals 2 points
                        player1card = " "; //resetting p1 card
                        player2card = " "; //resetting p2 card
                    }else { //if player 2's card has a higher value
                        document.getElementById("winnerofround").textContent+="Player 2 Wins"; //tells player 2 that they won the round
                        p2score.push(player2card, player1card); //gives player 2 both cards which equals 2 points
                        player1card = " "; //resetting p1 card
                        player2card = " "; //resetting p2 card
                    }
                }else if (player2card.includes("yellow")){ //if player 2's card is yellow
                    document.getElementById("winnerofround").textContent+="Player 2 Wins"; //tells player 2 that they won the round
                    p2score.push(player2card, player1card); //gives player 2 both cards which equals 2 points
                    player1card = " "; //resetting p1 card
                    player2card = " "; //resetting p2 card
                } else{ //if player 2's card is black
                    document.getElementById("winnerofround").textContent+="Player 1 Wins"; //tells player 1 that they won the round
                    p1score.push(player2card, player1card); //gives player 1 both cards which equals 2 points
                    player1card = " "; //resetting p1 card
                    player2card = " "; //resetting p2 card
                }
            }else if (player1card.includes("yellow")){ //if player 1's card is yellow
                if (player2card.includes("yellow")){ //if player 2's card is also yellow
                    if (parseInt(player1card.substring(6,player1card.length)) > parseInt(player2card.substring(6,player2card.length))){ //yellow5 5 is the 6th character
                        // meaning it reads that integer to determine the higher value, which determines the winner of that round
                        // if player 1's card has a higher value
                        document.getElementById("winnerofround").textContent+="Player 1 Wins"; //tells player 1 that they won the round
                        p1score.push(player1card, player2card); //gives player 1 both cards which equals 2 points
                        player1card = " "; //resetting p1 card
                        player2card = " "; //resetting p2 card
                    }else { // if player 2's card has a higher value
                        document.getElementById("winnerofround").textContent+="Player 2 Wins"; //tells player 2 that they won the round
                        p2score.push(player2card, player1card); //gives player 2 both cards which equals 2 points
                        player1card = " "; //resetting p1 card
                        player2card = " "; //resetting p2 card
                    }
                }else if (player2card.includes("red")){ //if player 2's card is red
                    document.getElementById("winnerofround").textContent+="Player 1 Wins"; //tells player 1 that they won the round
                    p1score.push(player2card, player1card); //gives player 1 both cards which equals 2 points
                    player1card = " "; //resetting p1 card
                    player2card = " "; //resetting p2 card
                }else{ // if player 2's card is black
                    document.getElementById("winnerofround").textContent+="Player 2 Wins"; //tells player 2 that they won the round
                    p2score.push(player2card, player1card); //gives player 2 both cards which equals 2 points
                    player1card = " "; //resetting p1 card
                    player2card = " "; //resetting p2 card
                }
            }else if (player1card.includes("black")){ // if player 1's card is black
                if (player2card.includes("black")){ // if player 2's card is black
                    if (parseInt(player1card.substring(5,player1card.length)) > parseInt(player2card.substring(5,player2card.length))){ //black9 9 is the 5th character
                        // meaning it reads that integer to determine the higher value, which determines the winner of that round
                        // if player 1's card has a higher value
                        document.getElementById("winnerofround").textContent+="Player 1 Wins"; //tells player 1 that they won the round
                        p1score.push(player1card, player2card); //gives player 1 both cards which equals 2 points
                        player1card = " "; //resetting p1 card
                        player2card = " "; //resetting p2 card
                    }else { // if player 2's card has a higher value
                        document.getElementById("winnerofround").textContent+="Player 2 Wins"; //tells player 2 that they won the round
                        p2score.push(player2card, player1card); //gives player 2 both cards which equals 2 points
                        player1card = " "; //resetting p1 card
                        player2card = " "; //resetting p2 card
                    }
                }else if(player2card.includes("yellow")){ // if player 2's card is yellow
                    document.getElementById("winnerofround").textContent+="Player 1 Wins"; //tells player 1 that they won the round
                    p1score.push(player1card, player2card); //gives player 1 both cards which equals 2 points
                    player1card = " "; //resetting p1 card
                    player2card = " "; //resetting p2 card
                }else { // if player 2's card is red
                    document.getElementById("winnerofround").textContent+="Player 2 Wins"; //tells player 2 that they won the round
                    p2score.push(player2card, player1card); //gives player 2 both cards which equals 2 points
                    player1card = " "; //resetting p1 card
                    player2card = " "; //resetting p2 card
                }
            }
    }else {
        winner() // calls winner function
    }
}

function winner() { //tells the user who wins the entire game
    if (p1score.length > p2score.length) {
        document.getElementById("winnerofgame").textContent+="Player 1 Wins the game" //tells player 1 that they won
    }else {
        document.getElementById("winnerofgame").textContent+="Player 2 Wins the game" //tells player 2 that they won
    }
    document.getElementById("p1scoredisplay").textContent+="Player 1s score is " +p1score.length; //tells users what player 1s ending score was
    document.getElementById("p2scoredisplay").textContent+="Player 2s score is " +p2score.length; //tells users what player 2s ending score was
    document.getElementById("Restart").style.display="inline-block"; //displays Restart button
    document.getElementById("Continue_button").style.display="none"; //eliminates continue button from display
}

function restart() {
    count = 0
    play()
    document.getElementById("Restart").style.display="none"; //eliminates restart button from display
    document.getElementById("p1scoredisplay").textContent=" "; //eliminates the text from the display
    document.getElementById("p2scoredisplay").textContent=" "; //eliminates the text from the display
    document.getElementById("winnerofgame").textContent=" "; //eliminates the text from the display
    document.getElementById("winnerofround").textContent=" "; //eliminates the text from the display
    p1score = []; //resets player 1s score
    p2score = []; //resets player 2s score
    player1deck = []; //resets player 1s deck
    player2deck = []; //resets player 2s deck
    shuffle(deck); //re shuffles deck
}

// clears everything to start //
console.clear();




function shuffle(deck) {
    // for 31 turns
    // switch the values of two random cards
    for(let i = 0; i < colours.length; i++)
    {
        for(let x = 0; x < values.length; x++)
        {
            let card = colours[i] + values[x];
            deck.push(card);
        }
    }
    for (let i = 0; i < 31; i++)
    {
        let location1 = Math.floor((Math.random() *30));
        let location2 = Math.floor((Math.random() *30));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
    for(let i = 0; i < 30; i++){
        if (i%2 === 0){ // player 1s card
            player1deck.push(deck[0]); // adds the card to player 1s deck
            deck.splice(0,1);// removes the card form the main deck
        } else{ // player 2s card
            player2deck.push(deck[0]);// adds the card to player 2s deck
            deck.splice(0,1);// removes the card form the main deck
        }
    }
    console.log(deck);
    console.log(player2deck, player1deck);
}

// handing out the top card to the players //
// if either deck is empty, game over
    // game over


///WE NEED TO ADD THE DRAW BUTTON, AND HAVE CARDS ON DISPLAY
