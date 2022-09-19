import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from './Counter'

describe( 'Counter', () => {
  it( 'should renders correctly', () => {
    render( <Counter /> )

    const h1_element = screen.getByRole( 'heading', {
      level: 1
    } )
    expect( h1_element ).toBeInTheDocument()

    const increment_btn_element = screen.getByRole( 'button', {
      name: "Increment"
    } )
    expect( increment_btn_element ).toBeInTheDocument()
  } )

  it( 'should renders default value of 0', () => {
    render( <Counter /> )
    const h1_element = screen.getByRole( 'heading', {
      level: 1
    } )
    expect( h1_element ).toHaveTextContent( "0" )
  } )

  it( 'should renders count of 1 after clicking', () => {
    render( <Counter /> )
    const increment_btn_element = screen.getByRole( 'button', {
      name: "Increment"
    } )
    user.click( increment_btn_element )
    const h1_element = screen.getByRole( 'heading', {
      level: 1
    } )
    expect( h1_element ).toHaveTextContent( '1' )
  } )

  it( 'should render 2 when clicking Increment Btn twice', () => {
    render( <Counter /> )
    const increment_btn_element = screen.getByRole( 'button', {
      name: "Increment"
    } )
    user.click( increment_btn_element )
    user.click( increment_btn_element )
    const h1_element = screen.getByRole( 'heading', {
      level: 1
    } )
    expect( h1_element ).toHaveTextContent( '2' )
  } )
} )