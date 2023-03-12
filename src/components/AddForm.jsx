import { useState } from "react";

const AddForm = ({wishItem, setWish}) => {
  const initialState = "";
  const [placeValue, setplaceValue] = useState(initialState);
  const [linkValue, setlinkValue] = useState(initialState);

  function addNewWish(evt) {
    evt.preventDefault();
    wishItem[Date.now()] = {place: placeValue, link: linkValue, isVisited: false, disabled: true, key: Date.now()};
    setWish(Object.assign({}, wishItem));
    setplaceValue('');
    setlinkValue('');
  }

  return (
    <form className="add-form" onSubmit={addNewWish}>
      <input
        className="add-form__input"
        value={placeValue}
        onChange={(evt) => setplaceValue(evt.target.value)}
        type="text"
        placeholder="Place"
        minLength={3}
        required
      />
      <input
        className="add-form__input"
        value={linkValue}
        onChange={(evt) => setlinkValue(evt.target.value)}
        type="url"
        placeholder="Picture link"
        required
      />
      <button>Add</button>
    </form>
  );
};

export default AddForm