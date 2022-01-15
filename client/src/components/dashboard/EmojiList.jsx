import EmojiItem from "./EmojiItem";

import { useEffect, useState } from "react";
import axios from "axios";

const EmojiList = () => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/emojis").then((result) => {
      setEmojis(result.data);
    });
  }, []);

  return (
    <div className="emoji-card">
      {emojis.map((emoji) => {
        return (
          <EmojiItem
            key={emoji.id}
            name={emoji.name}
            affirmation={emoji.affirmation}
            description={emoji.description}
            icon={emoji.icon}
          />
        );
      })}
    </div>
  );
};

export default EmojiList;
