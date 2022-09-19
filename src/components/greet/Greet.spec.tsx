import {render, screen} from '@testing-library/react'
import Greet from './Greet'

describe( "Greet", () => {
  it( "should render Hello", () => {
    render( <Greet /> )
    const text_element = screen.getByText( /Hello/ )
    expect( text_element ).toBeInTheDocument()
  } )
} )

describe( "Nested", () => {
  it( 'should render Hello with the name', () => {
    render( <Greet name='Chiran' /> )
    const text_element = screen.getByText( "Hello Chiran" )
    expect( text_element ).toBeInTheDocument()
  } )
} )


