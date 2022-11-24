# User Profile

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the User profile and hover over the individual profile and see trash basket turned red.
- Delete user profile with click on delete (trash icon) icon.

### Screenshot

![](/screenshot.png)

### Links

- Solution URL: [Github](https://github.com/Naveed89-tech/user_profile)
- Live Site URL: [Expense-Tracker](https://expenses-tracker-application.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

During developing this little React Js project, first challenge was to create a dynamic list.
So to solve that problem,i created a dummy data file. To use that data in file, first i import that file in User component.To create a list of user, i use javascript 'map' function, in which i loop all data and display that data on screen successfully.
After displaying data, second challenge was to use a function on trash button to delete user profile.
So i use handler function to encounter that challenge. That part fun and a new method to solve that types of problems.
The code below was the most tricky one for me.

```js
const [profileData, setProfileData] = useState(userData);
const removeProfileHandler = (id) => {
  const savedUserData = profileData.filter((data) => data.id !== id);
  setProfileData(savedUserData);
};
```

### Useful resources

- [Reactjs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) - The official documentation of Reactjs really help to grasp some concepts.

## Author

- Website - [Naveed](https://naveedtechs.netlify.app/)
- Frontend Mentor - [@@Naveed89-tech](https://www.frontendmentor.io/profile/Naveed89-tech)
- Twitter - [@Naveed_Tech_T](https://twitter.com/Naveed_Tech_T)
