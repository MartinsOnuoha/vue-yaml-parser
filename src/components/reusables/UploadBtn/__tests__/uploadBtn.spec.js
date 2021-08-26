import { shallowMount } from '@vue/test-utils';
import UploadBtn from '../UploadBtn.vue';

describe('UploadBtn.vue', () => {
  it('renders a sideline component when mounted', () => {
    const label = 'My Fancy Button';
    const wrapper = shallowMount(UploadBtn, {
      propsData: {
        label,
      },
    });
    expect(wrapper.find('.upload-btn').exists()).toBe(true);
    expect(wrapper.text()).toMatch(label);
  });
});
