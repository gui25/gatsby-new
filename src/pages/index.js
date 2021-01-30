import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Guilherme" />
    <h1>Olá pessoas sejam bem vindos.</h1>
    <p >Esse é o meu blog pessoal onde irei fazer algumas publicações.</p>
    <p>Aproveitem o site e espero que gostem do conteúdo do site e que ele venha a ser útil.</p>
    <div style={{ maxWidth: `500px` , minWidth:  `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link class="btn" to="/page-2/"><span class="gradient"></span>Primeira publicação</Link>
    <Link class="btn" to="/using-typescript/"><span class="gradient"></span>Segunda Publicação com Typescript</Link>
  </Layout>
)

export default IndexPage
