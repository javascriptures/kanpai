# Kanpai Cocktail Directory

Kanpai is a React-based application that pulls data from The Cocktail DB API (https://www.thecocktaildb.com/api.php). Using the search bar, users can look up cocktail recipes by ingredient or drink name and view the recipe by clicking on the drink of their choosing. This project was something I felt there was a need for because I often find myself wanting to make fancy drinks or cocktails but having no idea how to make drinks from my very limited ingredients.

## Setup

### Webpage Setup

Find the Kanpai site here: https://kanpaiproject.herokuapp.com/

Open the page, search for your favorite drink, and voila!

### Github Setup

Fork this directory to your own account. "git clone" it into the directory of your choice. "cd" into your new Kanpai directory. Run "npm run start" and watch the project come to life in your browser!

## Technologies Used

### React Hooks
![Screen Shot 2020-01-30 at 7 37 51 AM](https://user-images.githubusercontent.com/57779829/73464262-7e534180-4333-11ea-94db-17a19e731a8e.png)

Kanpai utilizes React Hooks for state management throughout the components. I find Hooks to be the simplest way to manage the state in an app and it worked very seamlessly for my purposes in this project. 

### API Fetching
![Screen Shot 2020-01-30 at 7 42 13 AM](https://user-images.githubusercontent.com/57779829/73464624-12250d80-4334-11ea-8a00-fb30508ce01f.png)
![Screen Shot 2020-01-30 at 7 45 34 AM](https://user-images.githubusercontent.com/57779829/73464950-82339380-4334-11ea-8971-3640c192d8e9.png)

As mentioned earlier, this project fetches data from TheCocktailDB API. TheCocktailDB is an open-source cocktail/alcoholic drink open-source API. It does not use keys when used for educational and personal use. I found this API extremely difficult to work with, especially when trying to list ingredients and measurements for the recipes. I had to borrow a code snippet from Jennifer Meade to even be able to pull an ingredient and measurment list for each recipe. I would not recommend nor use this API in the future, but, nontheless, it gave me the data I needed and served its purpose to the best extent that I could manage.

### React Router

![Screen Shot 2020-01-30 at 7 42 13 AM](https://user-images.githubusercontent.com/57779829/73465524-5bc22800-4335-11ea-9a46-c63154bdfa7d.png)

Kanpai uses React Routers for navigation to the home page, search results, and individual recipe pages. I found routing pages to have a bit of a learning curve in this project and it cost me quite a bit of time midway through but they are endlessly helpful for seamless app navigation. 


