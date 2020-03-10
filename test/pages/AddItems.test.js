import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddItems from '@/pages/AddItems.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const state = {
  items: 0
}

const actions = {
  addItems: jest.fn()
}

const store = new Vuex.Store({
  modules: {
    ItemList: {
      namespaced: true,
      state,
      actions
    }
  }
});


describe('`AddItems`', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AddItems, {
      localVue,
      store
    });
  });

  it('should be a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe('`saveItem` method', () => {
    it('should exist', () => {
      expect(wrapper.vm.saveItem).toBeDefined();
    });
    
    describe('when invoked', () => {
      describe('AND `itemEntered` is empty', () => {
        it('should return `false`', () => {
          const result = wrapper.vm.saveItem();
          expect(result).toBe(false);
        });
      });
      
      describe('AND `itemEntered` is populated', () => {
        it('should make a call to vuex action `addItems`', () => {
          // Arrange
          const state = {
            items: [{ solar: 'Vela Pulsar' }]
          }
          
          const store = new Vuex.Store({
            modules: {
              ItemList: {
                namespaced: true,
                state,
                actions
              }
            }
          });

          wrapper = shallowMount(AddItems, {
            localVue,
            store
          });

          const spy = jest.spyOn(wrapper.vm, 'addItems');

          // Act
          wrapper.vm.saveItem();

          // Assert
          expect(spy).toHaveBeenCalled();
        });
        
        it('should clear the `itemEntered` value once `itemAdded` has updated the users entry', () => {
          // Arrange
          const spy = jest.spyOn(global.Date, 'now').mockReturnValue('1234');
          const state = {
            items: [{ solar: 'Vela Pulsar' }]
          }
          
          const store = new Vuex.Store({
            modules: {
              ItemList: {
                namespaced: true,
                state,
                actions
              }
            }
          });

          wrapper = shallowMount(AddItems, {
            localVue,
            store
          });
  
          wrapper.vm.itemEntered = 'Vela Pulsar';
  
          // Act
          wrapper.vm.saveItem();
  
          // Assert
          expect(wrapper.vm.itemEntered).toBe('');
        });
      });
    });
  });
});
