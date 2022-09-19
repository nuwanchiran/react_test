import {render, screen} from '@testing-library/react'
import Skills from './Skills'

describe( 'Skills', () => {
  const skill_list: string[] = ["HTML", "CSS", "JavaScript"];

  it( 'should render list', () => {
    render( <Skills skills={skill_list} /> )
    const list_element = screen.getByRole( 'list' )
    expect( list_element ).toBeInTheDocument()
  } )

  it( 'should render list of skills', () => {
    render( <Skills skills={skill_list} /> )
    const list_item_elements = screen.queryAllByRole( 'listitem' )
    expect( list_item_elements ).toHaveLength( skill_list.length )
  } )

  it( 'should render login button', () => {
    render( <Skills skills={skill_list} /> )
    const login_button = screen.queryByRole( "button", {
      name: "Login"
    } )
    expect( login_button ).toBeInTheDocument()
  } )

  it( 'should not render learning button', () => {
    render( <Skills skills={skill_list} /> )
    const start_learning_button = screen.queryByRole( "button", {
      name: "Start Learning"
    } )
    expect( start_learning_button ).not.toBeInTheDocument()
  } )

  it( 'should eventually display start learning button', async () => {
    render( <Skills skills={skill_list} /> )

    const start_learning_button = await screen.findByRole( "button", {
      name: "Start Learning"
    }, {
      timeout: 2000 //default value is 1000
    } )
    expect( start_learning_button ).toBeInTheDocument()

  } )
} )
