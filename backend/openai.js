const { OpenAIApi } = require('openai');

// const config = new Configuration({
//   apikey: 'sk-proj-TqXbuBLXCI2CzbwcodcXT3BlbkFJyUhPVwwIPxhgqi1a2aYL'
// })
const op = 'sk-proj-TqXbuBLXCI2CzbwcodcXT3BlbkFJyUhPVwwIPxhgqi1a2aYL'
const openai = new OpenAIApi({key: });

const runPrompt = async () => {
  const prompt = 'write a c code to print hello';
  const response = await openai.CreateCompletion({
    model: 'text-davinci-083',
    prompt: prompt,
    max_Tokens: 2048,
    temperature: 1
  })
  console.log(response.data);
}

runPrompt();

// const express = require('express');
// require('dotenv').config();
// const { Configuration, OpenAIApi } = require('openai');

// const app =express();
// app.use(express.json());

// const configuration = new Configuration({
//   apikey: 'sk-proj-TqXbuBLXCI2CzbwcodcXT3BlbkFJyUhPVwwIPxhgqi1a2aYL'
// })

// app.post('hh',async(req,res)=>{
//   try{
//     return res.status(200).json({
//       message:'working',
//     });
//   } catch(err){
//     console.log(err)
//   }
// })

// const port = 6000;

// app.listen(port,()=>{
//   console.log(6000);
// })

