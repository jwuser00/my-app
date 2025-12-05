
import './App.css'
// import Profile from './components/Profile.tsx'
import Counter from './components/counter.tsx';
import { useState } from 'react';

function AppProfile() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} { count > 10 ? "🔥" : "😊"}
      </div>
      <div className="counter">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>  
    );
}

export default AppProfile;
