

index.css has a :root with the main-color which makes it easy to change to main color on the page. It also contains fonts. 

This React component, Api, fetches specific repository data from the GitHub API for the user "gaspardious". It utilizes useState and useEffect hooks for state management and side effects, respectively. The fetched repository data is filtered based on predefined repository names (repoId). For each filtered repository, it renders an <article> element containing a link to the repository's HTML URL, name, and description. The links open in a new tab (target='_blank'). Additionally, it utilizes a CSS module (api.module.css) for styling.

- Darkmode is managed from themetoggler-component. Done with Redux. 

- The mobile menu is located, locally, in the header-component

- Router is setup in the rounter.jsx. 

- The site is built with css modules. 

- Props is being used in API.jsx and portfolio.jsx. We use an array with objects in portfolio to get specifik repos from api.jsx with the help of props. 