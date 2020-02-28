import { mount } from '@vue/test-utils';
import MilkBottle from '@/components/MilkBottle.vue';

describe('`MilkBottle`', () => {
  it('should be a Vue instance', () => {
    const wrapper = mount(MilkBottle);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
