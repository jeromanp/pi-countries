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

// import { Link } from 'react-router-dom';

// import style from './NotFound.module.css';

// const NotFound = () => {
//   return (
//     <div className={style.container}>
//       <div className={style.infoContainer}>
//             <h4 className={style.title}>Error - 404</h4>
//         <div className={style.containerAnimation}>
//           <div className={`${style.globeLoader} fa-solid fa-globe`}>
//             <i className="fas fa-plane"></i>
//             <Link className={style.link} to='/home'>Home</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NotFound
