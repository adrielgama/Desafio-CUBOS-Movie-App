import React from "react";
import "./search.css";

//import { Link } from 'react-router-dom';

const Search = (props) => {
  const { submit, change } = props;

  let pHolder = "Busque um filme por nome, ano ou gênero...";

  return (
    <div className="search">
      <section className="bar">
        <form action="" onSubmit={submit}>
          <div>
            <input
              placeholder={pHolder}
              type="text"
              className="input"
              onChange={change}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Search;
