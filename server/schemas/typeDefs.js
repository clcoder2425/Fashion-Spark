const typeDefs =`
   type Category {
        _id: ID
        cat: String
        id: Int
        img: String
        title: String
    }
    type Product {
        _id: ID
        title: String
        desc: String
        img: String
        quantity: Int
        categories: [Category]
        size: String
        color: String
        price: Float
    }
    type Order{
        _id: ID
        userId: String
        products: [Product]
        amount: Float
        address: String
        status: String
        createdAt: String
    }
    type User{
        _id: ID
        username: String
        email: String
        password: String
        role: String
    }
    type Checkout {
        session: ID
    }
    type Auth{
        token: ID
        user: User
    }
    type Query {
        categories: [Category]
        products:(category: ID, cat:String): [Product]
        product: (_id: ID!):Product
        user: User
        orders: (_id: ID!):Order
        checkout(products: [ID]!): Checkout
        
    }

    type Mutation {
        createCategory(cat: String, id: Int, img: String, title: String): Category
        updateCategory(_id: ID!, cat: String, id: Int, img: String, title: String): Category
        deleteCategory(_id: ID!): Category
        createProduct(title: String, desc: String, img: String, quantity: Int, categories: [ID], size: String, color: String, price: Float): Product
        updateProduct(_id: ID!, title: String, desc: String, img: String, quantity: Int, categories: [ID], size: String, color: String, price: Float): Product
        deleteProduct(_id: ID!): Product
        register(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUser(_id: ID!, username: String, email: String, password: String): User
        deleteUser(_id: ID!): User
        createOrder(userId: String!, products: [ID]!, amount: Float, address: String, status: String): Order
        updateOrder(_id: ID!, userId: String, products: [ID], amount: Float, address: String, status: String): Order
        deleteOrder(_id: ID!): Order
    }
`;