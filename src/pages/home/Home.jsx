
import styles from './home.module.css'



const Home = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.desc}>
        <h1 className={styles.title}>FRONTEND DEVELOPER</h1>
        <p className={styles.text}>Hi, I'm Dejan Gašpar. A passionate Front-End Developer based in Gothenburg, Sweden. 📍</p>
          <div className={styles.tech}>  
                      <h2>TECH STACK</h2>
                      <h2>  | </h2>
                      <ul className={styles.techlist}>
                        <img src="https://skillicons.dev/icons?i=html,css,js,react,sass,figma,github" alt="skill-icon" className={styles.techstack} />
                      </ul>
           
            </div>
            <a href="https://github.com/Gaspardious" target="_blank">
                          <img src="../../../public/images/github-142-svgrepo-com.svg" alt="github" className={styles.github} />
                        </a>
        
      </section>


      <img className={styles.hero_img} src="/public/images/Dejan.png" alt="" />

    </div>
  )
}

export default Home