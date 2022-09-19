import {render, RenderOptions} from '@testing-library/react'
import {ReactElement} from 'react'
import AppProviders from './Providers/AppProviders'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render( ui, {wrapper: AppProviders, ...options} )

export {customRender as render}

export * from '@testing-library/react'