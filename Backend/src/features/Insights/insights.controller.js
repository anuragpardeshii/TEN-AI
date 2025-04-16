import {
  createInsight,
  deleteInsightById,
  getAllInsights,
  updateInsightById
} from "./insights.repo.js";

export const addInsight = async (req, res) => {
  try {
    const { category, title, description, image } = req.body;

    if (!category || !title || !description || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields (category, title, description, image) are required"
      });
    }

    if (typeof image !== "string" || !image.startsWith("http")) {
      return res.status(400).json({
        success: false,
        message: "Image must be a valid URL"
      });
    }

    const insight = await createInsight({
      category,
      title,
      description,
      image
      //   date: new Date()
    });

    res.status(201).json({ success: true, data: insight });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchInsights = async (req, res) => {
  try {
    const insights = await getAllInsights();
    res.status(200).json({
      success: true,
      data: insights
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
export const updateInsight = async (req, res) => {
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
      return res.status(404).json({
        success: false,
        message: "Insight not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Insight updated successfully",
      data: updatedInsight
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
export const deleteInsight = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedInsight = await deleteInsightById(id);

    if (!deletedInsight) {
      return res.status(404).json({
        success: false,
        message: "Insight not found with the given ID"
      });
    }

    res.status(200).json({
      success: true,
      message: "Insight deleted successfully",
      data: deletedInsight
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
