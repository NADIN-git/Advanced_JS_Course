class Cart {
    _name = ''

    constructor({
        name
    }) {
        this._name = name
    }

    render() {
        const placeToRender = document.querySelector('.btns')
        if (placeToRender) {
            const addCart = document.createElement('div')
            const btn = new Button('Корзина', this.render.bind(this))
            btn.render(addCart)
            placeToRender.appendChild(addCart)
        }
    }
}

new Cart()