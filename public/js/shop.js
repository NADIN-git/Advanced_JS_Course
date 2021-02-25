class List {
    _items = []

    constructor(CartInstane) {
        this.fetchGoods()
            .then(res => {
                return res.json()
            })
            .then(data => {
                const goods = data.data.map(item => {
                    return new GoodItem(item, CartInstane)
                })
                this._items = goods
                this.render()
            })
    }

    fetchGoods() {
        const url = 'http://localhost:3000/database/items.json'
        return fetch(url);
    }

    render() {
        this._items.forEach(Good => {
            Good.render()
        })
    }

}

class GoodItem {
    _name = ''
    _price = 0
    _img = 0

    constructor({
        name,
        price,
        img
    }) {
        this._name = name
        this._price = price
        this._img = img
    }

    addToCart() {
        const placeToRender = document.querySelector('.btns')
        if (placeToRender) {
            /*console.log('Товар "', this._name, '" добавлен в корзину')*/
            const addCart = document.createElement('div')
            const btn = new Button(`Tовар "${this._name}" добавлен в корзину`, this.addToCart.bind(this))
            btn.render(addCart)
            placeToRender.appendChild(addCart)
        }
    }

    render() {
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerHTML = `${this._name} = ${this._price} руб. </BR>
            <img src = "${this._img}" /> </BR>`

            const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
            btn.render(block)
            placeToRender.appendChild(block)
        }
    }
}

new List()