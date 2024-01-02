import React, { Suspense, useEffect, useState } from 'react';
import styles from "./items.module.scss";
import { useRouter } from 'next/router'
import {getItemsByParam} from "../../services/index";
import Item from '../item';
import Breadcrumb from '../breadcrumb/index';
import Head from 'next/head';

export default function Items() {

    const router = useRouter();
    const search = router.query.search;

    const [items, setItems] = useState();
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (search) {
          getItemsByParam(search)
          .then((data) => {
            setItems(data.items);
            setCategories(data.categories);
            setLoading(false);
          })
          .catch((error) => console.error(error));
      }
    }, [search]);

  return (
      <>
        <div className={styles.results_container}>
          <Head>
            <title>{search} - Resultado de búsqueda del Producto</title>
            <meta name="description" content={`Resultado de ${search}`} />
            <meta property="og:title" content={`Resultado de ${search}`}  />
            <meta property="og:description" content={`Resultado de ${search}`}   />
          </Head>
          {categories ? (
            <Breadcrumb
              categories={categories}
            />
          ) : ''}
          {loading ? ( 
            <h2> Cargando...</h2>
          ) : (
            <section className={styles.results}>
            <ol>
                {items.map(item => (
                  <li key={item.id} className={styles.results_item}>
                    <Item item={item} />
                  </li>
                ))}
            </ol>
          </section>
          )}
        </div>
    </>
  );
};