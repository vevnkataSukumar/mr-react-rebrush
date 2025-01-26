import React from 'react';

const CounterComponent = React.memo(({ value }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>Value: {value}</div>;
});

export default CounterComponent;
