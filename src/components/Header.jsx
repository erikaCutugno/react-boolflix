import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="row">
        <h1>BoolFlix</h1>
        <SearchBar />
      </div>
    </header>
  );
}
