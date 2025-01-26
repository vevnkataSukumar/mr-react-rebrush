import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, resetCounter } from '../store/slices';
import { fetchProducts } from '../store/slices/data';

const NewPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // Access state using useSelector
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
        dispatch(fetchProducts());
    }
  }, []);

  // Handle different states
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
      <div>
        <h1>Products</h1>
        <ul>
          {items.map((product) => (
            <li key={product.id}>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NewPage;
