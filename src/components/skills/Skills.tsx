import {FunctionComponent, useEffect, useState} from 'react';
import {SkillsProps} from './Skills.types';

const Skills: FunctionComponent<SkillsProps> = ( props ) => {
  const {skills} = props
  const [isLoggedIn, setIsLoggedIn] = useState( false )

  useEffect( () => {
    const timeOut = setTimeout( () => {
      setIsLoggedIn( true )
    }, 1500 )

    return () => {
      clearTimeout( timeOut )
    }
  }, [] )

  return (
    <>
      <ul>
        {skills.map( skill =>
          <li key={skill}>{skill}</li>
        )}
      </ul>
      {
        isLoggedIn ?
          <button>Start Learning</button> :
          <button onClick={() => setIsLoggedIn( true )}>Login</button>
      }
    </>
  );
}

export default Skills;