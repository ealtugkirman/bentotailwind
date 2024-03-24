import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ComponentPreview = ({ component: Component, code }) => {
  return (
    <div className="w-full bg-white">
      {/* Kod Parçacığı */}
      <div className="h-96">
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ComponentPreview;
