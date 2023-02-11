import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>Error 404!</h1>
        <h2>Not Found</h2>
      </div>      
    </div>
  );
};

export default NotFound;
