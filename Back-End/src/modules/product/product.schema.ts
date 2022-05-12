import { gql } from "apollo-server"

declare global {
    type Product = {
        _id: String,
        name: String,
        description: String,
        discount: Number,
        price: Number,
        quantity: Number,
        warranty: Number,
        rating: Number,
        rate_count: Number,
        like_count: Number,
        image: String,
        category_id: Category
    }
}

export const productSchema = gql`
    type Product {
        _id: ID!
        name: String
        description: String
        discount: Float
        price: Float
        quantity: Int
        warranty: Int
        rating: Float
        rate_count: Int
        like_count: Int
        image: String
        category_id: Category
    }

    #ROOT TYPE
    type Query {
        getAllProducts: [Product]
        getProductById(id: ID!): Product
    }
`