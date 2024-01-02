import Head from 'next/head';
import Layout from '../../components/commons/layout/index';
import { useRouter } from 'next/router';
import ItemDetailComponent from "../../components/itemDetail/index";


export default function ItemDetail() {
const router = useRouter();
const { id } = router.query;

  return (
    <div >
      <Head>
         <title>Buscador Mercadolibre | Página de detalle de producto</title>
         <meta name="description" content={"Detalle de producto del buscador de Mercado Libre"} />
         <meta property="og:title" content="Página de listado de productos | Página de detalle de producto" />
         <meta property="og:description" content="Detalle de producto del buscador de Mercado Libre" />
      </Head>
      <Layout>
        <ItemDetailComponent itemId={id} />
      </Layout>
    </div>
  )
}
