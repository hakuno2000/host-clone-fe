function formatPrice(price) {
    return new Intl.NumberFormat().format(price)
}

const toDateString = (date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

export {formatPrice, toDateString}
