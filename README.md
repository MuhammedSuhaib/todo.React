# About this Project
It is a basic React todo app the does nothing except 
- Taking Input
- Add that to the Ram using `useState`
- map those Todo items below the input area
- completed status using marked checkbox
- delete that todo

# Learnings from this Project

- This was my first React project 
    (This is not  even a project, just a First Hands on `React` After alot of `Next.js` Projects). 

- `useState` data lives **only in React’s memory (inside the component)**.   
When you refresh the page, React reloads → memory resets → all `useState` values reset.

So:

* not in localStorage
* not in sessionStorage
* not in cookies
* only in React component memory, temporary RAM.
