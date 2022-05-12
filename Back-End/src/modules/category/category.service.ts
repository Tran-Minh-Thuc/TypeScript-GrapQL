import { categoryModel } from "./category.model";

export async function getAllCategories() {
    try {
        const categories: [Category] = await categoryModel.find().lean();
        return categories;

    }
    catch (err) {
        console.log("[Error]", err);
    }
}

export async function getCategoryById(id: String) {
    try {
        const category: Category = await categoryModel.findById(id).lean();
        return category;

    } catch (err) {
        console.log("[Error]", err);
    }
}

export async function getCategoryByName(name: String) {
    try {
        const category: Category = await categoryModel.findOne({ name }).lean();
        return category;

    } catch (err) {
        console.log("[Error]", err);
    }
}

export async function getProductsByCategoryName(category_name: String) {
    try {
        const category: Category = await categoryModel.findOne({ name: category_name }).populate('products').lean();
        const products: [Product] = await category.products;

        return products;

    } catch (err) {
        console.log("[Error]", err);
    }
}