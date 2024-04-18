import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BentoFirst = ({ component: Component, code }) => {
  return (
    <div className="w-full">
      <div className="h-96">
        <SyntaxHighlighter language="jsx" style={tomorrowNightBright}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default BentoFirst;
