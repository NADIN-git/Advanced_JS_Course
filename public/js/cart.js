class GetExpression {

    _text = ''

    constructor(text) {
        this._text = text

    }

    hello() {
        let newGet = new GetExpression("Giant")
        console.log('Hello!' + ' ' + this._text);
    }

    render() {
        let newGet = new hello("Giant")

    }
}





/* render() {
        const placeToRender = document.querySelector('.btn_basket')
        const placeToCart = document.querySelector('.btn_basket')
        if (placeToCart) {
            const btnCart = document.createElement('div')
            btnCart.innerHTML = `Корзина`
            placeToCart.appendChild(btnCart)
        }
        new Button('Корзина', placeToCart)
        if (placeToRender) {
            const btn = this.getTempLate()
            btn.innerHTML = this._text
            placeToRender.appendChild(btn)

            btn.addEventListener('click', () => {
                this.onBtnClick()
            })
        }

    }
}*/