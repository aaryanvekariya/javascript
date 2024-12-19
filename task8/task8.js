const alphabet = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "@#%^&+-=?~"
// const blob  = alphabet + numbers + symbols + alphabet.toUpperCase()
// console.log(blob)
function Generate(){
    let upper = document.getElementById("uppercase").checked

    let lower = document.getElementById("lowercase").checked
    let num = document.getElementById("numbers").checked
    let symbol = document.getElementById("symbols").checked

    let length = document.getElementById("length").value
    

    if (upper == false && lower == false && num == false && symbols == false){
        window.alert("Please select at least one option")
    }

    let blob_arr = [alphabet, numbers, symbols, alphabet.toUpperCase()]
    let value_arr = [lower, num, symbol, upper]

    console.log(blob_arr)
    console.log(value_arr)

    let blob = ""
    for(let i = 0; i < value_arr.length; i++) {
        if(value_arr[i]){
            blob += blob_arr[i]
            // console.log(value_arr.indexOf(value))
        }
    }
    
    console.log(blob)
    let password = ""
    for(let i = 0; i <= length; i++){
        let char = blob.charAt(Math.random() * blob.length+1)
        console.log(char)
        password += char
    }

    document.getElementById("password").innerHTML = password
    
}