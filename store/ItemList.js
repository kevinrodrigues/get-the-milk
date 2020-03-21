import ItemListService from '../services/ItemList.service';

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
  },

  getPreviousItems: ({ commit }) => {
    const previouslyAddedItems = ItemListService.getAllStoredItems('GET-THE-MILK');

    if (previouslyAddedItems) {
      /* eslint-disable */
      console.log(previouslyAddedItems);
      commit('setPreviousItems', previouslyAddedItems);
    }
  }
};

export const mutations = {
  setAddedItems: (state, items) => {
    state.items.push(items);
    ItemListService.setItems('GET-THE-MILK', state.items);
  },

  removeAddedItems: (state, itemToRemove) => {
    state.items.splice(itemToRemove, 1);
  },

  updateAddedItems: (state, itemToUpdate) => {
    // call local storage service here..
  },

  setPreviousItems: (state, items) => {
    /* eslint-disable */
    state.items.push(...items);
    console.log(items);
  }
};
