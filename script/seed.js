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
const db = require("../server/db");
const {
  User,
  Product,
  Category,
  Order,
  LineItem
} = require("../server/db/models");

async function seed() {
  await db.sync({
    force: true
  });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({
      username: "puppylover369",
      email: "banspri0@gmail.com",
      isAdmin: true,
      password: "123",
      shippingAddress: "destinisabeach",
      billingAddress: "destinmcmurry@gmail.com"
    }),
    User.create({
      username: "destinisabeach",
      email: "destinmcmurry@gmail.com",
      isAdmin: false,
      password: "1234",
      shippingAddress: "destinisabeach",
      billingAddress: "destinmcmurry@gmail.com"
    }),
    User.create({
      username: "daisy",
      email: "daisy@gmail.com",
      isAdmin: true,
      password: "870",
      shippingAddress: "destinisabeach",
      billingAddress: "destinmcmurry@gmail.com"
    })
  ]);

  const orders = await Promise.all([
    Order.create({
            shippingAddress: "destinisabeach",
      billingAddress: "destinmcmurry@gmail.com",
      status: "complete",
      userId: 1
    }),
    Order.create({
            shippingAddress: "destinisabeach",
      billingAddress: "destinmcmurry@gmail.com",
      status: "pending",
      userId: 2
    }),
    Order.create({
            shippingAddress: "destinisabeach",
      billingAddress: "destinmcmurry@gmail.com",
      status: "complete",
      userId: 1
    }),
    Order.create({
            shippingAddress: "destinisabeach",
      billingAddress: "destinmcmurry@gmail.com",
      status: "complete",
      userId: 3
    }),
    Order.create({
            shippingAddress: "destinisabeach",
      billingAddress: "destinmcmurry@gmail.com",
      status: "complete",
      userId: 1
    })
  ]);

  const categories = await Promise.all([
    Category.create({
      id: 1,
      name: "crystals"
    }),
    Category.create({
      id: 2,
      name: "jewelry"
    }),
    Category.create({
      id: 3,
      name: "oils"
    }),
    Category.create({
      id: 4,
      name: "magickal-tools"
    }),
    Category.create({
      id: 5,
      name: "religious"
    })
  ]);

  const products = await Promise.all([
    Product.create({
      name: "Rose Quartz",
      price: 4.8,
      properties:
        "Rose Quartz is calming and nurturing, " +
        "balances emotions, heal emotional wounds, and rejuvenates the skin.",
      categoryId: 1,
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/51JyG-6buhL._SL1000_.jpg"
    }),
    Product.create({
      name: "Shungite",
      price: 9.82,
      categoryId: 1,
      properties:
        "Shungite absorbs negative energies and moves" +
        "them away from the body.  It also purifies water and works to nullify the effects of radiation.",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/81Mm5WPsuQL._SL1500_.jpg"
    }),
    Product.create({
      name: "Sodalite Necklace",
      categoryId: 2,
      price: 17.0,
      properties:
        "Beautiful sodalite necklace.  Great for " +
        "intuition, sixth sense, harmony, balance, inspiration, and creativity.",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/71DjbzpaLZL._SL1500_.jpg"
    }),
    Product.create({
      name: "Clary Sage Oil",
      price: 35.55,
      categoryId: 3,
      properties:
        "With uses dating back to the Middle Ages, " +
        "Clary Sage essential oil includes relaxing and soothing properties that help with rejuvenation and calming of " +
        "the skin.",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/616FV3bDykL._SL1500_.jpg"
    }),
    Product.create({
      name: "Cast Iron Cauldron With Handle",
      categoryId: 4,
      price: 8.99,
      properties:
        "ideal for smudging, " +
        'incense burning, rituals, decoration, or candles.  4" Diameter Handle to Handle, 2.5" Inside Diameter',
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/31y7GCNmu9L.jpg"
    }),
    Product.create({
      name: "Triple Goddess Statue",
      price: 99.95,
      categoryId: 5,
      properties:
        "11 1/4 inch hand-crafted resin statue " +
        "made from artisans in India",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/61zH%2BD1BixL._SL1000_.jpg"
    }),
    Product.create({
      name: "Pentacle",
      categoryId: 2,
      price: 7.3,
      properties:
        "Pentacle made of natural soapstone.  " +
        "Measures approximately 3 inches in diameter.",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/713qqf--XXL._SL1491_.jpg"
    }),
    Product.create({
      name: "Tree of Life Pentacle Necklace",
      categoryId: 5,
      price: 26.99,
      properties: "",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/61Yx0IUrN3L._UY575_.jpg"
    })
  ]);

  const lineItems = await Promise.all([
    LineItem.create({
      quantity: 2,
      productPrice: 100,
      productId: 1,
      orderId: 2
    }),
    LineItem.create({
      quantity: 1,
      productPrice: 100,
      productId: 2,
      orderId: 5
    }),
    LineItem.create({
      quantity: 2,
      productPrice: 100,
      productId: 7,
      orderId: 3
    }),
    LineItem.create({
      quantity: 2,
      productPrice: 100,
      productId: 4,
      orderId: 2
    }),
    LineItem.create({
      quantity: 2,
      productPrice: 100,
      productId: 8,
      orderId: 4
    })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${products.length} products`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log("closing db connection");
    db.close();
    console.log("db connection closed");
  });

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log("seeding...");
