import ItemListService from '../services/ItemList.service';

export const state = () => ({
  items: []
});

export const actions = {
  addItems: ({ commit }, playload) => {
    commit('setAddedItems', playload);
  },

  removeItems: ({ commit }, payload) => {
    const items = ItemListService.getAllStoredItems('GET-THE-MILK');
    const index = items.findIndex(i => i.id === payload);

    items.splice(index, 1);

    commit('removeAddedItems', items);
  },

  updateItems: ({ commit }, payload) => {
    const items = ItemListService.getAllStoredItems('GET-THE-MILK');
    const index = items.findIndex(i => i.id === payload.id);

    if (index === -1) {
      return;
    }

    if (payload.deletedAt) {
      items.splice(index, 1);
    } else {
      items.splice(index, 1, payload);
    }

    commit('updateAddedItems', items);
  },

  getPreviousItems: ({ commit }) => {
    const previouslyAddedItems = ItemListService.getAllStoredItems('GET-THE-MILK');

    console.log(previouslyAddedItems);

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

  removeAddedItems: (state, items) => {
    state.items = items;
    ItemListService.setItems('GET-THE-MILK', state.items);
  },

  updateAddedItems: (state, itemToUpdate) => {
    state.items = itemToUpdate;
    ItemListService.setItems('GET-THE-MILK', itemToUpdate);
  },

  setPreviousItems: (state, items) => {
    if (state.items.length) {
      return false;
    }

    state.items.push(...items);
  }
};
