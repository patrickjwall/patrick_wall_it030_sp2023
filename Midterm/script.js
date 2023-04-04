var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = "Welcome to the ultimate beginner tennis guide on this fine morning!";
else if (hrs >= 12 && hrs <= 16)
    greet = "Welcome to the ultimate beginner tennis guide on this magnificent afternoon!";
else if (hrs >= 16 && hrs <= 20)
    greet = "Welcome to the ultimate beginner tennis guide on lovely evening!";
else
    greet = "Welcome to the ultimate beginner tennis guide on lovely evening!";

document.getElementById('introduction').innerHTML = '<b>' + greet + '</b>';