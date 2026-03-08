import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({apiKey:"AIzaSyDRXIlDrYTEOzwZuRc5wKNbNyBoajriaUQ"});

//empty array to store all the previous response of LLM and user both
const History= [];  

async function Chatting(userProblem) {

  // store the question of user
  History.push({
    role:"user",
    parts:[{text: userProblem}],
  })

  // response of LLM is generated
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: History
  });
  
  // store response of LLM
  History.push({
    role:"model",
    parts:[{text:response.text}],
  });
    
  console.log(response.text);
}

async function main(){
  const userProblem = readlineSync.question("\nAsk my anything --> ");
  await Chatting(userProblem);
  main();
}

await main();