import React, { useState,useEffect} from 'react';

import '../App.css';

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
   alert("Welcome To My Pizza Website")
  });


  return (
    <button onClick={() => {
      setNum(num + 1);
    }
   
    
    }>
     
     
      Order Pizza {num}
    </button>
  );



};

export default App;
