export default async function handler(req, res) {
    const URL = process.env.NEXT_PUBLIC_URL_GET_ITEMS;
    const URLCategory = process.env.NEXT_PUBLIC_URL_GET_CATEGORY;

    const dataItem = await fetch(URL + req.query.id).then(res => res.json());
    const dataDescription = await fetch(URL + req.query.id + '/description' ).then(res => res.json());
    const dataCategory = await fetch(URLCategory + dataItem.category_id).then(res => res.json());
    const transfromedData = transformData(dataItem,dataDescription, dataCategory);
  
    const customObject = {

      'author': {
      'name': 'Juan Camilo',
      'lastname': 'Morris Ramos'
      },
      'item': transfromedData.item[0],
      'category': transfromedData.categories
    };

    res.status(200).json(customObject);
  }

  function countDecimals(number) {
    if (Math.floor(number) === number) return 0;
    return number.toString().split(".")[1].length || 0;
  }

  function transformData (dataItem,dataDescription,dataCategory) {
 
    const data = [dataItem];
    const item = data.map(item => {
        const {
          id,
          title,
          price,
          currency_id,
          pictures,
          condition,
          shipping
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
          picture: pictures[0].url,
          condition,
          free_shipping: shipping.free_shipping,
          description: dataDescription.plain_text
        };
      });

    const categories = dataCategory.path_from_root.length > 0 ? 
    (dataCategory.path_from_root.map((value) => value.name)) : ["Sin categoría"];

    return {item, categories};
  }
  
  
  