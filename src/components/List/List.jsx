import Card from "../UI/Card";

const List = ({ results }) => {
  return (
    <div className="container">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default List;
