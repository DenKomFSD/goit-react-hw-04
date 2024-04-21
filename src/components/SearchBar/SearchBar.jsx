export default function SearchBar({ onSubmit }) {
  const onSearch = (event) => {
    event.preventDefault();
    const value = event.target.query.value;
    onSubmit(value);
  };
  return (
    <header>
      <form onSubmit={onSearch}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
