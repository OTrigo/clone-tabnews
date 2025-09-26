import styles from "./style.module.css";

const Home = () => {
  return (
    <div className={styles.html}>
      <div className={styles.home}>
        <div className={styles.app}>
          <h1 className={styles.title}>
            <a href="https://otrigo.github.io/" className={styles.link}>
              {"{PinkWheat}"}
            </a>
          </h1>
          <h2 className={styles.subtitle}>
            Em breve, um lugarzinho melhor de internet será acessível por você!
          </h2>
          <h3 className={styles.tabnews}>
            Conheça também o{" "}
            <span className={styles.tabnewsText}>
              <a href="https://www.tabnews.com.br/" className={styles.link}>
                Tabnews
              </a>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
