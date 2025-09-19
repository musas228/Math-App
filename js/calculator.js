export default calculator
function calculator() {

    const calsLed = document.getElementById("cals-led");
    const numBtns = document.querySelectorAll("#num-btn");
    const clearBtn = document.querySelector("#clear");
    const backSpace = document.getElementById("backspace-btn");
    const aqualBtn = document.querySelector("#aqual-btn");
    // Проверяем, что строка состоит только из чисел, знаков арифметики и скобок
    function isValidExpression(str) {
        return /^[\s\d\+\-\*\/\(\)$$\.]+$/.test(str);
    }
    // ввод в поле с помощью кнопок и с помощью клавиатуры
    numBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            calsLed.value += btn.textContent
        })
    })

    // кнопка очистки поля целиком
    const getClear = () => {
        calsLed.value = ""
    }
    clearBtn.addEventListener("click", getClear)

    // кнопка стирания одного символа


    backSpace.addEventListener('click', function () {
        calsLed.value = calsLed.value.slice(0, -1);
    })

    // решение выражения при нажати
    aqualBtn.addEventListener("click", () => {
        let exp = calsLed.value
        calsLed.led = exp.replace(/:/g, "/").replace(/x/g, "*")
        // проверка содержимого
        if (isValidExpression(exp)) {
            calsLed.value = eval(exp);
        } else {
            calsLed.value = "";
            calsLed.placeholder = "ошибка, введите выражение";
        }
    })
}
