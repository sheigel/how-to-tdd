import * as React from 'react'
import {shallow} from 'enzyme'

import App from './App'

test('app renders ', () => {
  var wrapper = shallow(<App />)
  var welcome = <h1>You are a child, Harry!</h1>

  expect(wrapper.contains(welcome)).toEqual(true)
});
