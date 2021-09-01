const { prompt } = require('inquirer')
const { get } = require('axios')
const {
  blue,
  green,
  yellow
} = require('chalk')

prompt({
  type: 'input',
  name: 'title',
  message: 'What movie would you like to look up?'
})
  .then(({ title }) => get(`http://www.omdbapi.com/?apikey=trilogy&t=${title}`))
  .then(({ data: movie }) => {
    console.log(blue(movie.Title))
    console.log(blue('------------------'))
    console.log(green(`Released on ${movie.Released}`))
    console.log(green(`Directed by ${movie.Director}`))
    console.log(blue('------------------'))
    console.log(yellow(movie.Plot))
  })
  .catch(err => console.log(err))

// const dog = {
//   name: 'Beef',
//   age: 2,
//   breed: 'Chihuahua',
//   puppy: {
//     name: 'Chicken',
//     age: 0.5,
//     breed: 'Chihuahua'
//   }
// }

// const { puppy: { name: puppyName }, breed: rhubarb } = dog

// console.log(puppyName, rhubarb)
