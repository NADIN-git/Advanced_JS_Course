class Button {
    _text = ''
    _callback = null

    constructor(text, callback) {
        this._text = text
        this.callback = callback
    }

    onBtnClick() {
        const callback = this.callback
        if (typeof callback === 'function') {
            callback()
        }
    }
    getTempLate() {
        const btn = document.createElement('button')
        btn.classList.add('btn')

        return btn
    }

    render(placeToRender) {
        if (placeToRender) {
            const btn = this.getTempLate()
            btn.innerHTML = this._text
            placeToRender.appendChild(btn)

            btn.addEventListener('click', () => {
                this.onBtnClick()
            })
        }
    }
}


/*btn.render(block)
placeToRender.appendChild(block)*/