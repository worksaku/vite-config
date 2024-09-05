import { useState } from 'react';
import * as R from 'ramda';

export const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Hello Vite + React!</h1>
      <button onClick={() => setCount(R.inc)}>Inc</button>
      <button value={1} onClick={() => setCount(R.dec)}>
        Dec
      </button>
      {count}
    </div>
  );
};
