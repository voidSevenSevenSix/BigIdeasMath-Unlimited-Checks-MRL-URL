//IMPORTANT: YOUR ASSIGNMENT URL MUST HAVE WWW.BIGIDEASMATH.COM/MRL IN IT!!!! IF IT DOESN'T (I.E. WWW.BIGIDEASMATH.COM/BIM) THIS WILL NOT WORK!!
console.log("Initializing...");
var questions = [];
var sjson = "{";
console.log("Getting assignment ID...");
var url = window.location.href;
var len = url.length;
var sub = len-98;
var num = 98;
var id = "";
n = 1;
var x = 0;
while(x < sub){
id = id + url[num];
num++;
x++;
}
var c = id;
console.log("Getting question list...");
for(var i in document.getElementsByClassName("item-card")){
    try{
     questions.push(document.getElementsByClassName("item-card")[i].getAttribute("data-reference"));
    }
    catch{
        console.log("An error occurred. Ignore this. It won't effect the program.");
    }
}
console.log("Converting to JSON...");
for(var e in questions){
sjson = sjson + '"' + questions[e] + '":-10000,';
}
sjson = sjson.replace(/,\s*$/, "");
sjson = sjson + "}";
console.log("Updating checked answers...");
console.log(sjson);
var xhttp1 = new XMLHttpRequest();
xhttp1.open("GET", "https://www.bigideasmath.com/MRL/rest/student-assignments/update-checked-answers?assignmentId=" + c + "&checkAnswerCounts=" + sjson, true);
xhttp1.send();
setTimeout(function(){alert("Success! Click OK to reload.");location.reload();}, 250);
