const ListMessage = ({ data }) => {
  return (
    <div>
      <p>{data.content}</p>
      <p>{data.name}</p>
      <p>{data.date}</p>
    </div>
  );
};

export default ListMessage;
