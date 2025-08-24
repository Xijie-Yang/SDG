import ExpandableDetails from "./components/SmoothlyExpamdingDetails";

import "./PublicationCard.css";

import data_authors from "./data/authors.json";

// ----

import { FaGithub, FaFilePdf, FaYoutube } from "react-icons/fa";
import { SiArxiv } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { MdOutlineArticle } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import { IoIosLink } from "react-icons/io";

function ButtonIcon(type_name) {
  if (type_name.startsWith("Project Page")) {
    return <MdOutlineArticle />;
  } else if (type_name.startsWith("Paper (arXiv)")) {
    return <SiArxiv />;
  } else if (type_name.startsWith("Paper")) {
    return <FaFilePdf />;
  } else if (type_name.startsWith("Code")) {
    return <FaGithub />;
  } else if (type_name.startsWith("Data")) {
    return <FaDatabase />;
  } else if (type_name.startsWith("Video")) {
    return <FaYoutube />;
  } else if (type_name.startsWith("News")) {
    return <GiNewspaper />;
  } else {
    return <IoIosLink />;
  }
}

function AuthorLink(author_name) {
  const author_found = data_authors.find((obj) => obj[author_name]);
  if (author_found) {
    const current_author = author_found[author_name];
    return (
      <a
        className="author"
        href={current_author.link}
        title={current_author.link}
      >
        {author_name}
      </a>
    );
  } else {
    return <span>{author_name}</span>;
  }
}

// ----

export default function PublicationCard({ publication }) {
  return (
    <div
      className="PublicationCard"
      style={{
        padding: "1px 16px",
        borderRadius: "12px",
      }}
    >
      <h3>{publication.title}</h3>

      <p>{publication.source && "(" + publication.source + ")"}</p>

      <p>
        {publication.authors
          .map((author_name) => AuthorLink(author_name))
          .reduce((prev, curr) => [prev, ", ", curr])}
      </p>

      <div className="PublicationLinks">
        {publication.links && (
          <p
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              columnGap: "12px",
              rowGap: "12px",
            }}
          >
            {publication.links.map((link) => (
              <a className="button" href={link.url} title={link.url}>
                {ButtonIcon(link.name)}
                {link.name}
              </a>
            ))}
          </p>
        )}
      </div>

      {publication.tldr && <p>{publication.tldr}</p>}

      {publication.abstract && (
        <div>
          <ExpandableDetails
            title={"Abstract"}
            children={
              <p style={{ textAlign: "left" }}>{publication.abstract}</p>
            }
          />
        </div>
      )}

      {publication.visual && (
        <p>
          <img
            src={import.meta.env.BASE_URL + "/visuals/" + publication.visual}
            alt={publication.visual}
            style={{ width: "100%" }}
          />
        </p>
      )}
    </div>
  );
}
