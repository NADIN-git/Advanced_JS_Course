class List {
    _items = []

    constructor() {
        let goods = this.fetchGoods()
        goods = goods.map(item => {
            return new GoodItem(item)
        })
        this._items = goods
        this.render()
    }

    fetchGoods() {
        return [{
                name: 'Чай',
                price: 150,
                img: '/img/tea.jpg'
            },
            {
                name: 'Кофе',
                price: 150,
                img: '/img/coffee.jpg'
            },
            {
                name: 'Сладости',
                price: 150,
                img: '/img/sweets.jpg'
            },
            {
                name: 'Хлебобулочные изделия',
                price: 150,
                img: '/img/bakeryproducts.jpg'

            },
            {
                name: 'Орехи',
                price: 150,
                img: '/img/nuts.jpg'
            },
            {
                name: 'Сухофрукты',
                price: 150,
                img: '/img/driedfruits.jpg'
            }
        ]

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
            const btn = new Button('Tовар добавлен в корзину', this.addToCart.bind(this))
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