import { model, Schema } from "mongoose";

const categorySchema = new Schema(
    {
        name: { type: String },
        image: { type: String },
        products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    },
    { timestamps: true }
)

export const categoryModel = model("Category", categorySchema, "categories");