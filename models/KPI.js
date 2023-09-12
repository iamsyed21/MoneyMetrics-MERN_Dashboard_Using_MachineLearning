import mongoose from "mongoose";

const Schema = mongoose.Schema;

const currencyValidator = {
  validator: Number.isInteger,
  message: '{VALUE} is not an integer value representing cents'
};

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
    expenses: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
    expenses: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
    operationalExpenses: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
    nonOperationalExpenses: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
    totalRevenue: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
    totalExpenses: {
      type: Number,
      required: true,
      validate: currencyValidator
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Number,
        validate: currencyValidator
      }
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { 
    timestamps: true, 
    toJSON: { 
      getters: true, 
      virtuals: true 
    } 
  }
);

KPISchema.virtual('totalProfitDisplay').get(function() {
  return (this.totalProfit / 100).toFixed(2);
});
KPISchema.virtual('totalRevenueDisplay').get(function() {
  return (this.totalRevenue / 100).toFixed(2);
});
KPISchema.virtual('totalExpensesDisplay').get(function() {
  return (this.totalExpenses / 100).toFixed(2);
});
// Add similar virtual getters for other currency fields if needed.

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
