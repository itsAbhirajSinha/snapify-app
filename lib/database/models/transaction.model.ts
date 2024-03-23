// A taransaction is used as an additional reference between the user and image generation
// in order to keep track of the credits
// so each is a stripe conversion that we make to turn credits into images

import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
    createdAt:{
        type:Date,
        default: Date.now,
    },
    stripeId: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    plan: {
      type: String,
    },
    credits: {
      type: Number,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  });
    
const Transaction = models?.Transaction || model("Transaction",TransactionSchema);

export default Transaction;