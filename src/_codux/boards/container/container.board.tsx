import React from "react";
import { createBoard } from "@wixc3/react-board";
import Container from "../../../components/Container";

export default createBoard({
  name: "Container",
  Board: () => (
    <Container className="custom-container-class">
      <div>Content goes here</div>
    </Container>
  ),
  isSnippet: true,
});
