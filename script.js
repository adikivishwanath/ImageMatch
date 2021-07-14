function matchGame(yourChoice) {

    let humanchoice = yourChoice.id;
    let botChoice = ChoiceToNum(generateRandomInt());

    console.log("You Selected " + humanchoice);
    console.log("The System Selected " + botChoice);
    console.log("The Score array is " + matchedOrNot(humanchoice , botChoice));
    console.log(decideWinner(matchedOrNot(humanchoice,botChoice)));
    let msg = decideWinner(matchedOrNot(humanchoice,botChoice));
    console.log(msg); 
    // let message = matchedOrNot(humanchoice , botChoice);
    console.log(msg['color']);
    imageMatchFrontEnd(humanchoice , botChoice , msg);
    // selected image by the user
    // system selects a random image
    // user selected image id is matched with the system selected image
    // if matched, then display you won else display you lose.

}

function generateRandomInt() {
    return Math.floor(Math.random()*5);
}

function ChoiceToNum(Choice) {
    return ['diya' , 'laddoo' , 'pot' , 'lotus' , 'peacock'][Choice];
}


function matchedOrNot(userChoice , computerChoice) {
       
    scoreDatabase = {
        'diya': {'diya': 1 ,'laddoo': 0 ,'pot': 0 ,'lotus': 0 ,'peacock': 0},
        'laddoo':{'diya': 0, 'laddoo': 1 , 'pot': 0 , 'lotus': 0 ,'peacock': 0},
        'pot':{'diya': 0 , 'laddoo': 0 , 'pot': 1 , 'lotus': 0 , 'peacock': 0},
        'lotus':{'diya': 0 , 'laddoo': 0 , 'pot': 0 , 'lotus': 1 , 'peacock': 0},
        'peacock':{'diya': 0 , 'laddoo': 0 , 'pot': 0, 'lotus': 0 , 'peacock': 1}
    }

    let userScore = scoreDatabase[userChoice][computerChoice];
    let systemScore = scoreDatabase[computerChoice][userChoice];

    return [userScore , systemScore];
     
}

function decideWinner([userScore , systemScore]) {

     if(userScore && systemScore === 1) {
         return {'message' : 'Yayy!! Image Matched', 'color': 'green'}
     }else {
         return {'message': 'Not Matched', 'color': 'red'}
     }

}

function imageMatchFrontEnd(humanchoice , botchoice , decideWinner) {

   imagesDatabase = {
    'diya': document.getElementById('diya').src,
    'laddoo': document.getElementById('laddoo').src,
    'pot': document.getElementById('pot').src,
    'lotus': document.getElementById('lotus').src,
    'peacock': document.getElementById('peacock').src
}

document.getElementById('diya').remove();
document.getElementById('laddoo').remove();
document.getElementById('pot').remove();
document.getElementById('lotus').remove();
document.getElementById('peacock').remove();

let humanDiv = document.createElement('div');
let botDiv = document.createElement('div');
let msgDiv = document.createElement('div');

humanDiv.innerHTML = "<img src='" + imagesDatabase[humanchoice] + "' height=150 width=150  style= 'box-shadow: -3px 3px 16px 17px rgba(22, 96, 45, 1);'>"
botDiv.innerHTML = "<img src='" + imagesDatabase[botchoice] + "' height='150' width='150' style= 'box-shadow: -3px 3px 16px 17px rgba(22,96,45,1);'>"
msgDiv.innerHTML = "<h2 style= 'color: " + decideWinner['color']  + "; font-size: 60px; padding: 30px; '>" + decideWinner['message'] + "</h2>"   


document.getElementById('inside-container-div').appendChild(humanDiv);
document.getElementById('inside-container-div').appendChild(msgDiv);
document.getElementById('inside-container-div').appendChild(botDiv);


}  
