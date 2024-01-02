import Layout from '../components/commons/layout/index';
import Head from 'next/head';;

export default function Home() {
  return (
    <div >
      <Head>
         <title>Buscador Mercadolibre | Página de Inicio</title>
         <meta name="description" content="Bienvenido al buscador de productos de Mercado Libre." />
         <meta property="og:title" content="Bienvenido al buscador de productos de Mercado Libre.| Página de Inicio" />
         <meta property="og:description" content="Bienvenido al buscador de productos de Mercado Libre." />
      </Head>
      <Layout>

      </Layout>
      
    </div>
  )
}
