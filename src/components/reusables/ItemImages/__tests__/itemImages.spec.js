import { shallowMount } from '@vue/test-utils';
import ItemImages from '../ItemImages.vue';

describe('Item.vue', () => {
  it('renders props.images when passed', () => {
    const images = [
      { src: 'https://picsum.photos/seed/picsum/450/300' },
    ];
    const wrapper = shallowMount(ItemImages, {
      propsData: {
        images,
      },
    });
    expect(wrapper.find('img').exists()).toBe(true);
  });
  it('renders more than one images when passed', () => {
    const images = [
      { src: 'https://picsum.photos/seed/picsum/450/300' },
      { src: 'https://picsum.photos/seed/picsum/450/300' },
      { src: 'https://picsum.photos/seed/picsum/450/300' },
    ];
    const wrapper = shallowMount(ItemImages, {
      propsData: {
        images,
      },
    });
    expect(wrapper.findAll('img').length).toBe(3);
  });
  it('shows one image in list at a time', () => {
    const images = [
      { src: 'https://picsum.photos/seed/picsum/450/300' },
      { src: 'https://picsum.photos/seed/picsum/450/300' },
      { src: 'https://picsum.photos/seed/picsum/450/300' },
    ];
    const wrapper = shallowMount(ItemImages, {
      propsData: {
        images,
      },
    });
    expect(wrapper.findAll('img').at(0).html().includes('style')).toBe(false);
    expect(wrapper.findAll('img').at(1).html().includes('style')).toBe(true);
    expect(wrapper.findAll('img').at(2).html().includes('style')).toBe(true);
  });
  it('display is set to none for other images', () => {
    const images = [
      { src: 'https://picsum.photos/seed/picsum/450/300' },
      { src: 'https://picsum.photos/seed/picsum/450/300' },
      { src: 'https://picsum.photos/seed/picsum/450/300' },
    ];
    const wrapper = shallowMount(ItemImages, {
      propsData: {
        images,
      },
    });
    const imagesEl = wrapper.findAll('img');

    expect(imagesEl.at(1).html().includes('none')).toBe(true);
    expect(imagesEl.at(2).html().includes('none')).toBe(true);
  });
});
