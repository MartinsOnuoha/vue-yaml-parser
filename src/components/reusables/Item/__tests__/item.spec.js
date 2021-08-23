import { shallowMount } from '@vue/test-utils';
import Item from '../Item.vue';

describe('Item.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'simple title';
    const description = 'simple description';
    const wrapper = shallowMount(Item, {
      propsData: {
        title,
        description,
      },
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper.text()).toMatch(description);
  });
});
