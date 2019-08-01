import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Buy Me</h1>
    <p>Step right up and buy some stuff!</p>
    <p>You know you want it!</p>
    <div>
      <Checkout />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
