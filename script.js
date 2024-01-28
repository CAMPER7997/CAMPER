let R = Math.floor(Math.random() * 100)
let message = document.getElementById('message')

function guess(number) {
    if (R > number) {
        message.innerText = "Enter a higher number!"
    }
    else if (R < number) {
        message.innerText = "Enter a lower number!"
    }
    else {
        message.innerText = "YOU FOUND IT!"
    }
}