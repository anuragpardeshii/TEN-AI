import GroqResponse from "../Model/groqResponse.js";
import { retailPrompt, travelPrompt } from "../Repository/systemPrompt.js";
import { generateResponse, updateResponse } from "../utils/groqService.js";

//#region Travel
export const travelResponse = async (req, res) => {
	const { prompt: userPrompt } = req.body;

	const accumulatedContent = await generateResponse(userPrompt, travelPrompt);

	if (!accumulatedContent) {
		return res.status(500).json({
			success: false,
			message: "Failed to generate response",
		});
	}

	const response = new GroqResponse({
		content: accumulatedContent,
		prompt: userPrompt,
	});

	await response.save();
	return res.status(200).json({ response });
};

export const updateTravelResponse = async (req, res) => {
	const { prompt: userPrompt, previousContent } = req.body;

	if (!userPrompt)
		return res.status(400).json({ error: "Prompt is required" });

	const accumulatedContent = await updateResponse(
		userPrompt,
		previousContent,
		travelPrompt
	);

	if (!accumulatedContent) {
		return res.status(500).json({
			success: false,
			message: "Failed to generate response",
		});
	}

	// we might need to update the content = content + new generated content

	return res.status(200).json({
		success: true,
		content: accumulatedContent,
	});
};

//#endregion

//#region Retail

export const retailResponse = async (req, res) => {
	const { prompt: userPrompt } = req.body;

	const accumulatedContent = await generateResponse(userPrompt, retailPrompt);

	if (!accumulatedContent) {
		return res.status(500).json({
			success: false,
			message: "Failed to generate response",
		});
	}

	const response = new GroqResponse({
		content: accumulatedContent,
		prompt: userPrompt,
	});

	await response.save();
	return res.status(200).json({
		response,
	});
};

export const updateRetailResponse = async (req,res) => {
  const { prompt: userPrompt, previousContent } = req.body;

	if (!userPrompt)
		return res.status(400).json({ error: "Prompt is required" });

	const accumulatedContent = await updateResponse(
		userPrompt,
		previousContent,
		retailPrompt
	);

	if (!accumulatedContent) {
		return res.status(500).json({
			success: false,
			message: "Failed to generate response",
		});
	}

	// we might need to update the content = content + new generated content

	return res.status(200).json({
		success: true,
		content: accumulatedContent,
	});
}

//#endregion
