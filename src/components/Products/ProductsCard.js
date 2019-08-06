import React from "react"

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
}
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const formatPrice = (amount, currency) => {
    let price = (amount /100).toFixed(2)
    let numberFormat = new Intl.NumberFormat(["en-US"], {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
    })
    return numberFormat.format(price)
}

const ProductCard = class extends React.Component {
    async redirectToCheckout(event, product, quantity = 1) {
        event.preventDefault() // whatever, when will we move past this?!
        const { error } = await this.props.stripe.redirectToCheckout({
            items: [{ product, quantity }],
            successUrl: `http://localhost:8000/page-2`,
            cancelUrl: `http://localhost:8000/advanced`,
        })
        if (error) {
            console.warn("Error:", error)
        }
    }
    render() {
        const product = this.props.product
        return (
            <div style={cardStyles}>
                <h4>{products.attributes.name}</h4>
                <p>Price: {formatPrice(product.price, product.currency)}</p>
                <button
                    style={buttonStyles}
                    onClick={event => this.redirectToCheckout(event, product.id)}
                >
                    BUY ME
                </button>
            </div>
        )
    }
}

export default ProductCard