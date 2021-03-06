import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from './SkuCard'

const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0',
}

class Skus extends Component {
    // publishible key
    state = {
        stripe: window.Stripe('pk_live_JiuW8AAXc0SFjR3eWDnqV45d00xmHijzzA', {
            betas: ['checkout_beta_4'],
        }),
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query SkusForProduct {
                        skus: allStripeSku {
                            edges {
                                node {
                                    id
                                    currency
                                    price
                                    attributes {
                                        name
                                    }
                                }
                            }
                        }
                    }
                `}

                render={({ skus }) => (
                    <div style={containerStyles}>
                        {skus.edges.map(({ node: sku }) => (
                            // <p key={sku.id}>{sku.attributes.name}</p> 
                            <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
                        ))}
                    </div>
                )}
            />
        )
    }
}

export default Skus
