
import { useState } from 'react';
import './App.css'
import './AppXY.css';

function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });


  return (
    <div className="container"
      onMouseMove={(e) => {
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div className='pointer' style={{ transform: `translate(${position.x}px, ${position.y}px)` }}/>
    </div>
    );
}

export default AppXY;
