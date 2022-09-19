import {MouseEventHandler} from 'react'

export interface CounterPropsProps {
  count: number
  handleIncrement?: MouseEventHandler<HTMLButtonElement>
  handleDecrement?: MouseEventHandler<HTMLButtonElement>
}