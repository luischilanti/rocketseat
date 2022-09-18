import Head from "next/head"
import styles from "./styles.module.scss"

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating title lorem ipsum</strong>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating title lorem ipsum</strong>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating title lorem ipsum</strong>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating title lorem ipsum</strong>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
