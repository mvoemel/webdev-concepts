const ClickableSVG = () => {
  const handleRectangleClick = (value) => {
    alert(`Rectangle clicked ${value}`);
  };

  const handleTriangleClick = () => {
    alert("Triangle clicked");
  };

  return (
    <>
      <svg width="200" height="200">
        <rect
          x="50"
          y="50"
          width="100"
          height="100"
          fill="blue"
          onClick={() => handleRectangleClick("test")}
          style={{ cursor: "pointer" }}
        />
        <polygon
          points="150,50 100,150 200,150"
          fill="red"
          onClick={handleTriangleClick}
          style={{ cursor: "pointer" }}
        />
      </svg>
    </>
  );
};

export default ClickableSVG;
