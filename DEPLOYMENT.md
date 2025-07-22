# 🚀 Инструкция по развертыванию Global Support на Ubuntu 22.04

## 📋 Требования
- Ubuntu 22.04 LTS
- Домен: global-support.live
- Root доступ к серверу

## 🔧 Пошаговая установка

### 1. Обновление системы
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install curl wget git unzip -y
```

### 2. Установка Node.js 18
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # Должно показать v18.x.x
npm --version
```

### 3. Установка PM2 (менеджер процессов)
```bash
sudo npm install -g pm2
pm2 startup
# Выполните команду, которую покажет PM2
```

### 4. Установка Nginx
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 5. Установка Certbot (SSL сертификаты)
```bash
sudo apt install snapd -y
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### 6. Клонирование проекта
```bash
cd /var/www
sudo git clone https://github.com/YOUR_USERNAME/global-support.git
sudo chown -R $USER:$USER /var/www/global-support
cd /var/www/global-support
```

### 7. Установка зависимостей и сборка
```bash
npm ci
npm run build
```

### 8. Настройка PM2
```bash
# Создаем директорию для логов
mkdir logs

# Запускаем приложение
pm2 start ecosystem.config.js
pm2 save
```

### 9. Настройка Nginx
```bash
# Копируем конфигурацию
sudo cp nginx.conf /etc/nginx/sites-available/global-support
sudo ln -s /etc/nginx/sites-available/global-support /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Проверяем конфигурацию
sudo nginx -t
sudo systemctl reload nginx
```

### 10. Получение SSL сертификата
```bash
sudo certbot --nginx -d global-support.live -d www.global-support.live
```

### 11. Настройка автообновления SSL
```bash
sudo crontab -e
# Добавьте строку:
0 12 * * * /usr/bin/certbot renew --quiet
```

### 12. Настройка файрвола
```bash
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## 🔄 Автоматическое развертывание

### Создание deploy ключа
```bash
ssh-keygen -t rsa -b 4096 -C "deploy@global-support.live"
cat ~/.ssh/id_rsa.pub
# Добавьте этот ключ в GitHub Deploy Keys
```

### Настройка webhook (опционально)
```bash
# Создаем скрипт для автодеплоя
sudo cp deploy.sh /var/www/global-support/
chmod +x /var/www/global-support/deploy.sh
```

## 📊 Мониторинг

### Просмотр логов
```bash
# Логи приложения
pm2 logs global-support

# Логи Nginx
sudo tail -f /var/log/nginx/global-support.access.log
sudo tail -f /var/log/nginx/global-support.error.log
```

### Статус сервисов
```bash
pm2 status
sudo systemctl status nginx
sudo systemctl status certbot.timer
```

## 🔧 Полезные команды

### Перезапуск приложения
```bash
cd /var/www/global-support
pm2 reload ecosystem.config.js
```

### Обновление кода
```bash
cd /var/www/global-support
git pull origin main
npm ci
npm run build
pm2 reload ecosystem.config.js
```

### Резервное копирование
```bash
# Создание бэкапа
sudo tar -czf /backup/global-support-$(date +%Y%m%d).tar.gz /var/www/global-support
```

## 🚨 Решение проблем

### Если сайт не открывается
```bash
# Проверяем статус
pm2 status
sudo systemctl status nginx

# Проверяем порты
sudo netstat -tlnp | grep :3000
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

### Если Telegram не работает
```bash
# Проверяем логи
pm2 logs global-support --lines 100

# Тестируем API
curl -X POST https://api.telegram.org/bot8191908931:AAHWRWF8sDDS7xb5tTIN9L6UdxX3LxVSV6o/getMe
```

## ✅ Проверка работы

1. Откройте https://global-support.live
2. Заполните форму заявки
3. Проверьте Telegram чат на получение уведомления
4. Проверьте логи: `pm2 logs global-support`

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи приложения и Nginx
2. Убедитесь, что все сервисы запущены
3. Проверьте DNS настройки домена
4. Убедитесь, что файрвол настроен правильно

---

🎉 **Поздравляем! Ваш сайт Global Support готов к работе!**