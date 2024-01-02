import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "./itemDetail.module.scss";
import { getItemById } from '../../services';
import {formatPrice} from '../../utils/index';
import Breadcrumb from '../breadcrumb/index';
import Head from 'next/head';

export default function ItemDetail({itemId}) {

  const router = useRouter();
  const [item, setitem] = useState({});
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (itemId) {
        getItemById(itemId)
        .then((data) => {
          setitem(data.item);
          setCategory(data.category);
          setPrice(data.item.price.amount);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [itemId]);

  return (
    <>
      <div className={styles.item_detail_container}>
        <Head>
          <title>{item.title} - Detalle del Producto</title>
          <meta name="description" content={`Detalles de ${item.title}`} />
          <meta property="og:title" content={`Detalles de ${item.title} | Página de detalle de producto`}  />
         <meta property="og:description" content={`Detalles de ${item.title} | Página de detalle de producto`}  />
        </Head>
        <Breadcrumb categories={[category]}/>
        {/* {loading ? ( 
            <h2> Cargando...</h2>
          ) : ( */}
          <section className={styles.item_detail}>
              <div className={styles.item_detail__image}>
                <img src={item.picture} alt={item.title} />
                
              </div>
              <div className={styles.item_detail__info}>
                <p>
                  {item.condition}
                </p>
                <h1>{item.title}</h1>
                <h2>{price ? formatPrice(price): ""}</h2>
                <button>Comprar</button>
              </div>
              <div className={styles.item_detail__description}>
                <h3>Descripción del producto</h3>
                <p>{item.description}</p>
              </div>
          </section>
          {/* )} */}
        </div>
    </>
  );
};
