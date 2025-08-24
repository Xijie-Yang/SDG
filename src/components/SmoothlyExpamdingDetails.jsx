import React, { useRef, useState } from "react";

export default function ExpandableDetails({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  return (
    <div>
      <p
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "▾ " + title : "▸ " + title}
      </p>

      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded ? contentRef.current?.scrollHeight : 0,
          overflow: "hidden",
          transition: "max-height 0.6s ease",
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
