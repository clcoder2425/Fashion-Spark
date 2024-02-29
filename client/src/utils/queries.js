import {gql} from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query {
        products {
        id
        title
        description
        price
        image
        category
        }
    }
    `;
export const QUERY_CATEGORIES = gql`
    query {
        categories {
        id
        img
        title
        cat
        }
        
        }
    
    `;
export const QUERY_CHECKOUT = gql`
    query getCheckout($products: [ID]!) {
        checkout(products: $products) {
        session
        }
    }
    `;
export const QUERY_USER = gql`
    query {
        user {
        firstName
        lastName
        orders {
            _id
            purchaseDate
            products {
            _id
            name
            description
            price
            }
        }
        }
    }
    `;