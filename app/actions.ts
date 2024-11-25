'use server'
// import the Genkit and Google AI plugin libraries
import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';


// configure a Genkit instance
const ai = genkit({
    plugins: [googleAI(
        //load api key from environment variable
        { apiKey: process.env.GOOGLE_API_KEY }
    )],
    model: gemini15Flash, // set default model
});

export const makeText = async () => {
    // make a generation request
    const { text } = await ai.generate('Hello, Gemini!');
    return text;
}