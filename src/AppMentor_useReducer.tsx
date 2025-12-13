import { useReducer } from 'react';
import type { Person, Action } from './reducer/person-reducer';
import { personReducer } from './reducer/person-reducer';
import './App.css'
import './AppXY.css';

const initialPerson: Person = { 
  name: 'jongwon', 
  title: 'developer',
  mentors: [{
    name: 'youngjin',
    title: 'senior developer',
  },{
    name: 'jiwon',
    title: 'junior developer',
  }],
};

function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  return (
    <div>
      <h1>{person.name} {person.title}</h1>
      {person.mentors.map((mentor, index) => (
        <p key={index}>Mentor: {mentor.name} {mentor.title}</p>
      ))}


      <button onClick={() => handleChangeMentorName(dispatch)}> 
        Change Mentor name
      </button>

      <button onClick={() => handleChangeMentorTitle(dispatch)}> 
        Change Mentor title
      </button>

      <button onClick={() => handleDeleteMentor(dispatch)}> 
        Delete Mentor
      </button>

      <button onClick={() => handleAddMentor(dispatch)}> 
        Add Mentor
      </button>
    </div>
    );
}

function handleChangeMentorName(
  dispatch: React.Dispatch<Action>
) {
  const prename = prompt('Enter mentor name for change');
  const newname = prompt('Enter mentor new name');
  if (prename && newname) {
    dispatch({ type: 'update', prename, newname });
  }
}

function handleAddMentor(
  dispatch: React.Dispatch<Action>
) {
  const name = prompt('Enter mentor name');
  const title = prompt('Enter mentor title');
  if (name && title) {
    dispatch({ type: 'add', name, title });
  }
}

function handleChangeMentorTitle(
  dispatch: React.Dispatch<Action>
) {
  const prename = prompt('Enter mentor name for change title');
  const newtitle = prompt('Enter mentor new title');
  if (prename && newtitle) {
    dispatch({ type: 'update', prename, newname: newtitle });
  }
}

function handleDeleteMentor(
  dispatch: React.Dispatch<Action>
) {
  const prename = prompt('Enter mentor name for delete');
  if (prename) {
    dispatch({ type: 'delete', prename });
  }
}

export default AppMentor;
