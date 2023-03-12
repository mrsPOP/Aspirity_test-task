const SortBy = ({ isVisited, setIsVisited }) => {
  return (
    <select
      className="visit-info__sortby"
      name="visit"
      id="visitSort"
      value={isVisited}
      onChange={(evt) => {
        setIsVisited(evt.target.value);
      }}
    >
      <option value="all">All</option>
      <option value="true">Visited</option>
      <option value="false">Not Visited</option>
    </select>
  );
};

export default SortBy;
