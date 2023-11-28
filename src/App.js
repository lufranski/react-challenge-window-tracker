import './App.css';
import React from 'react';

import WindowTracker from './Windowtracker';

function App() {

  const [show, setShow] = React.useState(true);

  function toggle(){
    setShow(prevState => !prevState)
  }

  return (
    <div className="container">
      <div className='btn' onClick={toggle}>
        Toggle WindowTracker
      </div>
      { show && <WindowTracker />}
    </div>
  );
}

export default App;
