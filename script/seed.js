/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Product} = require('../server/db/models')

async function seed() {
  await db.sync({
    force: true
  })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      username: 'puppylover369',
      email: 'banspri0@gmail.com',
      isAdmin: true,
      password: '123'
    }),
    User.create({
      username: 'destinisabeach',
      email: 'destinmcmurry@gmail.com',
      isAdmin: false,
      password: '1234'
    }),
    User.create({
      username: 'daisy',
      email: 'daisy@gmail.com',
      isAdmin: true,
      password: '870'
    }),
  ])

  const products = await Promise.all([
    Product.create({
      name: "Rose Quartz",
      price: 4.80,
      properties: "Rose Quartz is calming and nurturing, " +
        "balances emotions, heal emotional wounds, and rejuvenates the skin.",
      category: "stones/crystals",
      picture: "https://images-na.ssl-images-amazon.com/images/I/51JyG-6buhL._SL1000_.jpg"
    }),
    Product.create({
      name: "Shungite",
      price: 9.82,
      properties: "Shungite absorbs negative energies and moves" +
        "them away from the body.  It also purifies water and works to nullify the effects of radiation.",
      category: "stones/crystals",
      picture: "https://images-na.ssl-images-amazon.com/images/I/81Mm5WPsuQL._SL1500_.jpg"
    }),
    Product.create({
      name: "Sodalite Necklace",
      price: 17.00,
      properties: "Beautiful sodalite necklace.  Great for " +
        "intuition, sixth sense, harmony, balance, inspiration, and creativity.",
      category: "jewelry",
      picture: "https://images-na.ssl-images-amazon.com/images/I/71DjbzpaLZL._SL1500_.jpg"
    }),
    Product.create({
      name: "Clary Sage Oil",
      price: 35.55,
      properties: "With uses dating back to the Middle Ages, " +
        "Clary Sage essential oil includes relaxing and soothing properties that help with rejuvenation and calming of " +
        "the skin.",
      category: "oils",
      picture: "https://images-na.ssl-images-amazon.com/images/I/616FV3bDykL._SL1500_.jpg"
    }),
    Product.create({
      name: "Cast Iron Cauldron With Handle",
      price: 8.99,
      properties: "ideal for smudging, " +
        "incense burning, rituals, decoration, or candles.  4\" Diameter Handle to Handle, 2.5\" Inside Diameter",
      category: "magickal-tools",
      picture: "https://images-na.ssl-images-amazon.com/images/I/31y7GCNmu9L.jpg"
    }),
    Product.create({
      name: "Triple Goddess Statue",
      price: 99.95,
      properties: "11 1/4 inch hand-crafted resin statue " +
        "made from artisans in India",
      category: "religious",
      picture: "https://images-na.ssl-images-amazon.com/images/I/61zH%2BD1BixL._SL1000_.jpg"
    }),
    Product.create({
      name: "Pentacle",
      price: 7.30,
      properties: "Pentacle made of natural soapstone.  " +
        "Measures approximately 3 inches in diameter.",
      category: "religious",
      picture: "https://images-na.ssl-images-amazon.com/images/I/713qqf--XXL._SL1491_.jpg"
    }),
    Product.create({
      name: "Tree of Life Pentacle Necklace",
      price: 26.99,
      properties: "",
      category: "jewelry",
      picture: "https://images-na.ssl-images-amazon.com/images/I/61Yx0IUrN3L._UY575_.jpg"
    }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
