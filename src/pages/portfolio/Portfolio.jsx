import styles from './portfolio.module.css'
import Api from '../../components/api/api'

const Portfolio = () => {
  const repos = [
    {
      name: 'api-flickr-project',
      imageUrl: '/images/Galaxy_img2.png',
    },
    {
      name: 'galaxy_project',
      imageUrl: '/images/Galaxy_img2.png',
    },
    {
      name: 'Basketball_Scoreboard',
      imageUrl: '/images/HeroPage.png',
    },
    {
      name: 'Darkmode-and-CSS-flex',
      imageUrl: '/images/HeroPage.png',
    },

  ];
  
  
  return (
    <div>
        <div className={styles.portfolio}>
            <section className={styles.section_github}>
              <h2 className={styles.title}>REPOS</h2>
              <a href="https://github.com/Gaspardious" target="_blank">
              <img src="images/github-mark.png" alt="github" className={styles.github} />
              </a>
            </section>
          </div>
        <Api repos={repos} /> 
    </div>
  )
}

export default Portfolio