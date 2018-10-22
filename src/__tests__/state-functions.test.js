import actions from '../actions/emailActions.js'
import React from 'react';
import { Mount, shallow } from 'enzyme';




describe('Addition', () => {
  it('TEST:knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

test('Testing Action reducer pattern', ()=>{
  const payload = 'Testing the payload'

  const finState = actions.ADD_EMAIL(payload);

  expect(finState).toEqual(
    {
      type:'ADD_EMAIL',
      PAYLOAD: 'Testing the payload'
    }
  );
})



