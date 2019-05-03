import React, { useState, useEffect } from "react";
import * as props from "./Component.props";

// Build a Response Component as a React Functional Component
const Component = ({ label, initialText, logResults }) => {
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

// Props metadata - Edit these in `./Component.props.js`
Component.params = props.params;
Component.propTypes = props.propTypes;
Component.defaultProps = props.defaultProps;

export default Component;
