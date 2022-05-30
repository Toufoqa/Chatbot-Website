function getBotResponse(input) {

    

//Start of Conversation 
    if (input.includes( "yes") || input.includes ("yeah") || input.includes( "yep") || input == ("y")  || input.includes("yes") || input.includes("please") ) {
        return "Ok, How many hours do you spend on your laptop daily?";

        
    } else if (input.includes( "no") || input.includes ("nope") || input.includes( "nah") || input ==  ("n")  || input.includes("no thank you") ){ 
        return "Am sorry I couldnt help." 
    

    //ghost questions
    } else if (input == (1) || input == (2) || input == (3) || input == (4) || input == (5) || input == (6) || input == (7) 
    || input == (8) || input == (9) 
    || input.includes("hours") || input.includes("hour")){ 
        return "Got it, and how much is your budget?"

    } else if ( input == (10) || input == (11) || input == (12) || input == (13) || input == (14) || input == (15) || input == (16) || input == (17) || input == (18)){ 
        return "Thats alot of hours, but I dont judge, and how much is your budget?"

    } else if (input >= 1900){ 
        return "I recomend you check out ASUS ROG STRIX G15 15.6 Gaming Laptop"
    

    } else if (input.includes(1) || input.includes(2) || input.includes(3) || input.includes(4) || input.includes(5) || input.includes(6) || input.includes(7) 
    || input.includes(8) || input.includes(9) ){ 
        return "Perfect, and what are you using the laptop for?"
    
    


//gaming
    } else if (input.includes("gaming") || input.includes("games") || input.includes ("game") || input.includes("videogames") || input.includes("playing")) {
        return "I recomend you check out MSI GF63 Thin 15.6' Gaming Laptop";
   

    // edits work studying programming
    } else if (input.includes ("programming") || input.includes("coding") || input.includes("editing") || input.includes("edit") 
    || input.includes("work") || input.includes("working") || input.includes("job") || input.includes("workplace")) {
        return "I recomend you check out HP Pavilion x360 14' 2 in 1 Laptop - Intel® Core™ i7, 512 GB SSD, Silver";


// everyday use watching movies videos
    } else if (input.includes("everyday") || input.includes("streaming") || input.includes("videos") || input.includes("movies") || input.includes("series") 
    || input.includes("reading") || input.includes("music")) {
        return "I recomend you check out LENOVO IdeaPad 3i 14' Chromebook - Intel® Celeron®, 64 GB eMMC, Grey" ;
    }

//Greating and goodbye
    if ( input.includes("hello") || input.includes("hi") || input.includes("hey") || input =="." || input =="" || input== ("sup") || input =="yo" || input.includes("help" )) {
        return "Hello there, would you like me to help you find the best laptop for you?";
    } else if (input.includes("goodbye") || input == ("thank you") || input == ("have a nice day") || input == ("bye")  || input =="peace" || input =="end" || input =="stop") {
        return "Talk to you later!";

    } else if (input.includes("how are you")) {
        return "Am Good, Thank you for asking <3";
    
    } else if (input==("whats your name")) {
        return "My name is Robo!";

    } else {
        return "Am sorry I didnt catch that!";
    }}
    



