import ItemsLocalStorageService from '../services/ItemsLocalStorage.service';

export const state = () => ({
  items: []
});

export const actions = {
  addItems: ({ commit }, playload) => {
    commit('setAddedItems', playload);
  },

  removeItems: ({ commit }, payload) => {
    commit('removeAddedItems', payload);
  },

  updateItems: ({ commit }, payload) => {
    commit('updateAddedItems', payload);
  }
};

export const mutations = {
  setAddedItems: (state, items) => {
    state.items.push(items);
    ItemsLocalStorageService.setItems('GET-THE-MILK', state.items);
  },

  removeAddedItems: (state, itemToRemove) => {
    state.items.splice(itemToRemove, 1);
  },

  updateAddedItems: (state, itemToUpdate) => {
    // call local storage service here..
  }
};
