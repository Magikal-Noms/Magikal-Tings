const db = require('./server/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234', isAdmin: true},
  {name: 'Barack Obama', email: 'admin@example.com', password: '1234', isAdmin: true},
  {name: 'Anne', email: 'anne@gmail.com', password: '1234', isAdmin: true},
  {name: 'Chloe', email: 'chloe@gmail.com', password: 'abcd', isAdmin: true},
  {name: 'Aria', email: 'aria@gmail.com', password: 'aria', isAdmin: true},
  {name: 'Susan', email: 'susan@gmail.com', password: 'susan', isAdmin: true},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {name: 'Rose Quartz', properties: "asfdsf", category: "stone/crystal", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 20},
  {name: "Shungite", properties: "Bafsdfdsafd", category: "stone/crystal", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 3},
  {name: "adfasdff", properties: "adfsafsdafd", category: "dog", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "adsfadsffa", properties: "dsafsdfsdfsaf", category: "goat", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "adfsfadfsaf", properties: "adsfsdafdsfsdafda", category: "giraffe", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "asdfadsfsdf", properties: "adfsadfdafdsa", category: "mouse", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "afsadfdfasf", properties: "sdfsdafasdfadsf", category: "pig", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "adsfasdfdafa", properties: "sdafdsafsdaf", category: "monkey", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "asdfsafsdafs", properties: "dsafsdfdsafdafda", category: "turtle", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "dsafsdafdfa", properties: "dasfsdaff", category: "pig", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "adfadfsadfsa", properties: "dasfdsafdsafsdaf", category: "cat", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "afdadsfaf", properties: "afsdafdsafsdaf", category: "elephant", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "adsfasfsdafsa", properties: "asdfsdafsfafd", category: "donkey", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "asdfadsf", properties: "sdafadsfdfadfsa", category: "bunny", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "sadfdsafadf", properties: "fdsafsafsdafdsaf", category: "dog", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "adfsafsdafsf", properties: "Sdfdsafafdfasf", category: "goat", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "adsfsfddafdsf", properties: "fadsfasfdaf", category: "dog", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "sdafsdffdsafsdf", properties: "dsafdsafdsafsdaf", category: "bunny", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "sdafsdafdsafsdf", properties: "adfsafsdafdsaf", category: "monkey", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "dsafsdafsdf", properties: "adfssdafdsfs", category: "cat", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13},
  {name: "sadfdsafsdfdsf", properties: "dasfdsfdafdfsf", category: "elephant", picture: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjjr9ih27_aAhWNNd8KHeQjCsQQjRx6BAgAEAU&url=https%3A%2F%2Fwww.energymuse.com%2Frose-quartz-stone.html&psig=AOvVaw3R6MlliaNS5qG7R9VfXsP9&ust=1523999651929823", price: 13}

], products => db.model('products').create(products))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
