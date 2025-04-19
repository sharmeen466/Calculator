
let btns = document.getElementsByClassName("boxes");
let display = document.getElementById("display")
let expression = ""

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
        for (let j = 0; j < btns.length; j++) {
            btns[j].classList.remove("active")
            btns[j].classList.add("inactive")
        }
        btns[i].classList.add("active")
        btns[i].classList.remove("inactive")

        let btnsValue = event.target.textContent

        if (btnsValue === "=") {
            try {
                display.value = eval(expression)
                expression = display.textContent
            }
            catch (e) {
                display.value = "ERROR"
                expression = ""
            }
        }
        else if (btnsValue === "C") {
            expression = ""
            display.value = ""
        }
        else if (btnsValue === "x") {
            display.value += "x"
            expression += "*"
        }
        else if (btnsValue === "%") {
            display.value = (display.value) / 100
            expression = display.value
        }

        else {
            expression += btnsValue
            display.value = expression;
        }


    })
}