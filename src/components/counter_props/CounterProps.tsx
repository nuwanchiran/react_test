import {FunctionComponent} from 'react';
import {CounterPropsProps} from './CounterProps.types';
 
const CounterProps: FunctionComponent<CounterPropsProps> = (props) => {
  return ( 
  <div>
    <h1>Counter props</h1>
    <p>{props.count}</p>
    {props.handleIncrement && (
      <button onClick={props.handleIncrement}>Increment</button>
    )}
    {props.handleIncrement && (
      <button onClick={props.handleDecrement}>Decrement</button>
    )}
  </div>
   );
}
 
export default CounterProps;