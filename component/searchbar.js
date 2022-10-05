export default function SearchBar(props) {
  return (
    <>
      <div>
        <input name="search-input" />
        <button
          type="button"
          style={{ padding: 2, margin: 4 }}
          onClick={props.onClick}
        >
          Define
        </button>
      </div>
    </>
  );
}
