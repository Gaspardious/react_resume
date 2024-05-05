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
    <section>
      <h2>REPOS</h2>
      {data.filter((repo) => repos.some((r) => r.name === repo.name))
        .map((repo) => (
          <article key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <button className={styles.button} onClick={() => window.open(repo.html_url, '_blank')}>
              <h4>SHOW REPO</h4>
            </button>
            {repos.map((r) => r.name === repo.name && <img src={r.imageUrl} alt={`${repo.name} Image`} className={styles.repo_img} />)}
          </article>
        ))}
    </section>
  );
};
     
export default Api