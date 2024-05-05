
import styles from './about.module.css'

const About = () => {
  return (
    <>
        <div className={styles.about}>
            <section className={styles.about__section}>
                <h2 className={styles.about__title}>ABOooooUT</h2>
                  <p className={styles.about__desc}> Hello friend! My name is Dejan. Originally from Bosnia, I now call Gothenburg, Sweden, my home.</p>   
                  <p className={styles.about__desc}> Life's a blend of simplicity and complexity for me. Whether I'm trekking through nature, 
                      decoding the stock market, hitting the gym, or diving into the world of Xbox gaming and coding, I find joy in the mix.</p>   
                  <p className={styles.about__desc}> Join me on this journey as I share experiences from the scenic landscapes of Sweden, the ever-evolving world of stocks,
                      and the creative realm of coding. </p>   
                  <p className={styles.about__desc}> It's more than just a story—it's life unfolding. </p>  
            </section>
        </div>
    </>
  )
}

export default About