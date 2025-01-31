import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {setCount}=useContext(CountContext)
  function decrease(){ setCount(count=>count-1)}
  return <button onClick={decrease}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;

/*

Let me explain the difference more clearly with examples:

1. Direct Increment/Decrement (count + 1)
This approach uses the current value of the count state directly when calling setCount. For example:


setCount(count + 1);
Here, count is taken directly from the state. If the state changes quickly, such as in a situation where multiple updates happen 
simultaneously, this approach might miss some updates because it relies on the value of count at the time of the function execution.

Example Issue:
Imagine you click the "Increase" button twice very quickly:

On the first click, count is 0, so setCount(0 + 1) is called.
Before the state updates to 1, you click the button again. The function still sees count as 0 and calls setCount(0 + 1) again.
Result: The state is 1 instead of 2.
This happens because the second update does not account for the already pending state change.

2. Functional Updates (currentCount => currentCount ± 1)
This approach uses the functional form of setState, which ensures the update is based on the most recent value of the state, regardless
 of when the update happens.


 
setCount(currentCount => currentCount + 1);
Here, currentCount represents the latest state value at the time the update is applied. Even if multiple updates are triggered quickly, each update works with the correct, most recent value of the state.

Why It’s Safer:
Using the same example, if you click the button twice very quickly:

On the first click, setCount(currentCount => currentCount + 1) is called. When this update is applied, currentCount will be 0, and the new state will be 1.
On the second click, setCount(currentCount => currentCount + 1) is called again. When this update is applied, currentCount will now be 1, and the new state will be 2.
Result: The state becomes 2 as expected
*/