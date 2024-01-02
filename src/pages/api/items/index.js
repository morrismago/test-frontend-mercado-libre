export default async function handler(req, res) {
  
  const URL = process.env.NEXT_PUBLIC_URL_GET_SEARCH;
  const URLCategory = process.env.NEXT_PUBLIC_URL_GET_CATEGORY;
  const data = await fetch(URL + 'search?q=:' + req.query.q + '&limit=4').then(res => res.json());
  const transfromedData = transformData(data);
  const dataCategory = await fetch(URLCategory + transfromedData.categoryId).then(res => res.json());
  const transfromedDataCategory = transfrormDataCategory([dataCategory]);

  const customObject = {
    'author': {
    'name': 'Juan Camilo',
    'lastname': 'Morris Ramos'
    },
    'categories': transfromedDataCategory.categories,
    'items': transfromedData.items 
  };
  res.status(200).json(customObject);
}

function countDecimals(number) {
  if (Math.floor(number) === number) return 0;
  return number.toString().split(".")[1].length || 0;
}

function transformItems(data) {
 
  const items = data.map(item => {
    const {
      id,
      title,
      price,
      currency_id,
      thumbnail,
      condition
    } = item;

    const decimals = countDecimals(price);

    return {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: decimals
      },
      thumbnail,
      condition
    };
  });
  return items;
}

function transformData (data) {
  const items = transformItems(data.results);
  const arrCategories = data.filters.filter((filter) => filter.id == 'category');
  const values = arrCategories.map((category) => category.values);
  const categories = values.length > 0 ? (values[0].map((value) => value.name)) : ["Sin categoría"];
  const categoryId = values.length > 0 ? (values[0].map((value) => value.id)) : ["0"];
  return {items, categories, categoryId};
}

function transfrormDataCategory (data) {
  let categories = [];
  if (data[0].error === "not_found")
  {
    categories = ["Sin categorías"];
  }
  else{
    const paths = data.map((path) => path.path_from_root);
    categories = paths != undefined ? (paths[0].map((category) => category.name)) : ["Sin categoría"];
  }
  return { categories};
}





