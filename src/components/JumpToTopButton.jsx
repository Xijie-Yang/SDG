import React, { useEffect, useState } from "react";


import "./JumpToTopButton.css";
// const styles = {
//   button: {
//     position: "fixed",
//     bottom: "20px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     zIndex: 1000,
//     padding: "12px 20px",
//     fontSize: "16px",
//     border: "none",
//     borderRadius: "30px",
//     backgroundColor: "#333",
//     color: "white",
//     cursor: "pointer",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//   },
// };

const JumpToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="JumpToTopButton">
      {visible && <button onClick={scrollToTop}>↑</button>}
    </div>
  );
};

export default JumpToTopButton;
