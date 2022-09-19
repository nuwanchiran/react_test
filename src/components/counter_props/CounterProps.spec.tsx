import {screen, render} from '@testing-library/react'
import CounterProps from './CounterProps'
import user from '@testing-library/user-event'
describe( 'Counter props', () => {
  it( 'should renders static elements', () => {
    render( <CounterProps count={0} /> )
    const heading_element = screen.getByRole( 'heading', {level: 1} )
    expect( heading_element ).toBeInTheDocument()
  } )
  it( 'should handlers are called', () => {
    const handleIncrement = jest.fn()
    const handleDecrement = jest.fn()
    render( <CounterProps count={0} handleIncrement={handleIncrement} handleDecrement={handleDecrement} /> )

    const increment_btn = screen.getByRole( 'button', {name: "Increment"} )
    const decrement_btn = screen.getByRole( 'button', {name: "Decrement"} )

    user.click( increment_btn )
    user.click( decrement_btn )

    expect( handleIncrement ).toHaveBeenCalledTimes( 1 )
    expect( handleDecrement ).toHaveBeenCalledTimes( 1 )
  } )
} )