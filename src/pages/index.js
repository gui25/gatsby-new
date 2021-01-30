import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Guilherme" />
    <h1>Olá pessoas sejam bem vindas.</h1>
    <p>Esse é o meu blog pessoal onde irei publicar algumas publicações.</p>
    <p>espero que gostem do conteúdo do site e ele venha a ser útil.</p>
    <div style={{ maxWidth: `500px` , minWidth:  `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
