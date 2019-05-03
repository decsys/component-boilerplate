import React, { useState, useEffect } from "react";
import * as props from "./index.props";
import { version } from "../package.json";

// Import any SVG Component to use as an Icon for the Response Component
import { Question } from "styled-icons/fa-solid";

// Build a Response Component as a React Functional Component
const MyComponent = ({ label, initialText, logResults }) => {
  const [value, setValue] = useState(initialText);
  useEffect(() => setValue(initialText), [initialText]);

  const handleInput = ({ target }) => {
    setValue(target.value);
  };

  const handleBlur = e => {
    e.persist();
    logResults({ text: e.target.value });
  };

  return (
    <div>
      <div>{label}</div>
      <input value={value} onBlur={handleBlur} onChange={handleInput} />
    </div>
  );
};

// Props metadata - Edit these in `./index.props.js`
MyComponent.params = props.params;
MyComponent.propTypes = props.propTypes;
MyComponent.defaultProps = props.defaultProps;

// Other Component Metadata
MyComponent.version = version;
MyComponent.icon = <Question />; // Use the Icon component imported above

export default MyComponent;
