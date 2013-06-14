//alert("JavaScript works!");

var friend1 = "Joey";
var friend2 = "Frank";
var friend3 = "Susan";
var energyNeeded = 5
var energyLevel = 10;
var friends = ["Joey", "Frank", "Susan"];
var loopNumber = 5;
var friendsEnergy = 3;
var numFriends = friends.length;
var thanks = friends

//boolean function
var determine = function (e,n) {
    var energy;
    if (e >= n ) {
       energy ="I have enough energy to go running so,";
    }
    else {
          energy ="I think i'll stay home.";
    }
    return energy;
}

//number function
var loop = function (l) {
    while (l > 0) {
    var countDown = l--;
    var lapsLeft = countDown + " lap left.";
    }
    return lapsLeft;
}

//array function
var friendJoining = function (numFriends) {
    for (var i = 0, f = numFriends; i < f; i++) {
       if (numFriends > 0) {
         var join = friends[i] + " is joining me.";
        }
       else {
        var join = friends[i] + " is not joining us today.";
        }
    };
    return join;
}

//string function
 var theirLoss = function (j,f){
    if (j===friend1 && f === friend2) {
        var missedOut;
        missedOut = j + " and " + f + " missed out.";
    } return missedOut
 }

// procedure
var invite = function (friendsEnergy) {
    if (friendsEnergy < 5) {
        console.log ("They do not have the energy.");
    }
}
//boolean function call
var energy = determine(energyLevel, energyNeeded);
//array function call
var join = friendJoining(numFriends);
//number function call
var lapsLeft = loop(loopNumber);
//string function call
var missedOut = theirLoss(friend1, friend2);
console.log (energy);
console.log ("I call up " + friends[0] + " to go running.");
console.log ("I call up " + friends[1] + " to go running.");
// procedure function call
var noGo = invite(friendsEnergy);
console.log (friends[2] + " calls me and wants to go running. So, ");
console.log (join);
console.log ("As we begin to get tired i think to myself, thank goodness only");
console.log (lapsLeft);
console.log (missedOut);

