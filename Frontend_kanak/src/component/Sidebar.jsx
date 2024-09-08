import React from "react";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">WorkFlow Node</div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "Start")}
        draggable
      >
        Start
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "Filter Data")}
        draggable
      >
        Filter Data
      </div>

      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "Wait")}
        draggable
      >
        Wait
      </div>

      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "Convert Formate")}
        draggable
      >
        Convert Formate
      </div>

      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "Send Post Request")}
        draggable
      >
        Send Post Request
      </div>

      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "End")}
        draggable
      >
        End
      </div>
    </aside>
  );
};
