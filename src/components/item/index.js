import React from 'react';
import { useRouter } from 'next/router';
import styles from "./item.module.scss";
import {formatPrice} from "../../utils/index";

export default function Item({item}) {

  const router = useRouter();

  const handleItemClick = (itemId) => {
    router.push(`/items/${itemId}`);
  };

  return (
    <>
      <div key={item.id} className={styles.item}>
        <div className={styles.item__general}>
          <img src={item.thumbnail}  alt={item.title} onClick={() => handleItemClick(item.id)}/>
          <div className={styles.item__resume}>
            <div className={styles.item__resume_title} onClick={() => handleItemClick(item.id)}>
              <h1 onClick={() => handleItemClick(item.id)}>{formatPrice(item.price.amount)}</h1>
            </div>
            <h2 onClick={() => handleItemClick(item.id)}>{item.title}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
