import { shallowMount } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue';

describe('`Navigation`', () => {
  it('should be a Vue instance', () => {
    const wrapper = shallowMount(Navigation, {
      stubs: ['router-link']
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
