import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1 className="title-1">Skills</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2--front">Frontend</h2>

              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                <br />
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2--back">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
