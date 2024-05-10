import styles from './footer.module.css'



const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/Gaspardious" target="_blank">
          <img src="images/github-mark.png" alt="github" className={styles.social} />
        </a>
        <a href="https://www.linkedin.com/in/dejan-gaspar-23800059/" target="_blank">
          <img src="images/icons8-linkedin.svg" alt="linkedin" className={styles.social} />
        </a>
        <a href="https://www.instagram.com/dgaspar88/" target="_blank">
          <img src="images/instagram-svgrepo-com.svg" alt="instagram" className={styles.social} />
        </a>
      </div>
      <div>
        <p className={styles.paragraph}> © Made by Dejan Gaspar - 2024</p>
        </div>
    </footer>
</>
  )
}

export default Footer