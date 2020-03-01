export const state = () => ({
  items: []
});

export const actions = {
  addItems: ({ commit }, playload) => {
    commit('setAddedItems', playload);
  }
};

export const mutations = {
  setAddedItems: (state, items) => {
    state.items.push(items);
  }
};
