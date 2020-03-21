/* eslint-disable */
import { ItemsLocalStorageService } from '../services/ItemsLocalStorage.service'

export const ItemsListService = {
    getAllStoredItems (key, failure) {
        return ItemsLocalStorageService.getItems('GET-THE-MILK', []);
    },
  
    setItems (key, value = {}) {
      window.localStorage.setItem(key, window.JSON.stringify(value));
    }
  };
   
  export default ItemsListService;