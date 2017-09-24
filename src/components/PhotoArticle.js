import React from "react";
import "./PhotoArticle.css";

export default ({ title, description, author, img }) => (
  <article className="photo-box pure-u-1 pure-u-md-1-2">
    <a href={author.link}>
      <img src={img.src} alt={img.alt} />
    </a>

    <div className="photo-box-content">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>

    <aside className="photo-box-caption">
      <span>
        by <a href={author.link}> {author.name} </a>
      </span>
    </aside>
  </article>
);
