
import type { Person } from './reducer/person-reducer'; // Removed Mentor
import './App.css'
import './AppXY.css';
import { useImmer } from 'use-immer';

const initialPerson: Person = { 
  name: 'jongwon', 
  title: 'developer',
  mentors: [{ 
    name: 'youngjin',
    title: 'senior developer',
  },
  {
    name: 'jiwon',
    title: 'junior developer',
  },
]
};

function AppMentor() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [person, updatePerson] = useImmer<Person>(initialPerson);

  return (
    <div>
      <h1>{person.name} {person.title}</h1>
      {person.mentors.map((mentor, index) => (
        <p key={index}>Mentor: {mentor.name} {mentor.title}</p>
      ))}


      <button onClick={() => handleChangeMentorName(updatePerson)}> 
        Change Mentor name
      </button>

      <button onClick={() => handleChangeMentorTitle(updatePerson)}> 
        Change Mentor title
      </button>

      <button onClick={() => handleDeleteMentor(updatePerson)}> 
        Delete Mentor
      </button>

      <button onClick={() => handleAddMentor(updatePerson)}> 
        Add Mentor
      </button>
    </div>
    );
}

function handleChangeMentorName(
  updatePerson: (f: (draft: Person) => void) => void
) {
  const prename = prompt('Enter mentor name for change');
  const newname = prompt('Enter mentor new name');
  if (prename && newname) {
    updatePerson((draft) => {
      const mentor = draft.mentors.find((m) => m.name === prename);
      if (mentor) {
        mentor.name = newname;
      }
    });
  }
}

function handleAddMentor(
  updatePerson: (f: (draft: Person) => void) => void
) {
  const name = prompt('Enter mentor name');
  const title = prompt('Enter mentor title');
  if (name && title) {
    updatePerson((draft) => {
      draft.mentors.push({ name, title });
    });
  }
}

function handleChangeMentorTitle(
  updatePerson: (f: (draft: Person) => void) => void
) {
  const prename = prompt('Enter mentor name for change title');
  const newtitle = prompt('Enter mentor new title');
  if (prename && newtitle) {
    updatePerson((draft) => {
      const mentor = draft.mentors.find((m) => m.name === prename);
      if (mentor) {
        mentor.title = newtitle;
      }
    });
  }
}

function handleDeleteMentor(
  updatePerson: (f: (draft: Person) => void) => void
) {
  const prename = prompt('Enter mentor name for delete');
  if (prename) {
    updatePerson((draft) => {
      draft.mentors = draft.mentors.filter((mentor) => mentor.name !== prename);
    });
  }
}

export default AppMentor;
