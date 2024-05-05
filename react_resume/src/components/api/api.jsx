import { useState, useEffect } from 'react'
import styles from './api.module.css'


const Api = () => {
const url = 'https://api.github.com/users/gaspardious/repos'
const [data, setData] = useState([])
const repoId = ['api-flickr-project', 'galaxy_project' ]


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
        <h2>My GitHub</h2> 
            {data.filter(repo => repoId.includes(repo.name)).map((repo) => (
                <article key={repo.id}>
                <a href={repo.html_url} target='_blank'>
                    <h3>{repo.name}</h3>
                </a>
                    <p>{repo.description}</p>
                </article>
            ))}
    </section>
  );
};
     
export default Api