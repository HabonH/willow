import EmojiItem from "./EmojiItem";
import EmojiShow from "./EmojiShow";

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import getRandomEmojis from "../helpers/randomEmojis";

const EmojiList = () => {
  const [emojis, setEmojis] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/emojis").then((result) => {
      setEmojis(getRandomEmojis(result.data));
    });
  }, []);

  const getEmoji = (id) => {
    const filteredEmoji = emojis.filter((emoji) => emoji.id === id);
    setSelectedEmoji(filteredEmoji);
    setShow(true);
  };

  const exitShow = () => {
    setShow(false);
  };

  const parsedEmojis = emojis.map((emoji) => {
    return (
      <EmojiItem
        key={emoji.id}
        name={emoji.name}
        id={emoji.id}
        icon={emoji.icon}
        getEmoji={getEmoji}
      />
    );
  });

  return (
    <>
      {show ? (
        <Card>
          <EmojiShow emoji={selectedEmoji} exitShow={exitShow} />
        </Card>
      ) : (
        <Card>
          <h3 className="emoji-emotions-title">Emoji Emotions</h3>
          <p className="emoji-emotions-text">
            Select an Emoji to learn about an emotion
          </p>
          <div className="emoji-card-grid"> {parsedEmojis} </div>
        </Card>
      )}
    </>
  );
};

export default EmojiList;
