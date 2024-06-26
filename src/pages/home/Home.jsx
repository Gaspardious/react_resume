
import styles from './home.module.css'



const Home = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.desc}>
        <h1 className={styles.title}>FRONTEND DEVELOPER</h1>
        <p className={styles.text}>Hi, I'm Dejan Gašpar. A passionate Front-End Developer based in Gothenburg, Sweden. 📍</p>
          <div className={styles.tech}>  
              <h2 className={styles.tech_stack}>TECH STACK</h2>
              <h2> | </h2>
                <ul className={styles.techlist}>
                  <img src="https://skillicons.dev/icons?i=html,css,js,react,sass,figma,github" alt="skill-icon" className={styles.techstack} />
                </ul>
            </div>
              <a href="https://github.com/Gaspardious" target="_blank">
              <img src="images/github-mark.png" alt="github" className={styles.github} />
              </a>
      </section>

        <figure className={styles.hero_figure}>
          <img className={styles.hero_img} src="images/Dejan.png" alt="Picture of Dejan - the dude who built this site..." />
          <figcaption>Yours truly, in Sarek (Sweden) during the summer of 2021...</figcaption>
        </figure>

    </div>
  )
}

export default Home