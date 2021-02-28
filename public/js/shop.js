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
    counter = 1
    _allCounter = 1


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
        const placeToRender = document.querySelector('.basket')
        if (placeToRender) {
            placeToRender.innerHTML = ''
            const addCart = document.createElement('div')
            addCart.innerHTML = `Tовар "${this._name}" в количестве ${this.counter++} шт.           
            добавлен в корзину </BR> </BR>`
            placeToRender.appendChild(addCart)
            const allCart = document.createElement('div')
            quantityGoods++
            allPriceGoods = allPriceGoods + this._price
            allCart.innerHTML = "Всего товаров в корзине: " + quantityGoods + " шт. на сумму " + allPriceGoods + " руб."
            placeToRender.appendChild(allCart)
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


const placeToCart = document.querySelector('.btn_basket')
if (placeToCart) {
    const btnCart = document.createElement('div')
    btnCart.innerHTML = `Корзина`
    placeToCart.appendChild(btnCart)
    new Button('Корзина', placeToCart)
}

let quantityGoods = 0,
    allPriceGoods = 0
new List()