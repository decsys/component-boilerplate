import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import MyComponent from "./index";

const actions = {
  logResults: action("Results logged")
};

storiesOf("MyComponent", module).add("Default", () => (
  <MyComponent
    initialText={text("Text", "Hello")}
    {...actions}
  />
));
