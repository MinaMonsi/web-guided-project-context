import React, { useContext } from "react";
import { FamilyContext } from "../contexts";

// Note: unlike Redux, we can have multiple sources of truth. Instead of one store, we have one or more contexts. Generally each context is for a specific group of components and/or with a specific functionality in mind (e.g., auth, user profile, blog, etc) but it's totally up to your own design.

// When consuming a context with useContext, remember to specify which context you want to consume! (There won't always be just one)

const Button = (props) => {
    const family = useContext(FamilyContext);
    return (
        <>
            <button
                className={`family-button ${family.familyName ===
                    activeFamily.familyName && "active"}`}
                key={family.familyName}
                onClick={() => setActiveFamily(family)}
            >
        </>
    );
};

export default Button;