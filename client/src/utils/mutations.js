import {gql} from '@apollo/client';

export const ADD_ORDER = gql`
    mutation addOrder($products: [ID]!) {
        addOrder(products: $products) {
        purchaseDate
        products {
            _id
            name
            description
            price
        }
        }
    }
    `;
export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        token
        user {
            _id
            firstName
            lastName
            }
        }
    }
    `;

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
        token
        user {
            _id
            firstName
            lastName
        }
        }
    }
    `;
export const UPDATE_USER = gql`
    mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String) {
        updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        _id
        firstName
        lastName
        email
        }
    }
    `;
export const DELETE_USER = gql`
    mutation deleteUser {
        deleteUser
    }
    `;
export const ADD_PRODUCT = gql`
    mutation addProduct($name: String!, $description: String!, $image: String!, $price: Float!, $quantity: Int!, $category: ID!) {
        addProduct(name: $name, description: $description, image: $image, price: $price, quantity: $quantity, category: $category) {
        _id
        name
        description
        price
        quantity
        category {
            _id
            name
        }
        }
    }
    `;