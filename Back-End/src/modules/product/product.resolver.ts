import * as productService from './product.service';

export const productResolver = {


    Query: {
        getAllProducts: async (root, args, context) => {
            console.log('[Info] getAllProducts');
            const products: Product = await productService.getAllProducts();
            return products;
        },

        getProductById: async (root, args, context) => {
            console.log('[Info] getProductById');
            const product: Product = await productService.getProductById(args.id);

            return product;
        }
    }

}
