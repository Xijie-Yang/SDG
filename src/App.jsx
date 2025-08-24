import PublicationCard from "./PublicationCard";
import JumpToTopButton from "./components/JumpToTopButton";

import "./App.css";

import data_publications from "./data/publications.json";

// ----

function PublicationContents() {
  return (
    <div className="PublicationContents">
      <p
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          columnGap: "24px",
        }}
      >
        {data_publications.map((publication) => (
          <a
            href={"#" + publication.name}
            title={"Jump to " + publication.name}
          >
            <b>{publication.name} </b>
            {publication.source && "(" + publication.source + ")"}
          </a>
        ))}
      </p>
    </div>
  );
}

function PublicationList() {
  return (
    <div>
      {data_publications.map((publication) => (
        <div id={publication.name}>
          <hr />
          <PublicationCard publication={publication} />{" "}
        </div>
      ))}
      <hr />
    </div>
  );
}

// ----

export default function App() {
  return (
    <>
      <h1>SDG Publications</h1>

      <PublicationContents />

      <PublicationList />

      <JumpToTopButton />
    </>
  );
}
