import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skus from "../components/Products/Skus"

const AdvancedExamplePage = () => (
    <Layout>
        <SEO title="Advanced Example" />
        <h1>This is the Advanced example</h1>
        <Skus />
    </Layout>
)

export default AdvancedExamplePage