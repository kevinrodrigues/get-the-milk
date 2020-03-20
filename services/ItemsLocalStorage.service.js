/* eslint-disable */
export const ItemsLocalStorageService = {
  getStoredItems (key, failure) {
      try {
          let item = window.localStorage.getItem(key)
          return item ? window.JSON.parse(item) : fallback
      } catch (err) {
          return failure
      }
  },

  setItems (key, value = {}) {
    window.localStorage.setItem(key, window.JSON.stringify(value));
  }
};
 
export default ItemsLocalStorageService;