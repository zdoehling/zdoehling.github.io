//event listener that starts when the page loads
window.onload = init;

//function called on page load to run another funtion when submit button is pressed
function init() {
    document.getElementById("resultsAppearance").style.display = "none";
    document.getElementById("resultButton").onclick = score;
    /* variations in running submitAppear function
    document.getElementById("resultButton").style.display = "none";
    document.getElementsByName("ten").onclick = submitAppear;
    document.getElementById("copyTen").onclick = submitAppear;
    */
}

//function to run after submit to calculate score
function score() {
    //variables defined to store each type's score count
    var notebookScore = 0;
    var wrappingScore = 0;
    var copyScore = 0;
    var graphScore = 0;

    // pulls all input elements into inputAnswers array
    var inputAnswers = document.getElementsByTagName("input");
    //loops through entire array with a 'for loop'
    for (var i = 0; i < inputAnswers.length; i++) {
        //find the answers in the inputAnswers array that are selected by the user aka 'checked'
        if (inputAnswers[i].checked) {
            //if the value of the selected answer is notebook increase the notebookScore by 1
            if (inputAnswers[i].value == "notebook") {
                notebookScore++;
                //if the value of the selected answer is wrapping increase the wrappingScore by 1
            } else if (inputAnswers[i].value == "wrapping") {
                wrappingScore++;
                //if the value of the selected answer is copy increase the copyScore by 1
            } else if (inputAnswers[i].value == "copy") {
                copyScore++;
                //if the value of the selected answer is graph increase the graphScore by 1
            } else if (inputAnswers[i].value == "graph") {
                graphScore++;
            }
        } 
    }

    // check using the console log to make sure values are updating
    console.log("Notebook Score= " + notebookScore);
    console.log("Wrapping Score= " + wrappingScore);
    console.log("Copy Score= " + copyScore);
    console.log("Graph Score= " + graphScore);

    if ((notebookScore == 0) && (wrappingScore == 0) && (copyScore == 0) && (graphScore == 0)){
        alert("Pick an answer fool!");
    } else{

        if ((notebookScore >= wrappingScore) && (notebookScore >= copyScore) && (notebookScore >= graphScore)){
            console.log("You are Notebook Paper!");
            var resultTitle = document.getElementById("resultTitle");
            var resultText = document.getElementById("resultDescription");
            document.getElementById("resultsAppearance").style.display = "block";
            resultTitle.innerHTML = "You're Notebook Paper!";
            resultText.innerHTML = "Simple yet classic. You are the bread that holds all the important ingredients. Notebook paper is the go-to paper for everyday needs and can hold both crucial information and simple notes, which makes you a timeless piece that can fit into any situation. You enjoy keeping to your routine and having a good time with what you are familiar with.";
            document.getElementById("resultImg").innerHTML ='<img src="images/notebookPaper.jpg") style="object-fit: cover; width: 100%; height: 100%;">';    
            window.scrollBy(0, window.innerHeight);
        } else if((wrappingScore >= notebookScore) && (wrappingScore >= copyScore) && (wrappingScore >= graphScore)){
            var resultTitle = document.getElementById("resultTitle");
            var resultText = document.getElementById("resultDescription");
            document.getElementById("resultsAppearance").style.display = "block";
            resultTitle.innerHTML = "You're Wrapping Paper!";
            resultText.innerHTML = "Very bold and showy you are an important part to every good holiday tradition. Nothing spreads joy like giving gifts, and all good gifts come with a beautiful display of your decorative paper. Wrapping paper people never shy away from new experiences and the wrapping paper itself is created specifically for the experience of opening a gift. Your adventurous attitude helps you to stand out in every situation and keeps you always looking for the next event.";
            document.getElementById("resultImg").innerHTML ='<img src="images/wrappingPaper.jpg") style="object-fit: cover; width: 100%; height: 100%;">';
            window.scrollBy(0, window.innerHeight);
        } else if((copyScore >= notebookScore) && (copyScore >= wrappingScore) && (copyScore >= graphScore)){
            console.log("You are Copy Paper!");
            var resultTitle = document.getElementById("resultTitle");
            var resultText = document.getElementById("resultDescription");
            document.getElementById("resultsAppearance").style.display = "block";
            resultTitle.innerHTML = "You're Copy Paper!";
            resultText.innerHTML = "While it may seem plain at first appearance, copy paper is a clean slate to forge a new path on. There are no lines limiting what or where things can be placed. This great flexibility allows for copy paper to be needed in many locations from holding the resume of a high achieving lawyer to a child\'s drawing placed proudly on the family fridge. You make your own unique way by deciding based on your own interests and not letting anyone else sway your judgment.";
            document.getElementById("resultImg").innerHTML ='<img src="images/copyPaper.jpg") style="object-fit: cover; width: 100%; height: 100%;">';
            window.scrollBy(0, window.innerHeight);
        } else if((graphScore >= notebookScore) && (graphScore >= wrappingScore) && (graphScore >= copyScore)){
            console.log("You are Graph Paper!");
            var resultTitle = document.getElementById("resultTitle");
            var resultText = document.getElementById("resultDescription");
            document.getElementById("resultsAppearance").style.display = "block";
            resultTitle.innerHTML = "You're Graph Paper!";
            resultText.innerHTML = "Graph paper is used to hold large amounts of data and research, and the tools of the trade often include a pad of graph paper. When someone pulls out a sheet of graph paper they are preparing to get down to business, and graph paper with its many vertical and horizontal lines is the perfect pick for the job. You keep things organized and orderly, and often many aspects of your life fit into your neat and orderly boxes. Graph paper people can keep busy being the powerhouse of the office, so they often forget to take much needed personal time.";
            document.getElementById("resultImg").innerHTML ='<img src="images/graphPaper.jpg") style="object-fit: cover; width: 100%; height: 100%;">';
            window.scrollBy(0, window.innerHeight);
        }
    }
}

/* Attempt to make the submit button appear when all questions have been selected

function submitAppear() {
    var numCheck = 0;
    var inputAnswers = document.getElementsByTagName("input");
        for (var i = 0; i < inputAnswers.length; i++)  {
            if (inputAnswers[i].checked) {
                numCheck++; 
                if (numCheck == 10) {
                    document.getElementById("resultButton").style.display = "default";
                }
            }
        }
}
*/