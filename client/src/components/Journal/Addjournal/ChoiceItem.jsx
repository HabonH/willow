import classNames from "classnames";
import { useState } from "react";

const ChoiceItem = (props) => {
  const { image, name, getChoice, getChoiceMade } = props;

  const [click, setClick] = useState(false);

  const choiceClass = classNames("choice-item", {
    "choice-item-selected": click,
  });

  const clickHandler = () => {
    getChoice(name);
    getChoiceMade();
    setClick(true);
  };

  return (
    <div className={choiceClass} onClick={clickHandler}>
      <p className="choice-name">{name}</p>
      <img src={image} className="choice-image" alt="choices" />
    </div>
  );
};

export default ChoiceItem;
