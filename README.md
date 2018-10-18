# Jeugdhulp Risico Indicator

## Introduction
Jeugdhulp Risico Indicator(JRI) was build for Gemeente Amsterdam to help the social workers get an indication of chance children in the youth services have of being placed into foster care. JRI wil help the social workers to see dangerous factors earlier and more often. JRI works with years of data, collected from youth services in the city of Amsterdam, to create the most accurate calculations.
  
![Screenshot of JRI](/assets/screenshot.png?)  

## Working with youth services
During the production of JRI we continuasly spoke with the social workers working in Amsterdam. They provided us with valuable insights regarding their work and wishes. One of those insights was seeing what the best and worst characteristics are in the childs family. This way the social workers can take those chracteristics and work with the family on those characteristics. I tried to work this insight into the application as best as possible.

## Used technology

* [choo.io](https://choo.io/)  
* [npm](https://www.npmjs.com/)

## New Javascript Concepts (for me)
Here I will list the Javascript concepts that were new for me, that I learned about during this project.

* Frameworks(choo): During this project we learned how to use frameworks and how the handle routing, states, stores and components. This was completely new for me and had a quiet steep learning curve. But after the first week I had a moderatly good understanding of how the choo framework handles the routing, states, stores and components. One thing that was especialy nice was that choo has a lot in common with node.js, which i used previously. Choo works with state and emitters. Where state is used to store and transfer data within your application. Emitters are broadcasters that broadcast a signal across your entire application, wherein a listner `on.emit` listens for that broadcast and reacts to it.
* Javascript classes: I used Javascript classes for the first time. I felt they were really helpful in creating large forms dynamicaly from your data. With the use of classes you can create a lot of html with very little code. I love it!
* Template literals: Using classes in combination with the choo framework to create forms dynamicaly from your data, means you need to inject the state with the correct data into your html. To do this you need template literals.
* Various javasript functions: Some of these functions I knew of others i did not. For each function shown here this was the first tim I actually used them. `map()` creates a new array filled with return value of the function you added to map. `reduce()` Adds up the contents of an array, they must be numbers. `slice` Soft copies the contents of an array from a certain index until a certain index.


## Commands
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies
