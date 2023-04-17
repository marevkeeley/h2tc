import React, { useState } from "react";
import { Scroll, SearchList } from "./searchC";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredPages = details.filter((page) => {
    return (
      page.name.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList pages={filteredPages} />
      </Scroll>
    );
  }

  return (
    <div>
        <input
          type="search"
          placeholder="Search Pages"
          onChange={handleChange}
        />
      {searchList()}
    </div>
  );
}

export default Search;
