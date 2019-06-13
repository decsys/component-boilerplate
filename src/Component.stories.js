import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Component from "./Component";

const actions = {
  logResults: action("Results logged"),
  setNextEnabled: action("Next button enabled")
};

storiesOf("Component", module).add("Default", () => (
  <Component text={text("Text", "Hello")} {...actions} />
));
