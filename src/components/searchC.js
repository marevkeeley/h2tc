import React from "react";

function Card({ page }) {
  return (
    <div>
      <a href={page.path}>
        <p>{page.name}</p>
      </a>
    </div>
  );
}

function SearchList({ pages }) {
  const filtered = pages.map((page) => <Card key={page.id} page={page} />);
  return <div>{filtered}</div>;
}

const Scroll = (props) => {
  return (
    <div style={{ overflowY: "scroll", height: "70vh" }}>{props.children}</div>
  );
};

export { Card, SearchList, Scroll };
