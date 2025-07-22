#!/bin/bash

# Скрипт развертывания Global Support
echo "🚀 Начинаем развертывание Global Support..."

# Обновляем код
echo "📥 Обновляем код из репозитория..."
git pull origin main

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm ci --production

# Собираем проект
echo "🔨 Собираем проект..."
npm run build

# Перезапускаем PM2
echo "🔄 Перезапускаем приложение..."
pm2 reload ecosystem.config.js

echo "✅ Развертывание завершено!"
echo "🌐 Сайт доступен по адресу: https://global-support.live"