import React, { useState } from "react";
import { data } from "./data"; 
import "./App.css"; 

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNodeClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <span
        onClick={handleNodeClick}
        className="cursor-pointer ml-2 hover:underline"
      >
        {node.title}
      </span>

      {isExpanded && node.children && (
        <ol>
          {node.children.map((childNode, index) => (
            <TreeNode key={index} node={childNode} />
          ))}
        </ol>
      )}
    </li>
  );
};

const TreeDiagram = () => {
  return (
    <div className="p-8">
      <h1 className="title">درختواره کسب و کار</h1>
      <ol className="wtree">
        {data.map((node, index) => (
          <TreeNode key={index} node={node} />
        ))}
      </ol>
    </div>
  );
};

export default TreeDiagram;
