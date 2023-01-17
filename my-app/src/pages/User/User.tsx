import { CategoryUser } from './CategoryUser';
import {useState} from 'react' 
import './user.css'
import { Profile } from './Profile';
import { Settings } from './Settings';
import { Payment } from './Payment';
import { Securty } from './Securty';

function renderElement(param: string) {
  switch(param) {
    case '1':
      return <Profile/>;
    case '2':
      return <Settings/>;
    case '3':
      return <Payment/>;
    case '4':
      return <Securty/>;
    default:
      return <Profile/>;
  }
}

export function User() {
  const [element, SetElement] = useState('1');
  return (
    <>
      <section className="user">
        <div className="container d_flex">
          <CategoryUser setCase={SetElement}/>
          {renderElement(element)}
        </div>
      </section>
    </>
  );
}  