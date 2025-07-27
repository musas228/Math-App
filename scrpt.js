function sqrt() {
    let answerBlock = document.getElementById("text")
    let itemArr = []
    document.querySelectorAll(".value-input").forEach((item) => {
        item = parseInt(item.value)
        itemArr.push(item)
    })
    if (itemArr.includes(NaN)) {
        return answerBlock.innerHTML = `<span class="red">Заполните пустые поля. Подсказка - на месте x<sub class="sub">2</sub> = 1`
    }
    let a = parseInt(document.getElementById("input-a").value)
    let b = parseInt(document.getElementById("input-b").value)
    let c = parseInt(document.getElementById("input-c").value)
    let d = parseInt(document.getElementById("input-d").value)
    let disrim = 0
    disrim = (b * b) - 4 * a * (c + d)
    let sqrtNum = Math.sqrt(disrim)
    let x1 = ((-1 * b) + sqrtNum) / 2 * a
    let x2 = ((-1 * b) - sqrtNum) / 2 * a
    let aChar, bChar, cChar, dChar, cdSum
    if (a == 1) {
        aChar = 'x'
    }
    else {
        aChar = a + "x"
    }
    bChar = b + "x"
    if (b >= 0) {
        bChar = `+${b}x`
    }
    if (c >= 0) {
        cChar = "+" + c
    }
    else {
        cChar = c
    }
    if (d >= 0) {
        dChar = d
    }
    else {
        dChar = "-" + d
    }
    cdSum = c + d
    if (cdSum >= 0) {
        cdSum = "+" + cdSum
    }
    else {
        cdSum = "-" + cdSum
    }


    if (Number.isNaN(sqrtNum) && d !== 0) {
        console.log(dChar);

        return answerBlock.innerHTML = `${aChar}<sub class="sub">2</sub>${bChar}${cChar} = ${dChar}<br>
        ${aChar}<sub class="sub">2</sub>${bChar}${cChar} + (${dChar}) = 0 <br>
        ${aChar}<sub class="sub">2</sub>${bChar}${cdSum} = 0 <br>
        D = b<sub class="sub">2</sub> - 4ac
        <br> D = ${b * b} - 4 * ${a} * ${c} <br> 
        <p class="red">Корень отрицательный - решения нет</p>`
    }
    else if (Number.isNaN(sqrtNum) && d == 0) {
        return answerBlock.innerHTML = `${aChar}<sub class="sub">2</sub>${bChar}${cChar} = 0 <br>
        ${aChar}<sub class="sub">2</sub>${bChar}${cChar} = 0 <br>
        ${aChar}<sub class="sub">2</sub>${bChar}${cChar} = 0 <br>
        D = b<sub class="sub">2</sub> - 4ac
        <br> D = ${b * b} - 4 * ${a} * ${c} <br> 
        <p class="red">Корень отрицательный - решения нет</p>`
    }
    if (d !== 0) {
        answerBlock.innerHTML = `${aChar}<sub class="sub">2</sub>${bChar}${cChar} = ${dChar}<br>
        ${aChar}<sub class="sub">2</sub>${bChar}${cChar} + (${dChar}) = 0 <br>
        ${aChar}<sub class="sub">2</sub>${bChar}${cdSum} = 0 <br>
        D = b<sub class="sub">2</sub> - 4ac
        <br> D = ${b * b} - 4 * ${a} * ${c} <br> 
        X<sub>1</sub> = -b + <span>&radic;</span>D / 2a <br>
        X<sub>1</sub> = (-1* ${b}) + ${sqrtNum} / 2 * ${a}<br>
        X<sub>2</sub> = -b - <span>&radic;</span>D / 2a <br>
        X<sub>2</sub> = (-1* ${b}) - ${sqrtNum} / 2 * ${a}<br>
        X<sub>1</sub> = ${x1}<br>
        X<sub>2</sub> = ${x2}
        `
    }
    else {
        answerBlock.innerHTML = `${aChar}<sub class="sub">2</sub>${bChar}${cChar} = 0 <br>
        D = b<sub class="sub">2</sub> - 4ac
        <br> D = ${b * b} - 4 * ${a} * ${c} <br>
        X<sub>1</sub> = -b + <span>&radic;</span>D / 2a <br>
        X<sub>1</sub> = (-1* ${b}) + ${sqrtNum} / 2 * ${a}<br>
        X<sub>2</sub> = -b - <span>&radic;</span>D / 2a <br>
        X<sub>2</sub> = (-1* ${b}) - ${sqrtNum} / 2 * ${a}<br>
        X<sub>1</sub> = ${x1}<br>
        X<sub>2</sub> = ${x2}
        `}
}


