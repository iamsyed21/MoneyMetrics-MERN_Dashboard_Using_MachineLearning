import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: {
      type: Number, // Representing currency in the smallest unit (e.g., paise for INR)
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    expense: {
      type: Number, // Representing currency in the smallest unit
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

// Convert stored integer value to INR for JSON output
ProductSchema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

ProductSchema.path('expense').get(function(num) {
  return (num / 100).toFixed(2);
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
