import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: Number, // Representing currency in the smallest unit (e.g., paise for INR)
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

// Convert stored integer value to INR for JSON output
TransactionSchema.path('amount').get(function(num) {
  return (num / 100).toFixed(2);
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
