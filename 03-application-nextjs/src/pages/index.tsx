import Head from "next/head";
import styles from "../styles/global.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <h1 className={styles.title}>Hello world!</h1>
    </>
  );
}
