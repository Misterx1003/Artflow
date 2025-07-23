import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Sidebar from './components/Sidebar';
import data from '../data/library.json';

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredItems = data.items.filter(item =>
    selectedTags.length === 0 || selectedTags.every(tag => item.tags.includes(tag))
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar selected={selectedTags} toggle={toggleTag} />
      <Gallery items={filteredItems} />
    </div>
  );
};

export default App;
