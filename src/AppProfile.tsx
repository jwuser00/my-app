
import type { MouseEvent } from 'react';
import './App.css'
// import Profile from './components/Profile.tsx'
import Counter from './components/counter.tsx';

function AppProfile() {
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    alert('click');
  }
  return <Counter />;

  // return <>
  //   <button onClick={onClick}>Click</button>
  //   <Profile photo="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" name="Kwak Jongwon" job="Developer" isNew={true} />
  //   <Profile photo="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" name="Mun sunmi" job="Designer" />
  // </>;
}

export default AppProfile
