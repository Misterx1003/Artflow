import React from 'react';

const allTags = ['art', 'anime', 'game', 'nsfw', 'sfw', '3d'];

const Sidebar = ({ selected, toggle }) => {
  return (
    <div style={{ width: 200, padding: 20, background: '#eee' }}>
      <h3>Категорії</h3>
      {allTags.map((tag) => (
        <div key={tag}>
          <label>
            <input
              type="checkbox"
              checked={selected.includes(tag)}
              onChange={() => toggle(tag)}
            />
            {tag}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
