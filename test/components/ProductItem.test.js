import { shallowMount } from '@vue/test-utils';
import ProductItem from '@/components/ProductItem.vue';

describe('`ProductItem`', () => {
  it('should be a Vue instance', () => {
    const wrapper = shallowMount(ProductItem, {
      propsData: {
        item: {
          exo: 'Pulsar'
        }
      }
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  describe('`deleteItem` method', () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallowMount(ProductItem, {
        propsData: {
          item: {
            exo: 'Pulsar'
          }
        }
      });
    });

    it('should exist', () => {
      expect(wrapper.vm.deleteItem).toBeDefined();
    });
    
    describe('when invoked', () => {
      it('should invoke `emitItemChanged` to emit a `change` event', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.vm, 'emitItemChanged');
        
        // Act
        wrapper.vm.deleteItem();
        
        // Assert
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
