import { shallowMount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('`Index`', () => {
  it('should be a Vue instance', () => {
    const wrapper = shallowMount(Index, {
      stubs: ['router-link']
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
