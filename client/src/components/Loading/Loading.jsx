import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.spinner}>
        <span>C</span>
        <span>A</span>
        <span>R</span>
        <span>G</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>O</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};
export default Loading;
