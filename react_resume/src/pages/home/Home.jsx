
import styles from './home.module.css'



const Home = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.desc}>
        <h1 className={styles.title}>FRONTEND DEVELOPER</h1>
        <p className={styles.text}>Hi, I'm Dejan Gašpar. A passionate Front-End Developer based in Gothenburg, Sweden. 📍</p>
      </section>

      <img className={styles.hero_img} src="/public/images/dejan.png" alt="" />

    </div>
  )
}

export default Home