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
          <p>La información utilizada en este proyecto se puede encontrar en el sitio web:<a href="https://restcountries.com/v3/all" target="_blank" rel="noreferrer">https://restcountries.com/v3/all</a>, donde los datos fueron filtrados, extraídos y manejados desde una BD local con la que se muestra la información de los 250 países.</p>
          <p>
            Este proyecto se creo desde cero en base a la consignas del readme solicitada por Henry y principalmente se trabajan con librerías como React, Redux para el diseño del 
            FronEed; Express y Sequelize con Postgres para el Backend junto con la DB.
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
