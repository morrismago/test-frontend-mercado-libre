import Head from 'next/head';
import Layout from '../../components/commons/layout/index';
import ItemsComponent from "../../components/items/index";

export default function Items() {

  return (
    <div >
      <Head>
         <title>Buscador Mercadolibre | Página de listado de productos</title>
         <meta name="description" content={"Resultados de búsqueda del buscador de Mercado Libre"} />
         <meta property="og:title" content="Página de listado de productos | Página de productos" />
         <meta property="og:description" content="Página de listado de productos" />
      </Head>
      <Layout>
        <ItemsComponent />
      </Layout>
    </div>
  )
}
