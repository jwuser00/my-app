import { memo, useCallback, useReducer } from 'react';
import type { Person } from './reducer/person-reducer';
import { personReducer } from './reducer/person-reducer';
import './App.css'
import './AppXY.css';

const initialPerson: Person = {
  name: 'jongwon',
  title: 'developer',
  mentors: [{
    name: 'youngjin',
    title: 'senior developer',
  }, {
    name: 'jiwon',
    title: 'junior developer',
  }],
};

// Button 컴포넌트를 밖으로 이동 - 매번 재생성되지 않음
const Button = memo(({ text, onClick }: { text: string; onClick: () => void }) => {
  console.log(`${text} Button rendering`);
  return <button onClick={onClick}>{text}</button>;
});

function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // dispatch를 클로저로 캡처하도록 수정
  const handleChangeMentorName = useCallback(() => {
    const prename = prompt('Enter mentor name for change');
    const newname = prompt('Enter mentor new name');
    if (prename && newname) {
      dispatch({ type: 'update', prename, newname });
    }
  }, []);

  const handleAddMentor = useCallback(() => {
    const name = prompt('Enter mentor name');
    const title = prompt('Enter mentor title');
    if (name && title) {
      dispatch({ type: 'add', name, title });
    }
  }, []);

  const handleChangeMentorTitle = useCallback(() => {
    const prename = prompt('Enter mentor name for change title');
    const newtitle = prompt('Enter mentor new title');
    if (prename && newtitle) {
      dispatch({ type: 'update', prename, newname: newtitle });
    }
  }, []);

  const handleDeleteMentor = useCallback(() => {
    const prename = prompt('Enter mentor name for delete');
    if (prename) {
      dispatch({ type: 'delete', prename });
    }
  }, []);

  return (
    <div>
      <h1>{person.name} {person.title}</h1>
      {person.mentors.map((mentor, index) => (
        <p key={index}>Mentor: {mentor.name} {mentor.title}</p>
      ))}

      <Button text="Change Mentor name" onClick={handleChangeMentorName} />

      <Button text="Change Mentor title" onClick={handleChangeMentorTitle} />

      <Button text="Delete Mentor" onClick={handleDeleteMentor} />

      <Button text="Add Mentor" onClick={handleAddMentor} />
    </div>
  );
}

export default AppMentor;
