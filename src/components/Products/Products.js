import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductsCard from './ProductsCard'
//import { symlink } from "fs";

const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0',
}

class Products extends Component {
    // publishible key
    state = {
        stripe: window.Stripe('pk_live_JiuW8AAXc0SFjR3eWDnqV45d00xmHijzzA', {
            betas: ['checkout_beta_4'],
        }),
    }

    // THE ONLY ONE THAT MATTERS
    // prod_FZjigeUz63fUTk

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query ActiveProductsQuery {
                        allStripeProduct(filter: {metadata: {is_live: {eq: "true"}}}) {
                            edges {
                                node {
                                    name
                                    active
                                    id
                                    metadata {
                                        price
                                    }
                                }
                            }
                        }
                    }
                `}

                render={({ products }) => (
                    <div style={containerStyles}>
                        {products.edges.map(({ node: product }) => (
                            <ProductCard key={product.id} name={product.name} stripe={this.state.stripe} />
                        ))}
                    </div>
                )}
            />
        )
    }
}

export default Products