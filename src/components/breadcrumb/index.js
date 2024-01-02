import React from 'react';
import styles from "./breadcrumb.module.scss";

export default function Breadcrumb ({categories}) {

  const flattenedCategories = categories.flat();
  const lastIndex = flattenedCategories.length - 1;

  return (
    <>
     <section key="breadcrumb" className={styles.breadcrumb}>
        {flattenedCategories.map((category, index) => (
          <React.Fragment key={index}>
            <span key={index}  className={index === lastIndex ? styles.bold : ''}>{category}</span>
            {index < flattenedCategories.length - 1 && <span className={styles.separator}>{' > '}</span>}
          </React.Fragment>
        ))}
      </section>
    </>
  );
};
