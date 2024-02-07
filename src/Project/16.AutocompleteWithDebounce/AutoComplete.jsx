import React, { useCallback, useState } from "react";
import "./AutoComplete.css";
// Search with Debounce
const AutoComplete = () => {
  const [search, setSearch] = useState(null);
  const debouce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
  const handleChange = (event) => {
    const { value } = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };
  const optimiseVersion = useCallback(debouce(handleChange), []);
  return (
    <div>
      <h1>AutoComplete with Debounce</h1>
      <input
        type="text"
        name={search}
        placeholder="Enter Something"
        onChange={optimiseVersion}
        className="search"
      />
      {!search ? (
         <h1>You not search yet!</h1>
        
      ) : (
        <div className="autocomplete">
        {search?.map((el, i) => (
          <div key={i} className="autocompleteitems">
            <span>{el.name}</span>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default AutoComplete;
