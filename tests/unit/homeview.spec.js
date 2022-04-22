import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {
  
  it('renders textMsg when passed', () => {     
    const textMsg = 'Hello there'                               
    const wrapper = mount(HomeView, {    
      
    })
    expect(wrapper.text()).toMatch(textMsg)  
  })
})
