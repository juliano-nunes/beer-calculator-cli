import { shallowMount } from '@vue/test-utils'
import Home from '../../src/components/Home.vue'
import repository from '../../src/repository.js'
import sinon from  'sinon';

describe('Home.vue', () => {
  let wrapper = null
  let sinonSandbox = null
  const inputTemperature = 'input#temperature'
  
  beforeEach(() => {
    sinonSandbox = sinon.createSandbox();
    sinonSandbox.spy(repository, '');

    wrapper = shallowMount(Home, {
      mocks: {
        $repository: new repository
      }
    })

  });

  it('method formIsValid should return false when input has invalid class', () => {
    wrapper.vm.$el.querySelector(inputTemperature).classList.add('invalid')
    expect(wrapper.vm.formIsValid()).toBe(false)
  });

  it('method formIsValid should return true when input has not invalid class', () => {
    const input = wrapper.find(inputTemperature)
    expect(input.classes('invalid')).toBe(false)  
    expect(wrapper.vm.formIsValid()).toBe(true)
  });

  it('when getBestBeer resolves should update result', done => {
    sinonSandbox.stub(wrapper.vm.$repository, 'getBestBeer').resolves({ data: { beer_style: "Teste"}})
  
    wrapper.vm.calculate()

    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.vm.result).toBe("Teste")
    }).then(done, done)
  });

  it('when an error occurs should show an alert', done => {
    sinonSandbox.stub(wrapper.vm.$repository, 'getBestBeer').rejects({})
    sinonSandbox.stub(window, 'alert')

    wrapper.vm.calculate()
    wrapper.vm.$nextTick().then(() => {
      expect(window.alert.called).toBe(true)
    }).then(done, done)
  });

  afterEach(() => {
    wrapper.destroy()
    sinonSandbox.restore()
  });
});
