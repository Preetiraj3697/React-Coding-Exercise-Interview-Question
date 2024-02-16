import React, { useState } from 'react';
import './SwapItems.css'; // Import CSS file for styling

const SwapItems = () => {
  const [items1, setItems1] = useState(['item1', 'item2', 'item3']);
  const [items2, setItems2] = useState(['itemA', 'itemB', 'itemC']);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleItemClick = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  const handleSwapButtonClick = () => {
    if (selectedIndexes.length > 0) {
      const tempItems1 = [...items1];
      const tempItems2 = [...items2];

      selectedIndexes.forEach((index) => {
        const temp = tempItems1[index];
        tempItems1[index] = tempItems2[index];
        tempItems2[index] = temp;
      });

      setItems1(tempItems1);
      setItems2(tempItems2);
      setSelectedIndexes([]);
    }
  };

    return (
      <>
    <div className="swap-container">
      <div className="swap-div">
        <h2>First Div</h2>
        <ul>
          {items1.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={selectedIndexes.includes(index) ? 'selected' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="swap-div">
        <h2>Second Div</h2>
        <ul>
          {items2.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={selectedIndexes.includes(index) ? 'selected' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      </div>
        <button onClick={handleSwapButtonClick}>Swap Selected Items</button>
      </>
  );
};

export default SwapItems;
