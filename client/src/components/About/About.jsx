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
            Proyecto Final Individual para aprobar el primer módulo de Labs del
            Bootcamp de Henry.
          </p>
          <p>
            Este pequeño proyecto cuenta con librerías como React, Redux para el
            FronEnd; Express y Sequelize con Postgres para el BackEnd
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
