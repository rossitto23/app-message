import style from './list-message.module.css'

const ListMessage = ({ data }) => {
    const time = new Date((data.createAt)*1000).toLocaleTimeString();
  return (
    <div className={style.main}>
      <p>Contenu: {data.content}</p>
      <p>Auteur: {data.author}</p>
      <p>Crée à: {time}</p>
    </div>
  );
};

export default ListMessage;
