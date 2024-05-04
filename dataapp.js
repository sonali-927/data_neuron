import React, { useState } from 'react';

const APIComponent = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState({ add: 0, update: 0 });

  const handleAdd = () => {
    setData(null); // Clear existing data
    setCount(prevCount => ({ ...prevCount, add: prevCount.add + 1 }));
  };

  const handleUpdate = () => {
    // Logic to update data
    setCount(prevCount => ({ ...prevCount, update: prevCount.update + 1 }));
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <p>Add Count: {count.add}</p>
      <p>Update Count: {count.update}</p>
    </div>
  );
};

export default APIComponent;