import { shallowMount } from '@vue/test-utils';
import BaseItem from '@/components/BaseItem.vue';

describe('`BaseItem`', () => {
  it('should be a Vue instance', () => {
    const wrapper = shallowMount(BaseItem, {
      propsData: {
        item: {
          exo: 'Pulsar'
        }
      }
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
