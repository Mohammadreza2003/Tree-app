// TreeDiagram.js

import React, { useState } from "react";
import "./App.css";
import { data } from "./data";

const TreeDiagram = () => {
  const [visibleNodes, setVisibleNodes] = useState([]);

  const toggleNodeVisibility = (nodeId) => {
    if (visibleNodes.includes(nodeId)) {
      setVisibleNodes(visibleNodes.filter((id) => id !== nodeId));
    } else {
      setVisibleNodes([...visibleNodes, nodeId]);
    }
  };

  const buildTree = (nodes, parentId = null) => {
    return nodes
      .filter((node) => node.parent__id === parentId)
      .map((node) => ({
        ...node,
        children: buildTree(nodes, node.id),
      }));
  };

  const treeData = buildTree(data[0].data);

  const TreeNode = ({ node }) => (
    <li key={node.id}>
      <span onClick={() => toggleNodeVisibility(node.id)}>
        {visibleNodes.includes(node.id) ? "" : ""} {node.title}
      </span>
      {visibleNodes.includes(node.id) && node.children && (
        <ol>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </ol>
      )}
    </li>
  );

  return (
    <div className="p-8">
      <h1 className="title">Tree Diagram</h1>
      <ol className="wtree">
        {treeData.map((node) => (
          <TreeNode key={node.id} node={node} />
        ))}
      </ol>
    </div>
  );
};

export default TreeDiagram;
