const Person = ({ name  ,removePerson ,id}) => {
  return (
    <div>
      <h4>{name + id}</h4>
      <button onClick={()=>{removePerson(id)} }>remove</button>
    </div>
  );
};
export default Person;
