import React, {useMemo, useCallback} from 'react';
import CounterComponent from '../components/CounterComponent';

const CounterPage = () => {
    const [count, setCount] = React.useState(0);

    const expensiveCalculation = useMemo(() => {
        console.log('Calculating...');
        return count * 2;
      }, [count]); // Recalculate only when "count" changes

      const increment = useCallback(() => {
        setCount((prev) => prev + 1);
      }, []); // Function is memoized
  
    return (
      <div>
         <p>Result of expensive calculation: {expensiveCalculation}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <CounterComponent value={count} />
      </div>
    );
  };
  
  export default CounterPage;