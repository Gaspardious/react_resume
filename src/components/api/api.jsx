import { useState, useEffect } from 'react'
import styles from './api.module.css'

const Api = ({repos}) => {
const url = 'https://api.github.com/users/gaspardious/repos'
const [data, setData] = useState([])

useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.div}>
      {data.filter((repo) => repos.some((r) => r.name === repo.name))
        .map((repo) => (
          <section className={styles.repo_section}>
            <article className={styles.repo_card} key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <button className={styles.button} onClick={() => window.open(repo.html_url, '_blank')}>
                SHOW REPO
              </button>
              {repos.map((r) => r.name === repo.name && <img src={r.imageUrl} alt={`${repo.name} Image`} className={styles.repo_img} />)}
            </article>
          </section>
        ))}
    </div>
  );
};
     
export default Api