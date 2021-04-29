import React, { useContext } from "react";
import { FamilyContext } from "../contexts";

// Note: unlike Redux, we can have multiple sources of truth. Instead of one store, we have one or more contexts. Generally each context is for a specific group of components and/or with a specific functionality in mind (e.g., auth, user profile, blog, etc) but it's totally up to your own design.

// When consuming a context with useContext, remember to specify which context you want to consume! (There won't always be just one)

const Siblings = (props) => {
  const [family, setActiveFamily] = useContext(FamilyContext).activeFamily;
  return (
    <section className="parents">
      {family.siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;