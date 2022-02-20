import React from "react";
import Headline from "./Headline";

export default function Headlines({ articles = [] }) {
  return (
    <ul class="list-group">
      {articles?.map((article) => (
        <li class="list-group-item">
          <Headline article={article} />
        </li>
      ))}
    </ul>
  );
}
