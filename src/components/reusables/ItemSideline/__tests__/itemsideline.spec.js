import { shallowMount } from '@vue/test-utils';
import ItemSideline from '../ItemSideline.vue';

describe('ItemSideline.vue', () => {
  it('renders a sideline component when mounted', () => {
    const wrapper = shallowMount(ItemSideline);
    expect(wrapper.find('.side-line').exists()).toBe(true);
    expect(wrapper.find('.side-line__circle').exists()).toBe(true);
    expect(wrapper.find('.side-line__circle-inner').exists()).toBe(true);
  });
});
