import React from 'react';
import logoML from '../../../../public/assets/img/logo_ML@2x.png';
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useSearch } from '../../../hooks/useSearch';

export default function Header() {
  
  const {searchField, searchItems, handleChangeSearch} = useSearch();

  return (
    <header>
      <nav>
        <form className={styles.search_form} onSubmit={searchItems}>
          <Link href="/">
            <Image src={logoML} width={53} height={36} alt="MercadoLibre" />
          </Link>
          <input
            type="text"
            id="search-field"
            className={styles.search_input}
            placeholder='Nunca dejes de buscar'
            value={searchField}
            onChange={handleChangeSearch}
          />
          <button type="submit" className={styles.search_button} alt="Buscar" title='Buscar'></button>
        </form>
      </nav>
    </header>
  );
};
