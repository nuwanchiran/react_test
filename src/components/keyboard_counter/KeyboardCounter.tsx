import {FunctionComponent, useState} from 'react';
import {KeyboardCounterProps} from './KeyboardCounter.types';

const KeyboardCounter: FunctionComponent<KeyboardCounterProps> = () => {
  const [count, setCount] = useState<string>( '' )
  const [amount, setAmount] = useState<string>( '' )
  return (
    <>
      <h1>{count}</h1>
      <input
        type={'number'}
        name="count"
        value={amount}
        onChange={( e ) => setAmount( e.target.value )}
      />
      <button onClick={() => setCount( amount )}>Set</button>
    </> );
}

export default KeyboardCounter;