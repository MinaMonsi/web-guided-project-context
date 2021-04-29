import React from 'react';
import { FamilyContext } from '../contexts';

// For class components, use render props pattern with Context.Consumer (rather than the nicer useReducer hook -- hooks are only for function components!)

class Parents extends React.Component {
  render() {
    return (
      <section className="parents">
        <FamilyContext.Consumer>
          {value => (
            <>
              {
                value.activeFamily[0].parents.map(p => (
                  <div className="person" key={p.name}>
                    <img width="150" src={p.img} alt={p.name} />
                    <strong>{p.name}</strong>
                  </div>
                ))
                }
            </>
          )}
        </FamilyContext.Consumer>
      </section>
    );
  }
};

export default Parents;
