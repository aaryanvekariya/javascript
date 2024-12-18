//     let result;

//     if (selector === "C to F") {
        
//         result = (inputValue * 9/5) + 32;
//         document.getElementById("Show").innerHTML = inputValue + "°C = " + result.toFixed(2) + "°F";
//     } else if (selector === "KG TO POUND") {
        
//         result = inputValue * 2.20462;
//         document.getElementById("Show").innerHTML = inputValue + " KG = " + result.toFixed(2) + " Pounds";
//     }
// }

function convert() {
    
    let selector = document.getElementById("select").value;

    
    let inputValue = parseFloat(document.getElementById("value").value);



    switch (selector) {
        case "C to F":
            document.getElementById("Show").innerHTML = inputValue + "°C = " + ((inputValue * 9/5) + 32).toFixed(2) + "°F";
            break;
        case "KG TO POUND":
            document.getElementById("Show").innerHTML = inputValue + " KG = " + (inputValue * 2.20462).toFixed(2) + "Pounds";
            break;
        case "D TO R":
            document.getElementById("Show").innerHTML = inputValue + " D = " + (inputValue * 84.94).toFixed(2) + "Dollar";
            break;
        case "Y TO R":
            document.getElementById("Show").innerHTML = inputValue + " Y = " + (inputValue * 107.87).toFixed(2) + "Yuro";
                break;    
        default:
            document.getElementById("Show").innerHTML = "Invalid conversion selected";
    }
}