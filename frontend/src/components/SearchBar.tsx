import React from 'react';

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Buscar tarea..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-bar"
  />
);

export default SearchBar;
