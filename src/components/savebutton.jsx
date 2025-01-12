import React from "react";

export function SaveButton() {
  const saveData = () => {
    alert("저장되었습니다!");
  };

  return (
    <button
      onClick={saveData}
      style={{
        width: "12.75rem",
        height: "3.3125rem",
        flexShrink: 0,
        backgroundColor: "#485CF3",
        color: "white",
        border: "none",
        borderRadius: "1.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#3b4cd4")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#485CF3")}
    >
      저장
    </button>
  );
}

