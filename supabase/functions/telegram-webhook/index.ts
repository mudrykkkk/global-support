import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, phone, email, country, comment } = await req.json()

    // Validate required fields
    if (!name || !phone || !email || !country) {
      return new Response(
        JSON.stringify({ success: false, message: 'Заполните все обязательные поля' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log('📋 Получена заявка:', { name, phone, email, country, comment })

    // Telegram credentials
    const TELEGRAM_BOT_TOKEN = '7891011050:AAFpuSSKu2lT_p1zVqWi42P-kNoCCWPxFBM'
    const TELEGRAM_CHAT_ID = '-1002818814568'

    // Format message
    const message = `🆕 НОВАЯ ЗАЯВКА

👤 Имя: ${name}
📞 Телефон: ${phone}
✉️ Email: ${email}
🌍 Страна: ${country}
💬 Комментарий: ${comment || 'Не указан'}

⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Kiev' })}`

    console.log('📤 Отправляем в Telegram...')

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    })

    const telegramResult = await telegramResponse.json()

    if (telegramResponse.ok) {
      console.log('✅ Сообщение отправлено в Telegram успешно!')
      return new Response(
        JSON.stringify({ success: true, message: 'Заявка отправлена успешно!' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    } else {
      console.error('❌ Ошибка Telegram API:', telegramResult)
      return new Response(
        JSON.stringify({ success: false, message: 'Ошибка отправки в Telegram' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

  } catch (error) {
    console.error('💥 Ошибка Edge Function:', error)
    return new Response(
      JSON.stringify({ success: false, message: 'Ошибка сервера' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})