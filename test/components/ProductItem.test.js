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
});
