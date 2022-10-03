export default function HelloWorld() {
  const handleTheClickHere = () => {
    console.log("This was clicked");
  };
  const handleDoNotClick = () => {
    console.log("Why'd you click here?");
  };
  return (
    <>
      <div className="container">
        <button
          name="Click Me"
          type="button"
          className="moz-focusring"
          style={{ padding: 2, margin: 4 }}
          onClick={handleTheClickHere}
        >
          Click Here
        </button>
        <button
          type="button"
          style={{ padding: 2, margin: 4 }}
          onClick={handleDoNotClick}
        >
          Do Not Click Me
        </button>
      </div>
    </>
  );
}
