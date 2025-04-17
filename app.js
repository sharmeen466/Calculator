const calculator = document.getElementById("calculator");
const numbers = document.getElementsByClassName("boxes")
const screen = document.querySelector(".screen")

let expression = ""
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function (event) {
        let btnValue = event.target.innerText

        if (btnValue === "=") {
            try {
                let result = eval(expression)
                if(Number(result) === result && result % 1 !== 0){
                    screen.textContent = Number(result).toFixed(6)
                }
                else{
                    screen.textContent = result
                }
                expression = "";
            }

            catch (error) {
                screen.textContent = "Error"
                expression = "";
            }
        }
        
        else if (btnValue === "C") {
            screen.textContent = "";
            expression = ""
        }
        else if (btnValue === "x") {
            screen.textContent += "x"
            expression += "*"
        }

        else {
            screen.textContent += btnValue
            expression += btnValue
        }
    })
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function (event) {
        for (let j = 0; j < numbers.length; j++) {

            if (numbers[j] !== event.target) {
                numbers[j].classList.add("inactive")
                numbers[j].classList.remove("active")
            }

        }
        event.target.classList.add("active")
        event.target.classList.remove("inactive")
    })
}