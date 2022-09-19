import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import KeyboardCounter from './KeyboardCounter'

describe( 'Keyboard Counter', () => {
  it( 'should renders all elements', () => {
    render( <KeyboardCounter /> )
    const input_element = screen.getByRole( 'spinbutton' )
    const set_btn_element = screen.getByRole( 'button', {name: "Set"} )
    const heading_element = screen.getByRole( 'heading', {level: 1} )

    expect( set_btn_element ).toBeInTheDocument()
    expect( input_element ).toBeInTheDocument()
    expect( heading_element ).toBeInTheDocument()
  } )

  it( 'should renders a count of ten after clicking the set btn', () => {
    render( <KeyboardCounter /> )

    const input_element = screen.getByRole( 'spinbutton' )
    const set_btn_element = screen.getByRole( 'button', {name: "Set"} )
    const heading_element = screen.getByRole( 'heading', {level: 1} )

    user.type( input_element, '10' )
    expect( input_element ).toHaveValue( 10 )

    user.click( set_btn_element )
    expect( heading_element ).toHaveTextContent( '10' )
  } )

  it( 'should elements are focused in the right order', () => {
    render( <KeyboardCounter /> )

    const input_element = screen.getByRole( 'spinbutton' )
    const set_btn_element = screen.getByRole( 'button', {name: "Set"} )

    user.tab()
    expect( input_element ).toHaveFocus()
    user.tab()
    expect( set_btn_element ).toHaveFocus()
  } )
} )