import React, { useState } from "react";
import emojiList from "../db.json";
import "./emoji.css";

export const EmojiSearch = () => {
  const [searchEmoji, setSearchEmoji] = useState("");
  const [findEmojis, setfindEmojis] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchEmoji(value);
    setfindEmojis(
      emojiList.filter((el) => {
        return el.title.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const reloadEmojis = () => {
    if (findEmojis.length === 0) {
      return <div className="results">No results found</div>;
    } else {
      return (
        <ul className="emojiList">
          {findEmojis.map((el) => (
            <li key={el.title} className="emoji">
              <span className="icon">{el.symbol}</span>
              <span className="title">{el.title}</span>
            </li>
          ))}
        </ul>
      );
    }
  };


  return (
    <div class="container">
       <h1>🤡 Emoji Search 🤡</h1>
       <input
        type="text"
        value={searchEmoji}
        onChange={handleSearch}
        placeholder="Search for an emoji"
        />
      {reloadEmojis()}
    </div>
  )
}
