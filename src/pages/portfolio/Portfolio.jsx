import styles from './portfolio.module.css'
import Api from '../../components/api/api'

const Portfolio = () => {
  const repos = [
    {
      name: 'Dejan-Gaspar_FE23_individuell-examination',
      imageUrl: '/images/individuell_uppgift.png',
    },
    {
      name: 'api-flickr-project',
      imageUrl: '/images/api_flickr_project.png',
    },
    {
      name: 'galaxy_project',
      imageUrl: '/images/Galaxy_img.png',
    },
    {
      name: 'webshop-react',
      imageUrl: '/images/Productpage.png',
    },
    {
      name: 'Portfolio-Site',
      imageUrl: '/images/portfolio.png',
    },


  ];
  
  
  return (
    <div className={styles.container}>
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