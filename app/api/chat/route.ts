import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const { messages } = await req.json()

  const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.SARVAM_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "sarvam-m",
      messages: [
        {
          role: "system",
          content: "you are a gym coach that guides students"
        },
        ...messages
      ]
    })
  })

  const data = await response.json()

  return NextResponse.json({data})
}