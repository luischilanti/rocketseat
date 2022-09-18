import { GetStaticProps } from "next"
import Head from "next/head"
import { getPrismicClient } from "../../services/prismic"
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.getByType("post", {
    lang: "pt-BR",
  })

  return {
    props: {},
  }
}
