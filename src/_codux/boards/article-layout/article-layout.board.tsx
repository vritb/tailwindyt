import React from "react";
import { createBoard } from "@wixc3/react-board";
import ArticleLayout from "../../../components/ArticleLayout";

export default createBoard({
  name: "ArticleLayout",
  Board: () => (
    <ArticleLayout
      article={{
        slug: "introducing-codux",
        title: "Introducing Codux: A New Era of Coding",
        description:
          "Discover the revolutionary new way to write code with Codux.",
        author: "Jane Doe",
        date: "2023-04-01",
      }}
    >
      <p>
        Codux is transforming the development workflow by introducing an
        innovative approach to coding. With its advanced features and
        user-friendly interface, developers can now achieve more with less
        effort.
      </p>
    </ArticleLayout>
  ),
  isSnippet: true,
  environmentProps: {
    windowHeight: 472,
  },
});
