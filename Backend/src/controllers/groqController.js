import GroqResponse from "../Model/groqResponse.js";
import { UserModel } from "../Model/user.schema.js";
import { bankingPrompt, hospitalityPrompt, insurancePrompt, realEstatePrompt, retailPrompt, travelPrompt } from "../Repository/systemPrompt.js";
import { generateResponse, updateResponse } from "../utils/groqService.js";

//#region Travel
export const travelResponse = async (req, res) => {
	const { prompt: userPrompt } = req.body;

	const {user} = req
	if(!user){
		return res.status(401).json({error: "Unauthorized"})
	}

	console.log(user)

	const userfound = await UserModel.findOne({_id:user.id})

	if(!userfound){
		return res.status(400).json({message:'No User Found'})
	}

	const accumulatedContent = await generateResponse(userPrompt, travelPrompt);

	if (!accumulatedContent) {
		return res.status(500).json({
			success: false,
			message: "Failed to generate response",
		});
	}

	const response = new GroqResponse({
		user:user.id,
		content: accumulatedContent,
		prompt: userPrompt,
	});

	await response.save();
	return res.status(200).json({ response });
};


export const updateTravelResponse = async (req, res) => {
  const { prompt: userPrompt, previousContent } = req.body;
  const { user } = req;

  if (!userPrompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // (Optional) verify user exists in DB
  const userFound = await UserModel.findById(user._id || user.id);
  if (!userFound) {
    return res.status(404).json({ error: "User not found" });
  }

  // Generate new content (you already handle this)
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

  // 🛠️ Update only if a document with matching user + prompt exists
  const updatedResponse = await GroqResponse.findOneAndUpdate(
    {
      user: user._id || user.id,
      prompt: userPrompt,
    },
    {
      content: accumulatedContent,
    },
    {
      new: true,
    }
  );

  if (!updatedResponse) {
    return res.status(404).json({
      success: false,
      message: "No matching message found to update",
    });
  }

  return res.status(200).json({
    success: true,
    content: updatedResponse.content,
    messageId: updatedResponse._id, // return message ID
  });
};


//#endregion

//#region Retail

export const retailResponse = async (req, res) => {
  const { prompt: userPrompt } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await generateResponse(userPrompt, retailPrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  const response = new GroqResponse({
    content: accumulatedContent,
    prompt: userPrompt,
  });

  await response.save();

  return res.status(200).json({ response });
};

export const updateRetailResponse = async (req, res) => {
  const { prompt: userPrompt, previousContent } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await updateResponse(userPrompt, previousContent, retailPrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  return res.status(200).json({ success: true, content: accumulatedContent });
};

//#endregion

//#region Insurance

export const insuranceResponse = async (req, res) => {
  const { prompt: userPrompt } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await generateResponse(userPrompt, insurancePrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  const response = new GroqResponse({
    content: accumulatedContent,
    prompt: userPrompt,
  });

  await response.save();

  return res.status(200).json({ response });
};

export const updateInsuranceResponse = async (req, res) => {
  const { prompt: userPrompt, previousContent } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await updateResponse(userPrompt, previousContent, insurancePrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  return res.status(200).json({ success: true, content: accumulatedContent });
};

//#endregion

//#region Banking

export const bankingResponse = async (req, res) => {
  const { prompt: userPrompt } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await generateResponse(userPrompt, bankingPrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  const response = new GroqResponse({
    content: accumulatedContent,
    prompt: userPrompt,
  });

  await response.save();

  return res.status(200).json({ response });
};

export const updateBankingResponse = async (req, res) => {
  const { prompt: userPrompt, previousContent } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await updateResponse(userPrompt, previousContent, bankingPrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  return res.status(200).json({ success: true, content: accumulatedContent });
};

//#endregion

//#region Hospitality

export const hospitalityResponse = async (req, res) => {
  const { prompt: userPrompt } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await generateResponse(userPrompt, hospitalityPrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  const response = new GroqResponse({
    content: accumulatedContent,
    prompt: userPrompt,
  });

  await response.save();

  return res.status(200).json({ response });
};

export const updateHospitalityResponse = async (req, res) => {
  const { prompt: userPrompt, previousContent } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await updateResponse(userPrompt, previousContent, hospitalityPrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  return res.status(200).json({ success: true, content: accumulatedContent });
};

//#endregion

//#region Real Estate

export const realEstateResponse = async (req, res) => {
  const { prompt: userPrompt } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await generateResponse(userPrompt, realEstatePrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  const response = new GroqResponse({
    content: accumulatedContent,
    prompt: userPrompt,
  });

  await response.save();

  return res.status(200).json({ response });
};

export const updateRealEstateResponse = async (req, res) => {
  const { prompt: userPrompt, previousContent } = req.body;

  if (!userPrompt)
    return res.status(400).json({ error: "Prompt is required" });

  const accumulatedContent = await updateResponse(userPrompt, previousContent, realEstatePrompt);

  if (!accumulatedContent)
    return res.status(500).json({ success: false, message: "Failed to generate response" });

  return res.status(200).json({ success: true, content: accumulatedContent });
};

//#endregion
