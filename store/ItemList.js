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
    const items = ItemListService.getAllStoredItems('GET-THE-MILK');
    console.log(items);
    const index = items.findIndex(i => i.id === payload.id);
    if (index === -1) {
      return;
    }
    items.splice(index, 1, payload);
    commit('updateAddedItems', items);
  },

  getPreviousItems: ({ commit }) => {
    const previouslyAddedItems = ItemListService.getAllStoredItems('GET-THE-MILK');

    if (previouslyAddedItems) {
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
    state.items = itemToUpdate;
  },

  setPreviousItems: (state, items) => {
    state.items.push(...items);
  }
};
