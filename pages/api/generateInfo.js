const { Configuration, OpenAIApi } = require('openai');
const { recipePrompt } = require('./promt.json');

console.log('API Key:', process.env.OPENAI_API_KEY);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateInfo = async (req, res) => {
  const { recipe } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful running coach.' },
        { role: 'user', content: recipePrompt },
        { role: 'assistant', content: recipe },
      ],
      max_tokens: 200,
      temperature: 0,
      n: 1,
    });

    const response = completion.data.choices[0].message.content;

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      return res.status(401).json({
        error: 'Please provide a valid API key.',
      });
    }
    return res.status(500).json({
      error:
        'An error occurred while generating recipe information. Please try again later.',
    });
  }
};

module.exports = { generateInfo };