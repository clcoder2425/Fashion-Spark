const db = require('./connection');
const { User, Product, Order, Cart , Category} = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('Category', 'categories');
    await cleanDB('Product', 'products');
    await cleanDB('User', 'users');
    await cleanDB('Order', 'orders');
    await cleanDB('Cart', 'carts');

    const categories = await Category.insertMany([
        {
            id: 1,
            img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "SHIRT STYLE!",
            cat: 'Women'

        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "LOUNGEWEAR LOVE",
            cat: "coats"
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "LIGHT JACKETS",
            cat: "jeans"
        },
    ]);

    console.log('categories seeded');

    const products = await Product.insertMany([
        {
            id: 1,
            img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
            desc: "Mens Jake Guitar Vintage Crusher Tee",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
            desc: "Angela Natural Tee",
            category: categories[0]._id,
            size: "M",
            color: "Blue",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 3,
            img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
            desc: "Prada T-Shirt",
            category: categories[0]._id,
            size: "S",
            color: "BWhite",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 4,
            img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
            desc: "Burdastyle T-Shirt",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 5,
            img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
            desc: "Noissue x Creatsy Tote Bag Mockup Bundle",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 6,
            img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
            desc: "Rocket Vintage Chill Cap",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 7,
            img: "https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
            desc: "Arrow Jacket Forest",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 8,
            img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
            desc: "Women Jacket",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 9,
            img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
            desc: "Mens Jake Guitar Vintage Crusher Tee",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 10,
            img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
            desc: "Mens Jake Guitar Vintage Crusher Tee",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 11,
            img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
            desc: "Mens Jake Guitar Vintage Crusher Tee",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
        {
            id: 13,
            img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
            desc: "Mens Jake Guitar Vintage Crusher Tee",
            category: categories[0]._id,
            size: "S",
            color: "Black",
            price: 28.00,
            inStock: 10,
        },
    ]);

    console.log('products seeded');

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id],
            },
        ],
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345',
    });

    console.log('users seeded');

    process.exit();
});
