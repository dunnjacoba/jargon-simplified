import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import jargonServices from "../services/JargonServices";
import { useState } from "react";
import JargonCards from "../component/jargoncard";
import SearchBar from "../component/searchbar";

export default function Home() {
  const [data, setData] = useState([
    { id: 0, jargon: "ex", definition: "example" },
  ]);
  const [searchResult, setSearchResult] = useState([
    {
      id: 0,
      jargon: "ex",
      definition: "example",
    },
  ]);

  if (!data) return <p>Loading....</p>;

  false && setSearchResult;
  const onClick = () => {
    jargonServices.getAllJargon().then(getAllSuccess).catch(getAllErr);
  };

  const getAllSuccess = (res) => {
    setData(res.data.jargon);
  };

  const getAllErr = (err) => console.error(err);

  const mapData = (jargon) => {
    return <JargonCards key={jargon.id} data={jargon} />;
  };

  const displayInfo = () => {
    if (data[0].id == 0) {
      return searchResult.map(mapData);
    } else {
      return data.map(mapData);
    }
  };

  const SearchClicked = () => {
    let searchQuery = document.getElementsByName("search-input")[0].value;
    jargonServices.getByJargon(searchQuery).then(getByJargonSucc).catch();
  };

  const getByJargonSucc = (res) => {
    setSearchResult(res.data.jargon);
  };

  const getByJargonErr = (err) => {
    console.error(err);
  };

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
        <SearchBar onClick={SearchClicked} />
        {displayInfo()}

        <button className={styles.button} type="button" onClick={onClick}>
          View All
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
