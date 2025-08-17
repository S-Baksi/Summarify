const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const summarizeWithGroq = async (transcript, prompt = "Summarize the following meeting transcript in a concise manner:") => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that summarizes meeting transcripts."
        },
        {
          role: "user",
          content: `${prompt}\n\n${transcript}`
        }
      ],
     model: process.env.GROQ_MODEL || "llama3-70b-8192",
      temperature: 0.5,
      max_tokens: 1024
    });

    return completion.choices[0]?.message?.content || "No summary generated";
  } catch (error) {
    console.error("Error with Groq API:", error);
    throw error;
  }
};

module.exports = { summarizeWithGroq };