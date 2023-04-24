import React, { useState } from "react";
import { Scroll, SearchList } from "./searchC";

/**
 * Searches through the given date based on the seach word entered by users.
 * @param {*} param0 the list of date to be searched
 * @returns a list of fitlered responses.
 */
function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  //Filters the given set of data.
  const filteredPages = details.filter((page) => {
    return (
      page.name.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  //Creates a list of filtered results.
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
