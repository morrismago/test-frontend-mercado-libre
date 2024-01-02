import {useRouter} from "next/router";
import {useState} from 'react';

export function useSearch() {

    const router = useRouter();
    const [searchField, setSearchField] = useState("");
  
    const searchItems = async (e) => {
      e.preventDefault();
      setSearchField(searchField);
      router.push(`/items?search=${searchField}`);
    }
  
    const handleChangeSearch = (e) => {
      setSearchField(e.target.value);
    }

    return {searchField, searchItems, handleChangeSearch};
}