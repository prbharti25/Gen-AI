import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({apiKey:"AIzaSyARumwbk01ltTvY7NY4SjhHvMkx5FHpdqw"});

// Histroy stores itself and send the complete history of chats for better context and response
   const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history: [],
   }); 


async function main(){
  const userProblem = readlineSync.question("\nAsk my anything--> ");
  const response = await chat.sendMessage({
      message: userProblem,
   });

   console.log(response.text);

   main();
}

await main();