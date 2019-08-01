import React from "react"

const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    outline: "none",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "rgb(255, 178, 56",
    borderRadius: "6px",
    letterSpacing: "1.5px"
}

const Checkout = class extends React.Component {
    // Initialize Stripe with publishable key
    componentDidMount() {
        this.stripe = window.Stripe("pk_test_bS2TraIfY8HbUMBt1byg5yOh00WAj1OE4Y", {
            betas: ["checkout_beta_4"],
        })
    }

    async redirectToCheckout(event) {
        event.preventDefault()
        const { error } = await this.stripe.redirectToCheckout({
            items: [{ sku: "SKU_ABC-1223", quantity: 1}],
            successUrl: `http://localhost:8000/page-2/` ,
            cancelUrl: `http://localhost:8000/`,
        })

        if(error) {
            console.warn("Error:", error)
        }
    }

    render() {
        return (
            <button
                style={buttonStyles}
                onClick={event => this.redirectToCheckout(event)}
            >
                BUY MY THING
            </button>
        )
    }
}
export default Checkout