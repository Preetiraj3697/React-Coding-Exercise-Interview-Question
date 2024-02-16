import React, { useEffect, useState } from "react";

const FetchingDataSearchWhenClick = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);

  const fetchData = (word) => {
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(word);
  };
  const handleItemSearch = (newword) => {
    fetchData(newword);
    setWord(newword);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          value={word}
          type="text"
          onChange={(e) => setWord(e.target.value)}
          style={{ padding: "10px" }}
        />
        <button
          style={{
            background: "black",
            border: "4px solid yellow",
            color: "white",
            padding: "10px",
            height: "auto",
          }}
        >
          Search
        </button>
      </form>

      <div>
        {data.map((item) => (
          <li key={item.word} onClick={() => handleItemSearch(item.word)}>
            {item.word}
          </li>
        ))}
      </div>
    </>
  );
};

export default FetchingDataSearchWhenClick;
