import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.spinner}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};
export default Loading;
