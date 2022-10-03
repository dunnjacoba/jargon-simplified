import styles from "../styles/Home.module.css";
export default function JargonCards(props) {
  return (
    <div className={styles.grid}>
      <a
        href="https://www.merriam-webster.com/dictionary/jargon"
        rel="noreferrer"
        target="_blank"
        className={styles.card}
      >
        <h2>{props.data.jargon} &rarr;</h2>
        <p>{props.data.definition}</p>
      </a>
    </div>
  );
}
