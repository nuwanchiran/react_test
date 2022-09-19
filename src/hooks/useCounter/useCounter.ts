import {useCounterProps} from './useCounter.types';
import {useState} from 'react';

const useCounter = ( props?: useCounterProps ) => {
  const [count, setCount] = useState( props?.initialCount || 0 )
  const increment = () => setCount( prev => prev + 1 )
  const decrement = () => setCount( prev => prev - 1 )
  return ( {count, increment, decrement} )
}
export default useCounter