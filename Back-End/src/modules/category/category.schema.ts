import { gql } from "apollo-server"


declare global {
    type Category = {
        _id: String,
        name: String,
        image: String,
        products: [Product]
    }
}

export const categorySchema = gql`
    type Category {
        _id: ID!
        name: String
        image: String
        products: [Product]
    }

    #ROOT TYPE
    type Query{
        getAllCategories: [Category]
        getCategoryById(id: ID!): Category
        getCategoryByName(name: String!): Category
        getProductsByCategoryName(category_name: String!): [Product]
    }

    type Mutation {
        createCategory(name: String, image: String): Category
        updateCategory(id: ID!, name: String, image: String): Category
        deleteCategory(id: ID!): Category
    }
`