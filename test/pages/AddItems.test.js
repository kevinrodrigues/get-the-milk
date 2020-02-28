import { shallowMount } from '@vue/test-utils';
import AddItems from '@/pages/AddItems.vue';

describe('`AddItems`', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AddItems);
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
        it('should push the items to `itemAdded` array', () => {
          // Arrange
          const spy = jest.spyOn(global.Date, 'now').mockReturnValue('1234');
          
          const item = [{
            id: 'test',
            content: 'Vela Pulsar',
            quantity: 1,
            purchasedAt: null,
            createdAt: Date.now(),
            deletedAt: null
          }];
          
          wrapper.vm.itemEntered = 'Vela Pulsar';
          
          // Act
          wrapper.vm.saveItem();
          
          // Assert
          expect(wrapper.vm.itemAdded).toEqual(item);
        });
      });
    });
  });
});
