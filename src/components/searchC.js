import React from "react";

/**
 * Creates a card with a name and a link.
 * @param {*} param0 the piece of data that must have a path and a name.
 * @returns a contianer with a hyperlink name.
 */
function Card({ page }) {
  return (
    <div>
      <a href={page.path}>
        <p>{page.name}</p>
      </a>
    </div>
  );
}

/**
 * Creates a list of cards with the search results.
 * @param {*} param0 a set of data with an id and content.
 * @returns a list of cards.
 */
function SearchList({ pages }) {
  const filtered = pages.map((page) => <Card key={page.id} page={page} />);
  return <div>{filtered}</div>;
}

/**
 * Allows a list of items to be shown with a scroll bar to see more results. 
 * @param {*} props a set of data to show.
 * @returns the data given in a scrollable view.
 */
const Scroll = (props) => {
  return (
    <div style={{ overflowY: "scroll", height: "70vh" }}>{props.children}</div>
  );
};

export { Card, SearchList, Scroll };
