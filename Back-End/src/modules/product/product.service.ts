import { productModel } from "./product.model";

export async function getAllProducts() {
    try {
        const products: Product = await productModel.find().populate('category_id').lean();
        return products;

    } catch (err) {
        console.log("[Error]", err);
    }
}

export async function getProductById(id: String) {
    try {
        const product: Product = await productModel.findById(id).populate('category_id').lean();
        console.log("product", product);
        return product;

    } catch (err) {
        console.log("[Error]", err);

    }
}