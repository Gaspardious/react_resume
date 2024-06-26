To run this React Vite project with Redux, follow these steps:

    Clone the Repository: Start by cloning the project from GitHub to your local machine.

    Install Dependencies: After navigating to the project directory, install all necessary dependencies: router and Vite. 

    Run the Application: Finally, start the development server to run the application, which will typically be accessible via your web browser.

Make sure you have Node.js installed

index.css has a :root with the main-color which makes it easy to change the main colors on the page. It also contains fonts. 

The Api-componnent fetches specific repository data from the GitHub API for the user "gaspardious". It utilizes useState and useEffect hooks for state management and side effects, respectively. The fetched repository data is filtered based on predefined repository names (repoId). For each filtered repository, it renders an <article> element containing a link to the repository's HTML URL, name, and description. The links open in a new tab (target='_blank'). Additionally, it utilizes a CSS module (api.module.css) for styling.

- Darkmode (or more like green-mode) is managed from themetoggler-component. Built with REDUX.

- The mobile menu is located, locally, in the header-component.

- Router is setup in the rounter.jsx. 

- The site is built with css modules. 

- Props is being used in API.jsx and portfolio.jsx. We use an array with objects in portfolio to get specific repos from api.jsx with the help of props. We also pair specific images to all repos.

- The site also has a form in Contact which uses useContext. The form using useContext means you could extend the form's functionality (like adding new fields or validation rules) or reuse the form in different parts of the website with minimal changes to the components themselves. This is because all form-related data and functions are accessed through the context and not tied to the component itself.

