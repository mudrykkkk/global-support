# Global Support - Multilingual Corporate Website

Сучасний мультимовний корпоративний сайт для Global Support з підтримкою трьох мов (українська, польська, англійська) та інтеграцією з Telegram.

## 🚀 Функціональність

- **Мультимовність**: Підтримка української, польської та англійської мов
- **Адаптивний дизайн**: Повна сумісність з мобільними пристроями, планшетами та десктопом
- **Telegram інтеграція**: Автоматичне надсилання форм заявок у Telegram чат
- **SEO оптимізація**: Sitemap.xml, robots.txt, мета-теги
- **Сучасні анімації**: Плавні переходи та інтерактивні елементи
- **Форма заявки**: Валідація та надсилання даних з IP-адресою

## 🛠 Технології

- **Frontend**: Next.js 13, React 18, TypeScript
- **UI**: Tailwind CSS, shadcn/ui
- **Анімації**: Framer Motion
- **Локалізація**: next-i18next
- **Форми**: React Hook Form
- **API**: Next.js API Routes

## 🏗 Структура проєкту

```
├── app/                     # Next.js app directory
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── pages/                   # Pages directory
│   ├── _app.tsx            # App component
│   ├── zajavka.tsx         # Application form page
│   ├── privacy.tsx         # Privacy policy page
│   └── api/
│       └── telegram.ts     # Telegram API integration
├── components/             # React components
│   ├── Layout.tsx          # Main layout component
│   ├── LanguageSwitcher.tsx # Language switcher
│   └── AnimatedSection.tsx # Animation wrapper
├── public/
│   ├── locales/            # Translation files
│   │   ├── ua/             # Ukrainian translations
│   │   ├── pl/             # Polish translations
│   │   └── en/             # English translations
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # SEO robots file
└── lib/                    # Utility functions
    └── utils.ts            # Helper functions
```

## 🚀 Розгортання

### Встановлення залежностей

```bash
npm install
```

### Запуск у режимі розробки

```bash
npm run dev
```

### Збірка для продакшну

```bash
npm run build
```

### Запуск продакшн версії

```bash
npm run start
```

## ⚙️ Налаштування

### Telegram Bot

1. Створіть бота через @BotFather у Telegram
2. Отримайте токен бота
3. Додайте бота до групи/каналу
4. Отримайте Chat ID

**Поточні налаштування:**
- Token: `8191908931:AAHWRWF8sDDS7xb5tTIN9L6UdxX3LxVSV6o`
- Chat ID: `-1002818814568`

### Зміна Telegram налаштувань

Відредагуйте файл `pages/api/telegram.ts`:

```typescript
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';
```

### Локалізація

Для додавання нових перекладів:

1. Створіть файли у `/public/locales/[locale]/`
2. Додайте локаль у `next-i18next.config.js`
3. Оновіть `next.config.js` для підтримки нової мови

### URL структура

- Українська: `/ua/`
- Польська: `/pl/`
- Англійська: `/en/`

## 🎨 Дизайн

- **Колірна схема**: Blue (#3B82F6) як основний колір
- **Типографія**: Inter font family
- **Компоненти**: shadcn/ui система дизайну
- **Анімації**: Framer Motion для плавних переходів

## 📱 Адаптивність

- **Мобільні пристрої**: < 768px
- **Планшети**: 768px - 1024px
- **Десктоп**: > 1024px

## 🔧 SEO

### Sitemap
Автоматично генерується sitemap.xml з усіма мовними версіями.

### Robots.txt
Налаштований для індексації всіх сторінок.

### Meta теги
Кожна сторінка має:
- Title та description
- Open Graph теги
- Twitter Card теги
- Мовні альтернативи

## 🔐 Безпека

- Валідація форм на клієнті та сервері
- Захист від спаму
- Безпечна передача даних

## 📊 Моніторинг

Telegram повідомлення містять:
- Дані з форми
- IP адресу користувача
- Timestamp
- Мову інтерфейсу

## 🚨 Вимикання Telegram сповіщень

Для тимчасового вимкнення:

```typescript
// У файлі pages/api/telegram.ts
export default async function handler(req, res) {
  // Закоментуйте наступний рядок для вимкнення
  // return res.status(200).json({ success: true });
  
  // Решта коду...
}
```

## 📝 Оновлення контенту

Для оновлення текстів сайту редагуйте файли у `/public/locales/[locale]/`:

- `common.json` - загальні тексти
- `home.json` - головна сторінка
- `application.json` - сторінка заявки
- `privacy.json` - політика конфіденційності

## 🌐 Деплой

Сайт готовий для деплою на:
- Netlify
- Vercel
- GitHub Pages (статичний експорт)

### Статичний експорт

```bash
npm run build
```

Результат буде у папці `/out/`

## 📞 Підтримка

Для питань та підтримки:
- Email: support@global-support.live
- Telegram: @globalsupport

## 📄 Ліцензія

© 2025 Global Support. Всі права захищені.