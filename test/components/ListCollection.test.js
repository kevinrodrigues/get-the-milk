import { mount } from '@vue/test-utils'
import ListCollection from '@/components/ListCollection.vue'

describe('`ListCollection`', () => {
  it('should be a Vue instance', () => {
    const wrapper = mount(ListCollection);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
