import {screen, render} from '@testing-library/react'
import AppProviders from '../../Providers/AppProviders'
import MuiMode from './MuiMode'

describe( 'Theme', () => {
  it( 'should render text correctly', () => {
    render( <MuiMode />, {
      wrapper: AppProviders
    } )
    const heading_element = screen.getByRole( 'heading', {level: 1} )
    expect( heading_element ).toBeInTheDocument()
    expect( heading_element ).toHaveTextContent( 'dark mode' )
  } )
  it( 'should different color for different modes', () => {

  } )
} )