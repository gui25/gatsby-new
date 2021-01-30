// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Segunda publicação" />
    <h1>Gatsby suporta TypeScript por padrão!</h1>
    <p style={{textAlign: `left`}}>
      Isso significa que você pode criar e escrever em .ts/.tsx files para as suas paginas, componentes etc.<br/>
      <br/> Só atenção com os arquivos gatsby-*.js
      (por exemplo gatsby-node.js) pois eles ainda não suportam TypeScript.
    <br/>
    <br/>
      Essa publicação: "Segunda publicação" que foi feita a built em: {" "}
      {data.site.buildTime} foi criada com TypeScript.
    </p>
    <p>
      Se quiser aprender mais, pode ler a documentação do Gatysby com TypeScript aqui:{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        Documentação sobre Typescript
      </a>
      .
    </p>
    <Link to="/">Volte para a Página inicial</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
