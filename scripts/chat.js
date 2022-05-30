
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}



// the bot's first message
function botFirstMessage() {
    let firstMessage = "Hello, im Robo, would you like me to help you pick a laptop?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    
}

botFirstMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Function to get the user input
function getResponse() {

    let userText = $("#textInput").val().toLowerCase();
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //wait time between responses
    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}



// send a message when button is clicked
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    

}

function sendButton() {
    getResponse();
}


// If enter button is pressed send the message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});