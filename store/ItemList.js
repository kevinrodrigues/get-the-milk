export const state = () => ({
  items: []
});

export const actions = {
  addItems: ({ commit }, playload) => {
    commit('setAddedItems', playload);
  },

  removeItems: ({ commit }, payload) => {
    commit('removeAddedItems', payload);
  }
};

export const mutations = {
  setAddedItems: (state, items) => {
    state.items.push(items);
  },

  removeAddedItems: (state, itemToRemove) => {
    state.items.splice(itemToRemove, 1);
  }
};
