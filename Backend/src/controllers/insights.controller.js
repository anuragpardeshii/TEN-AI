import {
  createInsight,
  deleteInsightById,
  getAllInsights,
  updateInsightById
} from "../Repository/insights.repo.js";
import ApplicationError from "../utils/ApplicationError.js";

export const addInsight = async (req, res, next) => {
  try {
    const { category, title, description, image } = req.body;

    if (!category || !title || !description || !image) {
      return next(
        new ApplicationError(
          "All fields (category, title, description, image) are required",
          400
        )
      );
    }

    if (typeof image !== "string" || !image.startsWith("http")) {
      return next(new ApplicationError("Image must be a valid URL", 400));
    }

    const insight = await createInsight({
      category,
      title,
      description,
      image
    });

    res.status(201).json({ success: true, data: insight });
  } catch (error) {
    next(error);
  }
};

export const fetchInsights = async (req, res, next) => {
  try {
    const insights = await getAllInsights();
    res.status(200).json({
      success: true,
      data: insights
    });
  } catch (error) {
    next(error);
  }
};

export const updateInsight = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { category, title, description, image } = req.body;

    const updateData = {
      category,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }),
      title,
      description,
      image
    };

    const updatedInsight = await updateInsightById(id, updateData);

    if (!updatedInsight) {
      return next(new ApplicationError("Insight not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Insight updated successfully",
      data: updatedInsight
    });
  } catch (error) {
    next(error);
  }
};

export const deleteInsight = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedInsight = await deleteInsightById(id);

    if (!deletedInsight) {
      return next(
        new ApplicationError("Insight not found with the given ID", 404)
      );
    }

    res.status(200).json({
      success: true,
      message: "Insight deleted successfully",
      data: deletedInsight
    });
  } catch (error) {
    next(error);
  }
};
