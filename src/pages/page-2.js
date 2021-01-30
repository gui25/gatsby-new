import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Post 1" />
    <h1>Bem vindo a primeira publicação.</h1>
    <p  style={{textAlign: `left`}}>
    Eu me chamo Guilherme Bernardo Silva esse é o meu primeiro Blog em Gatsb. <br/><br/> 
    eu sou um desenvolvedor web que ama estudar, aprender novas técnologias, eu amo criar aplicações 
    e é o que eu pretendo me esforçar para ser melhor sempre.
    
    </p>
    <Link className="btn"  to="/"><span className="gradient"></span>Volte para a Página inicial</Link>
  </Layout>
)

export default SecondPage
