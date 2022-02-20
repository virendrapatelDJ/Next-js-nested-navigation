import React from 'react';

function ArticleViewer({ article }) {
  return (
    <div>
      <h1>{article?.headline}</h1>
      <hr />
      {article?.content.map((content) => (
        <p>{content}</p>
      ))}
    </div>
  );
}

export { ArticleViewer };
