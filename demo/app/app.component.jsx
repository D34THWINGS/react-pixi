import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState(0);
  return <rect x={state} onClick={() => setState(100)} />;
};

export default App;
