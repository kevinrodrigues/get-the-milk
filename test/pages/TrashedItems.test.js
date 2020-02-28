import { shallowMount } from '@vue/test-utils';
import TrashedItems from '@/pages/TrashedItems.vue';

describe('`TrashedItems`', () => {
  it('should be a Vue instance', () => {
    const wrapper = shallowMount(TrashedItems);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
