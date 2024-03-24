import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BentoFirst = ({ component: Component, code }) => {
  return (
    <div className=" w-full">
      {/* Kod Parçacığı */}
      <div className="h-96">
        <SyntaxHighlighter language="jsx" style={oneDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default BentoFirst;
