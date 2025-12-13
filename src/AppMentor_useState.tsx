
import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep'; // Changed import path
import type { Person } from './reducer/person-reducer'; // Removed Mentor
import './App.css'
import './AppXY.css';

function AppMentor() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [person, setPerson] = useState<Person>({ 
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
  });

  return (
    <div>
      <h1>{person.name} {person.title}</h1>
      {person.mentors.map((mentor, index) => (
        <p key={index}>Mentor: {mentor.name} {mentor.title}</p>
      ))}


      <button onClick={() => handleChangeMentorName(person, setPerson)}>
        Change Mentor name
      </button>

      <button onClick={() => handleChangeMentorTitle(person, setPerson)}>
        Change Mentor title
      </button>

      <button onClick={() => handleDeleteMentor(person, setPerson)}>
        Delete Mentor
      </button>

      <button onClick={() => handleAddMentor(setPerson)}>
        Add Mentor
      </button>
    </div>
    );
}

function handleChangeMentorName(
  person: Person,
  setPerson: React.Dispatch<React.SetStateAction<Person>>
) {
  const prename = prompt('Enter mentor name for change');
  const newname = prompt('Enter mentor new name');
  if (prename && newname) {
    const newPerson = cloneDeep(person);
    newPerson.mentors.find((mentor) => mentor.name === prename)!.name = newname;
    setPerson(newPerson);
  }
}

function handleAddMentor(
  setPerson: React.Dispatch<React.SetStateAction<Person>>
) {
  const name = prompt('Enter mentor name');
  const title = prompt('Enter mentor title');
  if (name && title) {
    setPerson((prev) => ({
      ...prev,
      mentors: [...prev.mentors, { name, title }],
    }));
  }
}

function handleChangeMentorTitle(
  person: Person,
  setPerson: React.Dispatch<React.SetStateAction<Person>>
) {
  const prename = prompt('Enter mentor name for change title');
  const newtitle = prompt('Enter mentor new title');
  if (prename && newtitle) {
    const newPerson = cloneDeep(person);
    newPerson.mentors.find((mentor) => mentor.name === prename)!.title = newtitle;
    setPerson(newPerson);
  }
}

function handleDeleteMentor(
  person: Person,
  setPerson: React.Dispatch<React.SetStateAction<Person>>
) {
  const prename = prompt('Enter mentor name for delete');
  if (prename) {
    const newPerson = cloneDeep(person);
    newPerson.mentors = newPerson.mentors.filter(
      (mentor) => mentor.name !== prename
    );
    setPerson(newPerson);
  }
}

export default AppMentor;
