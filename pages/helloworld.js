import styles from "../styles/Home.module.css";

export default function HelloWorld() {
  return (
    <>
      <div className={styles.container}>
        <button type="button" style={{ padding: 2, margin: 4 }}>
          Click Here
        </button>
        <button type="button" style={{ padding: 2, margin: 4 }}>
          Do Not Click Me
        </button>
      </div>
    </>
  );
}
