import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import jargonServices from "../services/JargonServices";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([{ jargon: "ex", definition: "example" }]);

  if (!data) return <p>Loading....</p>;

  const onClick = () => {
    jargonServices.getAllJargon().then(getAllSuccess).catch(getAllErr);
  };

  const getAllSuccess = (res) => {
    setData(res.data.jargon);
  };

  const getAllErr = (err) => console.error(err);

  return (
    <div className={styles.container}>
      <Head>
        <title>JargonSimplified</title>
        <meta name="description" content="Jargon Simplified" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jargon Simplified</h1>

        <p className={styles.description}>
          Where you can find meanings for tech jargon and acronyms like{" "}
          <code className={styles.code}>{"'LGTM'"}</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.merriam-webster.com/dictionary/jargon"
            rel="noreferrer"
            target="_blank"
            className={styles.card}
          >
            <h2>{data[0].jargon} &rarr;</h2>
            <p>{data[0]?.definition}</p>
          </a>
        </div>

        <button className={styles.button} type="button" onClick={onClick}>
          Click Me
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/1.png"
              alt="Jacob Dunn JD Logo"
              width={40}
              height={40}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
