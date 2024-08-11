import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Card } from "../../../components/Card";

export default createBoard({
  name: "Card",
  Board: () => (
    <Card className="sample-class">
      <Card.Eyebrow className="sample-eyebrow" decorate={true}>
        New
      </Card.Eyebrow>
      <Card.Title href="/sample-path">Sample Title</Card.Title>
      <Card.Description>
        This is a sample description for the Card component.
      </Card.Description>
      <Card.Cta>Learn More</Card.Cta>
    </Card>
  ),
  isSnippet: true,
});
