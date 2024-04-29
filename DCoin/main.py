


from aiogram import InlineKeyboardButton, KeyboardButton, WebAppInfo

ikb = InlineKeyboardButton("Перейти", web_app=WebAppInfo('https://<your_domain>'))
kb = KeyboardButton("Перейти", web_app=WebAppInfo('https://<your_domain>'))