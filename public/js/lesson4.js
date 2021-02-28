const text = ""
const rrrr = ""

function messageErr1(text) {
    const placeToRender = document.querySelector('.valid_err1')
    if (placeToRender) {
        placeToRender.innerHTML = ''
        const errValid = document.createElement('div')
        errValid.innerHTML = text
        placeToRender.appendChild(errValid)
    }
}

function messageErr2(text) {
    const placeToRender = document.querySelector('.valid_err2')
    if (placeToRender) {
        placeToRender.innerHTML = ''
        const errValid = document.createElement('div')
        errValid.innerHTML = text
        placeToRender.appendChild(errValid)
    }
}

function multi() {
    const validInp1 = document.getElementById('inp_1').value;
    let re = "^[A-zА-яЁё]+$";
    const result1 = validInp1.match(re);
    if (result1) {
        const ttt = messageErr1("Имя введено верно")
    } else {
        const ttt = messageErr1("Имя должно содержать только буквы")
    }
    const validInp2 = document.getElementById('inp_2').value;
    let re2 = "[+7(\d{3})]\d*"
    /*"[+7(\d{3})]\d{7}"
    /*let re2 = "[+7(\d{3})]\d*"*/

    const result2 = validInp2.match(re2);
    alert(result2);
    if (result2) {
        const ttt = messageErr2("Телефон введен верно")
    } else {
        const ttt = messageErr2("Телефон должен соответствовать шаблону +7(000)000-0000")
    }
}