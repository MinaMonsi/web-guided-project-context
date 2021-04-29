import React from 'react';
import { FamilyContext } from '../contexts';

class Parents extends React.Component {
  render() {
    return (
      <section className="parents">
        <FamilyContext.Consumer>
        {this.props.family.parents.map(p => (
          <div className="person" key={p.name}>
            <img width="150" src={p.img} alt={p.name} />
            <strong>{p.name}</strong>
          </div>
        ))}
        </FamilyContext.Consumer>
      </section>
    );
  }
};

export default Parents;
