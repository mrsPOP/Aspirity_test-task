import City from "./City.jsx";

const CityList = ({isVisited, wishItem, setWish}) => {

  return (
    <div>
      <ul className="wish-list">
        {Object.keys(wishItem).map((id) => {
          if (
            isVisited === "all" ||
            isVisited === String(wishItem[id]["isVisited"])
          ) {
            return (
              <City key={id} id={id} wishItem={wishItem} setWish={setWish}/>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default CityList;
