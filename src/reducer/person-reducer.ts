export interface Mentor {
  name: string;
  title: string;
}

export interface Person {
  name: string;
  title: string;
  mentors: Mentor[];
}

export type Action = 
  | { type: 'update'; prename: string; newname: string } 
  | { type: 'add'; name: string; title: string } 
  | { type: 'delete'; prename: string };

export function personReducer(person: Person, action: Action): Person {
  switch (action.type) {
    case 'update': {
        return {
            ...person,
            mentors: person.mentors.map((mentor) => mentor.name === action.prename ? { ...mentor, name: action.newname } : mentor),
        }    
    }
    case 'add': {
        return {
            ...person,
            mentors: [...person.mentors, { name: action.name, title: action.title }],
        }
    }
    case 'delete': {
        return {
            ...person,
            mentors: person.mentors.filter((mentor) => mentor.name !== action.prename),
        }
    }
    default: {
        throw new Error('Invalid action');
    }
  }
}