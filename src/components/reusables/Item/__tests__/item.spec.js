import { shallowMount } from '@vue/test-utils';
import Item from '../Item.vue';

describe('Item.vue', () => {
  it('renders title, description, & dayNumber when passed', () => {
    const title = 'simple title';
    const description = 'simple description';
    const dayNumber = 1;
    const wrapper = shallowMount(Item, {
      propsData: {
        title,
        description,
        dayNumber,
      },
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper.text()).toMatch(description);
    expect(wrapper.text()).toMatch(`Day ${dayNumber}`);
  });
});
