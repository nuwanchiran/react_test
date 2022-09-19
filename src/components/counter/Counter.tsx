import {FunctionComponent, useState} from 'react';
import {CounterProps} from './Counter.type';

const Counter: FunctionComponent<CounterProps> = () => {
  const [counter, setCounter] = useState( 0 )
  return ( <div>
    <h1>{counter}</h1>
    <button onClick={() => setCounter( prev => prev + 1 )}>Increment</button>
  </div> );
}

export default Counter;