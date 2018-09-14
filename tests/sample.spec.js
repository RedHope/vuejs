import { shallowMount, createLocalVue } from '@vue/test-utils';
import HealthBar from '../src/project-1/HealthBar.vue';
describe('Sample Component Test', () => {
  let wrapper;

  beforeEach(() => {
    let localVue = createLocalVue();
    wrapper = shallowMount(HealthBar, { localVue, propsData: {
      currentHealth: 50,
      id: 'mockId'
    } });
  });

  it('renders', () => {
    expect(wrapper.vm.currentHealth).toEqual(50);
  });
});
