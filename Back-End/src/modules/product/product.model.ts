import { model, Schema } from "mongoose";

const productSchema = new Schema(
    {
        name: { type: String },
        description: { style: String },
        discount: { type: Number },
        price: { type: Number },
        quantity: { type: Number },
        warranty: { type: Number },
        rating: { type: Number },
        rate_count: { type: Number },
        like_count: { type: Number },
        image: { type: String },
        category_id: { type: Schema.Types.ObjectId, ref: "Category" },

    },
    { timestamps: true }
)

export const productModel = model("Product", productSchema, "products");
