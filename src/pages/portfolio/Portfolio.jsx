

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

      <section className={styles.section_api}>
        <a href="https://github.com/Gaspardious" target="_blank">
        <img src="../../../public/images/github-142-svgrepo-com.svg" alt="github" className={styles.github} />
        </a>
        
        <Api repos={repos} /> 

      </section>


      
    </div>
  )
}

export default Portfolio