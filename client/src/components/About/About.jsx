import style from "./About.module.css";

const About = (props) => {
  function backtoHome() {
    return props.history.push("/home");
  }
  return (
    <div className={style.contain}>
      <div>
        <button onClick={backtoHome}>To Home</button>
      </div>

      <div className={style.info}>
        <div className={style.conta}>
          <h1>Sobre el proyecto Countries</h1>
          <p>
            Proyecto Individual para aprobar el primer módulo de Labs del
            Bootcamp de Henry.
          </p>
          <p>La información utilizada en este proyecto se puede encontrar en la API:<a href="https://restcountries.com/v3/all" target="_blank" rel="noreferrer">https://restcountries.com/v3/all</a>, donde los datos se almacenan una BD instanciada en <a href="https://render.com/" target="_blank" rel="noreferrer">Render</a>y a partir de ahi son tratados de acuerdo a los filtros establecidos con la que se muestra la información de los 250 países. EL deploy se realiza en <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a></p>
          <p>
            Este proyecto se creo desde cero en base a la consignas del readme solicitada por Henry y principalmente se trabajan con librerías como React, Redux para el diseño del 
            FronEnd; Express y Sequelize con PostgreSQL para el Backend junto con la DB.
          </p>
          
          <p>Contacto:</p>

          <ul>
            <p>
              <li>
                Email:
                <a href="mailto:jeduardo.roman69@gmail.com">
                  jeduardo.roman69@gmail.com
                </a>
              </li>
            </p>

            <li>
              <p>
                Linkedin
                <a
                  href="https://www.linkedin.com/in/jose-eduardo-roman/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn Logo"
                  />
                </a>
              </p>
            </li>

            <li>
              <p>
                Github
                <a
                  href="https://github.com/jeromanp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="Github Logo"
                  />
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
