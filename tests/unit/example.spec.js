import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => { // TestS block (we can group multiple test within the describe(). it() is a singular testBlock)
  it('renders textMsg when passed', () => {     // it() is representation a testBlock - What we test on: could be to see if a text-string exist or data type etc
    // first argument is just text that gets written out with a passed test (in CLI) + Logic lives inside our functionArrow(callback)
    const textMsg = 'Hello there'               //                
    const wrapper = shallowMount(HomeView, {    // Our Compoment we want to test on, in this case we call HomeView with shallowMount()
      // wrapper is object that contains multiple different properties and methods, that is going to be related to the specific component we test on(homeView)
      
      
    })
    expect(wrapper.text()).toMatch(textMsg)  // assertion: We are expecting(testing) on the specific thing we want: grabbing wrapper, then matching the two strings. If they are the same, test: pass
  })
})
