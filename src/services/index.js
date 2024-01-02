export const getItemsByParam = async (search) => {
    try 
    {
        const response = await fetch('/api/items?q='+ search);
        const data = await response.json();
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getItemById = async (itemId) => {
    try {
      const response = await fetch('/api/items/'+ itemId);
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
