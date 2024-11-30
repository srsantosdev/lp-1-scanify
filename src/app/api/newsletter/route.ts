import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    const DISCORD_WEBHOOK_URL = `https://discord.com/api/webhooks/1312276795449540608/8nvOOa7C4dClq317SBUluzE_pCq1I3BUQXl2PRPUIAtPw2VU3EcRmBgvc1jg5rH27W7D`;

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `📢 Novo cadastro na newsletter: ${email}`,
      }),
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json({
      success: false,
    });
  }
}
