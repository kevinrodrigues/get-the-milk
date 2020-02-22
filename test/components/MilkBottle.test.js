import { mount } from '@vue/test-utils'
import MilkBottle from '@/components/MilkBottle.vue'

describe('`Logo`', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MilkBottle);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
