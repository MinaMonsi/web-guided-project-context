import React, { useContext } from 'react';
import { FamilyContext } from '../contexts';

// Note: unlike Redux, we can have multiple sources of truth. Instead of one store, we have one or more contexts. Generally each context is for a specific group of components and/or with a specific functionality in mind (e.g., auth, user profile, blog, etc) but it's totally up to your own design.

// When consuming a context with useContext, remember to specify which context you want to consume! (There won't always be just one)

const Button = (props) => {
    const [activeFamily, setActiveFamily] = useContext(FamilyContext).activeFamily;
    return (
        <>
        <button
            className={`family-button ${props.family.familyName ===
              activeFamily.familyName && "active"}`}
            key={props.family.familyName}
            onClick={() => setActiveFamily(props.family)}
          >
            {props.family.familyName}
          </button>
        </>
    );
};

export default Button;