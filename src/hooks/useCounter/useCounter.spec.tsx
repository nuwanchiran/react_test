import {act, renderHook} from '@testing-library/react'
import useCounter from './useCounter'

describe( 'useCounter', () => {

  it( 'should render the default count', () => {
    const {result} = renderHook( useCounter )
    expect( result.current.count ).toBe( 0 )
  } )

  it( 'should render the initial count', () => {
    const {result} = renderHook( useCounter, {
      initialProps: {
        initialCount: 10
      }
    } )
    expect( result.current.count ).toBe( 10 )
  } )

  it( 'should increment the count', () => {
    const {result} = renderHook( useCounter )
    act( () => result.current.increment() )
    expect( result.current.count ).toBe( 1 )
  } )

  it( 'should decrement the count', () => {
    const {result} = renderHook( useCounter, {
      initialProps: {
        initialCount: 10
      }
    } )
    act( () => result.current.decrement() )
    expect( result.current.count ).toBe( 9 )
  } )
} )