import { SarvamAIClient } from "sarvamai";

const client = new SarvamAIClient({ apiSubscriptionKey: "sk_ljuiolz1_FBiD2bBtYsbosghQXGpyZyIn" });





export async function genrateAnswer(text: string) {
    try {

        const chat = await client.chat.completions({
            model: "sarvam-m",
            messages:
                [
                    { role: "system", content: "you are a teacher of class teacher and you just response as a teacher and call them child or beta in hindi or english" },
                    { role: "user", content: text }
                ],
        })
        return chat.choices[0].message.content
    }
    catch (e) {
        console.log(e)
        return "Model Not Responding"
    }
}



export interface UsersChat { role: "user" | "assistant" | "system", content: string }

export async function genrateAnswerWithStorage(text: UsersChat[]) {
    try {



        // Chat Completion (POST /v1/chat/completions)
        const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer ",
                "api-subscription-key": "sk_ljuiolz1_FBiD2bBtYsbosghQXGpyZyIn",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "messages": [
                    {
                        "content": "you are a gym coatch that guid there students",
                        "role": "system"
                    },
                    ...text
                ],
                "model": "sarvam-m"
            }),
        });

        const body = await response.json();
        console.log(body.choices[0].message.content);



        return body.choices[0].message.content
        console.log(body.choices[0].message.role)
    }
    catch (e) {
        console.log(e)
        return "Model Not Responding"
    }
}


