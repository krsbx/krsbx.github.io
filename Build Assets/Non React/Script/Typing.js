        var typedText;
        var text = ["Hi!", "Welcome To My Page!", "I'm KRSBX ", "I'm a Developer ", "See My CV Down Below!"];

        var charIndex = 0, textIndex = 0;

        const textDelay = 125, eraseDelay = 75, newDelay = 1000;

        //Typing Effect
        function typing(){
            if(charIndex < text[textIndex].length){
                //Add each char inside the text into typedText one by one
                typedText.textContent += text[textIndex].charAt(charIndex);
                charIndex++;
                //Delay for the next input
                setTimeout(typing, textDelay);
            }else{
                setTimeout(erase, newDelay);
            }
        }

        //Erasing Effect
        function erase(){
            if(charIndex > 0){
                //Pop each char inside typedText by removing the latest char
                typedText.textContent = text[textIndex].substr(0, charIndex-1);
                charIndex--;
                //Delay for the next step
                setTimeout(erase, eraseDelay);
            }else{
                textIndex++;

                //Check whether all the text already showned or not
                if(textIndex >= text.length)
                    textIndex = 0;
                //Delay for the next input
                setTimeout(typing, textDelay);
            }
        }

        document.addEventListener("DOMContentLoaded", function(){
            //Check whether the page already loaded or not
            // if so, call typing function
            typedText = document.getElementById("typedText")
            if(typedText){
                setTimeout(typing, newDelay);
            }
        });