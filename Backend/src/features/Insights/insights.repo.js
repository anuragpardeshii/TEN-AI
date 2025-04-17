import { Insight } from "./insights.schema.js";

export const createInsight = async (data) => {
  return await Insight.create(data);
};

export const getAllInsights = async () => {
  return await Insight.find().sort({ _id: -1 });
};
export const updateInsightById = async (id, data) => {
  return await Insight.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};
export const deleteInsightById = async (id) => {
  return await Insight.findByIdAndDelete(id);
};
