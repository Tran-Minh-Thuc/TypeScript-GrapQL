import * as categoryService from "./category.service";


export const categoryResolver = {
    Query: {
        getAllCategories: async (root, args, context) => {
            console.log("[Info] getAllCategories");

            const categories: [Category] = await categoryService.getAllCategories();

            return categories;
        },

        getCategoryById: async (root, args, context) => {
            const id = args.id;
            console.log("[Info] getCategoryById <", id, ">");

            const category: Category = await categoryService.getCategoryById(id);
            return category;
        },

        getCategoryByName: async (root, args, context) => {
            const name = args.name;
            console.log("[Info] getCategoryByName <", name, ">");

            const category: Category = await categoryService.getCategoryByName(name);
            return category;
        },

        getProductsByCategoryName: async (root, args, context) => {
            const category_name: string = args.category_name;
            console.log("[Info] get Products By Category Name <", category_name, ">");
            const products: [Product] = await categoryService.getProductsByCategoryName(category_name);

            return products


        }
    },

    Mutation: {
        createCategory: async (root, args, context) => {

        },

        updateCategory: async (root, args, context) => {

        },

        deleteCategory: async (root, args, context) => {

        }
    }
}