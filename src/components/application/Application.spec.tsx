import {render, screen} from '@testing-library/react'
import Application from './Application'

describe( 'Application', () => {
  it( 'should render correctly', () => {
    render( <Application /> )

    const page_heading = screen.getByRole( 'heading', {
      name: "Job application form",
      level: 1,
    } )
    expect( page_heading ).toBeInTheDocument()

    const section_heading = screen.getByRole( 'heading', {
      name: "Section 1",
      level: 2,
    } )
    expect( section_heading ).toBeInTheDocument()

    const paragraph_element = screen.getByText( "All fields are mandatory" )
    expect( paragraph_element ).toBeInTheDocument()

    const image_element = screen.getByAltText( 'a person with a laptop' )
    expect( image_element ).toBeInTheDocument()

    const close_element = screen.getByTitle( 'close' )
    expect( close_element ).toBeInTheDocument()

    const custom_element = screen.getByTestId( 'custom-element' )
    expect( custom_element ).toBeInTheDocument()

    const name_element = screen.getByRole( 'textbox', {
      name: "Name", //the name is the name in the label not the property of the tag
    } )
    expect( name_element ).toBeInTheDocument()

    // get the element associate with the label name
    const name_element_2 = screen.getByLabelText( 'Name', {
      selector: 'input' // the element that the label associated with
    } )
    expect( name_element_2 ).toBeInTheDocument()

    // according to placeholder
    const name_element_3 = screen.getByPlaceholderText( 'Full Name' )
    expect( name_element_3 ).toBeInTheDocument()

    // according to input value
    const name_element_4 = screen.getByDisplayValue( 'Chiran' )
    expect( name_element_4 ).toBeInTheDocument()

    const bio_element = screen.getByRole( 'textbox', {
      name: "Bio"
    } )
    expect( bio_element ).toBeInTheDocument()

    const job_location_element = screen.getByRole( 'combobox' )
    expect( job_location_element ).toBeInTheDocument()

    const term_element = screen.getByRole( 'checkbox' )
    expect( term_element ).toBeInTheDocument()

    const submit_button_element = screen.getByRole( 'button' )
    expect( submit_button_element ).toBeInTheDocument()
  } )
} )