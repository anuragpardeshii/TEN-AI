import GroqResponse from "../Model/groqResponse.js";
import { bankingPrompt, hospitalityPrompt, insurancePrompt, realEstatePrompt, retailPrompt, travelPrompt } from "../Repository/systemPrompt.js";
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

//#region Insuarance

export const InsuaranceResponse = async(req,res)=>{
	const { prompt: userPrompt } = req.body;

	const accumulatedContent = await generateResponse(userPrompt, insurancePrompt);

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
}


export const updateInsuaranceResponse = async (req,res) => {
	const { prompt: userPrompt, previousContent } = req.body;
  
	  if (!userPrompt)
		  return res.status(400).json({ error: "Prompt is required" });
  
	  const accumulatedContent = await updateResponse(
		  userPrompt,
		  previousContent,
		  insurancePrompt
	  );
  
	  if (!accumulatedContent) {
		  return res.status(500).json({
			  success: false,
			  message: "Failed to generate response",
		  });
	  }
  
	  return res.status(200).json({
		  success: true,
		  content: accumulatedContent,
	  });
  }

//#bankingPrompt

export const bankingResponse = async(req,res)=>{
	const { prompt: userPrompt } = req.body;

	const accumulatedContent = await generateResponse(userPrompt, bankingPrompt);

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
}


export const updatebankingResponse = async(req,res)=>{
	const { prompt: userPrompt, previousContent } = req.body;
  
	  if (!userPrompt)
		  return res.status(400).json({ error: "Prompt is required" });
  
	  const accumulatedContent = await updateResponse(
		  userPrompt,
		  previousContent,
		  bankingPrompt
	  );
  
	  if (!accumulatedContent) {
		  return res.status(500).json({
			  success: false,
			  message: "Failed to generate response",
		  });
	  }
  
	  return res.status(200).json({
		  success: true,
		  content: accumulatedContent,
	  });
  }	
//#end


//#hospitalityPrompt

export const hospitalityResponse = async(req,res)=>{
	const { prompt: userPrompt } = req.body;

	const accumulatedContent = await generateResponse(userPrompt, hospitalityPrompt);

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
}

export const updatehospitalityResponse = async(req,res)=>{
	const { prompt: userPrompt, previousContent } = req.body;
  
	  if (!userPrompt)
		  return res.status(400).json({ error: "Prompt is required" });
  
	  const accumulatedContent = await updateResponse(
		  userPrompt,
		  previousContent,
		  hospitalityPrompt
	  );
  
	  if (!accumulatedContent) {
		  return res.status(500).json({
			  success: false,
			  message: "Failed to generate response",
		  });
	  }
  
	  return res.status(200).json({
		  success: true,
		  content: accumulatedContent,
	  });
  }	

  //#end


  //#realEstatePrompt

  export const realEstate = async (req, res) =>{
	const { prompt: userPrompt } = req.body;

	const accumulatedContent = await generateResponse(userPrompt, realEstatePrompt);

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
	
  }

  export const updaterealEstateResponse = async(req,res)=>{
	const { prompt: userPrompt, previousContent } = req.body;
  
	if (!userPrompt)
		return res.status(400).json({ error: "Prompt is required" });

	const accumulatedContent = await updateResponse(
		userPrompt,
		previousContent,
		realEstatePrompt
	);

	if (!accumulatedContent) {
		return res.status(500).json({
			success: false,
			message: "Failed to generate response",
		});
	}

	return res.status(200).json({
		success: true,
		content: accumulatedContent,
	});

  }