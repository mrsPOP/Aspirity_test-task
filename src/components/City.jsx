import {useState} from "react";

function City({id, wishItem, setWish, }) {
  function toggleButton(objEl, attribute) {
    objEl[attribute] = !objEl[attribute];
  }

  const [editSaveButton, setEditSaveButton] = useState("edit");

  function editSaveToggler() {
    editSaveButton === "edit"
      ? setEditSaveButton("save")
      : setEditSaveButton("edit");
  }

  const [place, setPlace] = useState(`${wishItem[id]["place"]}`);

  return (
    <li key={id} className="wish-list__item">
      <button
        className={"wish-list__button_check-visit ".concat(
          wishItem[id]["isVisited"] === true
            ? "wish-list__button_check-visit_true"
            : ""
        )}
        aria-label="visited"
        onClick={() => {
          toggleButton(wishItem[id], "isVisited");
          setWish(Object.assign({}, wishItem));
        }}
      ></button>
      <img
        className="wish-list__pic"
        src={wishItem[id]["link"]}
        alt={wishItem[id]["place"]}
      />
      <input
        className="wish-list__input"
        type="text"
        value={place}
        onChange={(evt) => {setPlace(evt.target.value)}}
        disabled={editSaveButton === "edit"}
      />
      <button
        className="wish-list__button"
        onClick={() => {
          delete wishItem[id];
          setEditSaveButton("edit");
          setWish(Object.assign({}, wishItem));
        }}
      >
        delete
      </button>
      <button
        className="wish-list__button"
        onClick={() => {
          toggleButton(wishItem[id], "disabled");
          editSaveToggler();
          wishItem[id].place = place;
          setWish(Object.assign({}, wishItem));
        }}
      >
        {editSaveButton}
      </button>
    </li>)
}

export default City