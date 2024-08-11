import React from "react";
import { createBoard } from "@wixc3/react-board";
import Section from "../../../components/Section";

export default createBoard({
  name: "Section",
  Board: () => (
    <Section title="Section Title">
      <p>This is the content of the section.</p>
    </Section>
  ),
  isSnippet: true,
});
