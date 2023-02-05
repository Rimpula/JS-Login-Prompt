let numberPrompt = prompt("Type a number.");  // better way to do this would be like this: let numberPrompt = prompt("Type a number.", 0);
if (numberPrompt > 0 ) {
    alert(1);
} else if (numberPrompt < 0) {                // after that could just put if value > 0 -> alert 1, else if value < 0 alert -1 and then put else alert 0. 
    alert(-1);
} if (numberPrompt == 0) {
    alert(0);
}



// Good example to take to heart.