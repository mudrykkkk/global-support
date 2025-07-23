export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaConsultation: string;
    ctaLearnMore: string;
  };
  
  // Stats
  stats: {
    title: string;
    clients: string;
    projects: string;
    experience: string;
    satisfaction: string;
  };
  
  // Directions
  directions: {
    title: string;
    subtitle: string;
    finance: {
      title: string;
      subtitle: string;
      description: string;
      details: string[];
    };
    education: {
      title: string;
      subtitle: string;
      description: string;
      details: string[];
    };
    management: {
      title: string;
      subtitle: string;
      description: string;
      details: string[];
    };
    learnMore: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    individual: {
      title: string;
      personalPlanning: {
        title: string;
        description: string;
        details: string;
      };
      investing: {
        title: string;
        description: string;
        details: string;
      };
      taxOptimization: {
        title: string;
        description: string;
        details: string;
      };
      assetProtection: {
        title: string;
        description: string;
        details: string;
      };
    };
    business: {
      title: string;
      financialPlanning: {
        title: string;
        description: string;
        details: string;
      };
      profitability: {
        title: string;
        description: string;
        details: string;
      };
      investmentAttraction: {
        title: string;
        description: string;
        details: string;
      };
      automation: {
        title: string;
        description: string;
        details: string;
      };
      cashflow: {
        title: string;
        description: string;
        details: string;
      };
    };
  };
  
  // Advantages
  advantages: {
    title: string;
    subtitle: string;
    experience: {
      title: string;
      description: string;
    };
    expertise: {
      title: string;
      description: string;
    };
    approach: {
      title: string;
      description: string;
    };
    results: {
      title: string;
      description: string;
    };
  };
  
  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      text: string;
      author: string;
      position: string;
    }[];
  };
  
  // CTA
  cta: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    contacts: string;
    copyright: string;
  };
  
  // Application Form
  application: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    nameRequired: string;
    phone: string;
    phoneRequired: string;
    email: string;
    emailRequired: string;
    emailInvalid: string;
    country: string;
    countryRequired: string;
    selectCountry: string;
    comment: string;
    commentPlaceholder: string;
    back: string;
    submit: string;
    submitting: string;
    success: {
      title: string;
      message: string;
      backHome: string;
    };
  };
}

export const translations: Record<string, Translation> = {
  ua: {
    nav: {
      home: 'Головна',
      services: 'Послуги',
      about: 'Про нас',
      contact: 'Контакти',
    },
    hero: {
      title: 'Зовнішній інтелектуальний менеджмент',
      subtitle: 'Global Support спеціалізується у напрямку зовнішнього інтелектуального менеджменту.',
      description: 'Ми спеціалізуємось на інтеграції рішень у сферах фінансової архітектури, освітньої динаміки та управлінської трансформації. Наша команда забезпечує стратегічну підтримку, менторинг та операційне моделювання для структур, що прагнуть до сталого зростання.',
      ctaConsultation: 'Отримати консультацію',
      ctaLearnMore: 'Дізнатися більше',
    },
    stats: {
      title: 'Наші досягнення',
      clients: 'Задоволених клієнтів',
      projects: 'Успішних проєктів',
      experience: 'Років досвіду',
      satisfaction: 'Рівень задоволення',
    },
    directions: {
      title: 'Напрями діяльності',
      subtitle: 'Ми працюємо в трьох ключових сферах для забезпечення комплексного розвитку бізнесу',
      finance: {
        title: 'Фінанси',
        subtitle: 'Фінансова архітектура та стратегія',
        description: 'Моделювання капітальних потоків, антикризова інженерія, фінансова стратегія з урахуванням ринкових коливань, аудит бізнес-моделей',
        details: [
          'Моделювання капітальних потоків та антикризова інженерія',
          'Формування фінансової стратегії із проекцією на ринкові коливання',
          'Аудит бізнес-моделей на предмет прибутковості та життєздатності'
        ]
      },
      education: {
        title: 'Освіта',
        subtitle: 'Освітня динаміка та розвиток',
        description: 'Кураторство освітніх форматів, створення знаннєвих екосистем, інженерія навчального досвіду, розвиток soft+hard skills',
        details: [
          'Кураторство освітніх форматів і побудова знаннєвої екосистеми',
          'Інженерія навчального досвіду та розвитку soft+hard skills',
          'Оптимізація освітньо-когнітивних процесів у корпоративному середовищі'
        ]
      },
      management: {
        title: 'Управління',
        subtitle: 'Управлінська трансформація',
        description: 'Підтримка рішень в умовах змін, стратегічне лідерство, діагностика організаційної структури',
        details: [
          'Підтримка управлінських рішень у змінному середовищі',
          'Впровадження стратегічних моделей лідерства',
          'Діагностика організаційної структури та адаптація до викликів ринку'
        ]
      },
      learnMore: 'Детальніше',
    },
    services: {
      title: 'Наші послуги',
      subtitle: 'Комплексні рішення для приватних осіб та бізнесу',
      individual: {
        title: 'Для приватних осіб',
        personalPlanning: {
          title: 'Планування особистих фінансів',
          description: 'Хочу знати, як грамотно розподіляти доходи/витрати',
          details: 'Як почати відкладати та інвестувати без ризику'
        },
        investing: {
          title: 'Інвестування',
          description: 'Куди інвестувати $5–10 тис. без досвіду',
          details: 'Що обрати: крипта, нерухомість, облігації?'
        },
        taxOptimization: {
          title: 'Податкове структурування',
          description: 'Як сплачувати менше податків законно',
          details: 'Як оформити себе як ФОП/самозайнятого для доходів з-за кордону'
        },
        assetProtection: {
          title: 'Захист активів',
          description: 'Як зберегти заощадження під час нестабільності',
          details: 'Чи варто відкривати рахунок за кордоном?'
        }
      },
      business: {
        title: 'Для бізнесу',
        financialPlanning: {
          title: 'Фінансове планування та бюджетування',
          description: 'Як скласти фінансову модель на рік',
          details: 'Як оптимізувати витрати і не зупинити розвиток'
        },
        profitability: {
          title: 'Розрахунок прибутковості',
          description: 'Маю бізнес, але не розумію, чи він реально прибутковий',
          details: 'Як порахувати рентабельність товарів/послуг'
        },
        investmentAttraction: {
          title: 'Залучення інвестицій',
          description: 'Потрібна презентація для інвестора / pitch deck',
          details: 'Як підготувати документи для грантів/фондів'
        },
        automation: {
          title: 'Автоматизація фінансів',
          description: 'Як вести фіноблік без бухгалтера',
          details: 'Які сервіси підходять для малого бізнесу'
        },
        cashflow: {
          title: 'Кеш-флоу менеджмент',
          description: 'Не вистачає грошей на операційку, хоча продажі є',
          details: 'Як планувати грошові потоки'
        }
      }
    },
    advantages: {
      title: 'Чому обирають нас',
      subtitle: 'Переваги роботи з Global Support',
      experience: {
        title: 'Досвід',
        description: 'Більше 10 років роботи в сфері консалтингу'
      },
      expertise: {
        title: 'Експертиза',
        description: 'Команда сертифікованих фахівців з різних галузей'
      },
      approach: {
        title: 'Підхід',
        description: 'Індивідуальні рішення для кожного клієнта'
      },
      results: {
        title: 'Результати',
        description: 'Доведена ефективність наших рішень'
      }
    },
    testimonials: {
      title: 'Відгуки клієнтів',
      subtitle: 'Що говорять про нас наші клієнти',
      items: [
        {
          text: 'Global Support допомогла нам повністю переосмислити фінансову стратегію. Результати перевершили очікування.',
          author: 'Сергій Нікіфоров',
          position: 'Генеральний директор, TechCorp'
        },
        {
          text: 'Професійна команда з індивідуальним підходом. Рекомендую всім, хто шукає якісні консалтингові послуги.',
          author: 'Олександр Коваленко',
          position: 'Засновник, StartupHub'
        },
        {
          text: 'Завдяки Global Support ми змогли оптимізувати всі бізнес-процеси та значно покращити показники.',
          author: 'Юлія Сидоренко',
          position: 'Фінансовий директор, InnovateTech'
        }
      ]
    },
    cta: {
      title: 'Готові розпочати?',
      subtitle: 'Зв\'яжіться з нами для отримання безкоштовної консультації',
      description: 'Наша команда експертів готова допомогти вам досягти ваших цілей',
      button: 'Отримати консультацію'
    },
    footer: {
      description: 'Ми інтегруємо рішення у сферах фінансової архітектури, освітньої динаміки та управлінської трансформації.',
      quickLinks: 'Швидкі посилання',
      contacts: 'Контакти',
      copyright: 'Global Support. Усі права захищені.'
    },
    application: {
      title: 'Подати заявку',
      subtitle: 'Заповніть форму і наша команда зв\'яжеться з вами найближчим часом',
      formTitle: 'Форма заявки',
      name: 'Ім\'я',
      nameRequired: 'Ім\'я обов\'язкове',
      phone: 'Телефон',
      phoneRequired: 'Телефон обов\'язковий',
      email: 'Email',
      emailRequired: 'Email обов\'язковий',
      emailInvalid: 'Невірний формат email',
      country: 'Країна',
      countryRequired: 'Країна обов\'язкова',
      selectCountry: 'Оберіть країну',
      comment: 'Коментар (необов\'язково)',
      commentPlaceholder: 'Ваш коментар або питання',
      back: 'Назад',
      submit: 'Надіслати заявку',
      submitting: 'Надсилання...',
      success: {
        title: 'Дякуємо!',
        message: 'Ми зв\'яжемося з вами найближчим часом.',
        backHome: 'На головну'
      }
    }
  },
  
  pl: {
    nav: {
      home: 'Strona główna',
      services: 'Usługi',
      about: 'O nas',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Zewnętrzny zarządzanie intelektualne',
      subtitle: 'Global Support specjalizuje się w kierunku zewnętrznego zarządzania intelektualnego.',
      description: 'Specjalizujemy się w integracji rozwiązań w obszarach architektury finansowej, dynamiki edukacyjnej i transformacji zarządczej. Nasz zespół zapewnia wsparcie strategiczne, mentoring i modelowanie operacyjne dla struktur dążących do zrównoważonego wzrostu.',
      ctaConsultation: 'Uzyskaj konsultację',
      ctaLearnMore: 'Dowiedz się więcej',
    },
    stats: {
      title: 'Nasze osiągnięcia',
      clients: 'Zadowolonych klientów',
      projects: 'Udanych projektów',
      experience: 'Lat doświadczenia',
      satisfaction: 'Poziom satysfakcji',
    },
    directions: {
      title: 'Kierunki działalności',
      subtitle: 'Pracujemy w trzech kluczowych obszarach dla zapewnienia kompleksowego rozwoju biznesu',
      finance: {
        title: 'Finanse',
        subtitle: 'Architektura finansowa i strategia',
        description: 'Modelowanie przepływów kapitałowych, inżynieria antykryzysowa, strategia finansowa z uwzględnieniem wahań rynkowych, audyt modeli biznesowych',
        details: [
          'Modelowanie przepływów kapitałowych i inżynieria antykryzysowa',
          'Formowanie strategii finansowej z projekcją na wahania rynkowe',
          'Audyt modeli biznesowych pod kątem rentowności i żywotności'
        ]
      },
      education: {
        title: 'Edukacja',
        subtitle: 'Dynamika edukacyjna i rozwój',
        description: 'Kuratorstwo formatów edukacyjnych, tworzenie ekosystemów wiedzy, inżynieria doświadczeń uczenia się, rozwój umiejętności miękkich i twardych',
        details: [
          'Kuratorstwo formatów edukacyjnych i budowanie ekosystemu wiedzy',
          'Inżynieria doświadczeń uczenia się i rozwoju umiejętności miękkich i twardych',
          'Optymalizacja procesów edukacyjno-kognitywnych w środowisku korporacyjnym'
        ]
      },
      management: {
        title: 'Zarządzanie',
        subtitle: 'Transformacja zarządcza',
        description: 'Wsparcie decyzji w warunkach zmian, strategiczne przywództwo, diagnostyka struktury organizacyjnej',
        details: [
          'Wsparcie decyzji zarządczych w zmieniającym się środowisku',
          'Wdrażanie strategicznych modeli przywództwa',
          'Diagnostyka struktury organizacyjnej i adaptacja do wyzwań rynkowych'
        ]
      },
      learnMore: 'Więcej szczegółów',
    },
    services: {
      title: 'Nasze usługi',
      subtitle: 'Kompleksowe rozwiązania dla osób prywatnych i biznesu',
      individual: {
        title: 'Dla osób prywatnych',
        personalPlanning: {
          title: 'Planowanie finansów osobistych',
          description: 'Chcę wiedzieć, jak rozsądnie rozdzielać dochody/wydatki',
          details: 'Jak zacząć oszczędzać i inwestować bez ryzyka'
        },
        investing: {
          title: 'Inwestowanie',
          description: 'Gdzie zainwestować $5–10 tys. bez doświadczenia',
          details: 'Co wybrać: krypto, nieruchomości, obligacje?'
        },
        taxOptimization: {
          title: 'Strukturyzacja podatkowa',
          description: 'Jak płacić mniej podatków legalnie',
          details: 'Jak zarejestrować się jako przedsiębiorca dla dochodów z zagranicy'
        },
        assetProtection: {
          title: 'Ochrona aktywów',
          description: 'Jak zachować oszczędności podczas niestabilności',
          details: 'Czy warto otworzyć konto za granicą?'
        }
      },
      business: {
        title: 'Dla biznesu',
        financialPlanning: {
          title: 'Planowanie finansowe i budżetowanie',
          description: 'Jak stworzyć model finansowy na rok',
          details: 'Jak zoptymalizować wydatki i nie zatrzymać rozwoju'
        },
        profitability: {
          title: 'Kalkulacja rentowności',
          description: 'Mam biznes, ale nie rozumiem, czy jest naprawdę rentowny',
          details: 'Jak obliczyć rentowność produktów/usług'
        },
        investmentAttraction: {
          title: 'Pozyskiwanie inwestycji',
          description: 'Potrzebna prezentacja dla inwestora / pitch deck',
          details: 'Jak przygotować dokumenty dla grantów/funduszy'
        },
        automation: {
          title: 'Automatyzacja finansów',
          description: 'Jak prowadzić księgowość bez księgowego',
          details: 'Które usługi nadają się dla małego biznesu'
        },
        cashflow: {
          title: 'Zarządzanie przepływami pieniężnymi',
          description: 'Brakuje pieniędzy na operacje, chociaż są sprzedaże',
          details: 'Jak planować przepływy pieniężne'
        }
      }
    },
    advantages: {
      title: 'Dlaczego nas wybierają',
      subtitle: 'Zalety współpracy z Global Support',
      experience: {
        title: 'Doświadczenie',
        description: 'Ponad 10 lat pracy w dziedzinie konsultingu'
      },
      expertise: {
        title: 'Ekspertyza',
        description: 'Zespół certyfikowanych specjalistów z różnych branż'
      },
      approach: {
        title: 'Podejście',
        description: 'Indywidualne rozwiązania dla każdego klienta'
      },
      results: {
        title: 'Rezultaty',
        description: 'Udowodniona skuteczność naszych rozwiązań'
      }
    },
    testimonials: {
      title: 'Opinie klientów',
      subtitle: 'Co mówią o nas nasi klienci',
      items: [
        {
          text: 'Global Support pomogła nam całkowicie przemyśleć strategię finansową. Wyniki przewyższyły oczekiwania.',
          author: 'Serhii Nikiforov',
          position: 'Dyrektor Generalny, TechCorp'
        },
        {
          text: 'Profesjonalny zespół z indywidualnym podejściem. Polecam wszystkim szukającym jakościowych usług konsultingowych.',
          author: 'Aleksander Kowalenko',
          position: 'Założyciel, StartupHub'
        },
        {
          text: 'Dzięki Global Support mogliśmy zoptymalizować wszystkie procesy biznesowe i znacznie poprawić wskaźniki.',
          author: 'Julia Sydorenko',
          position: 'Dyrektor Finansowy, InnovateTech'
        }
      ]
    },
    cta: {
      title: 'Gotowy do rozpoczęcia?',
      subtitle: 'Skontaktuj się z nami, aby uzyskać bezpłatną konsultację',
      description: 'Nasz zespół ekspertów jest gotowy pomóc Ci osiągnąć Twoje cele',
      button: 'Uzyskaj konsultację'
    },
    footer: {
      description: 'Integrujemy rozwiązania w obszarach architektury finansowej, dynamiki edukacyjnej i transformacji zarządczej.',
      quickLinks: 'Szybkie linki',
      contacts: 'Kontakty',
      copyright: 'Global Support. Wszystkie prawa zastrzeżone.'
    },
    application: {
      title: 'Złóż wniosek',
      subtitle: 'Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w najbliższym czasie',
      formTitle: 'Formularz wniosku',
      name: 'Imię',
      nameRequired: 'Imię jest wymagane',
      phone: 'Telefon',
      phoneRequired: 'Telefon jest wymagany',
      email: 'Email',
      emailRequired: 'Email jest wymagany',
      emailInvalid: 'Nieprawidłowy format email',
      country: 'Kraj',
      countryRequired: 'Kraj jest wymagany',
      selectCountry: 'Wybierz kraj',
      comment: 'Komentarz (opcjonalnie)',
      commentPlaceholder: 'Twój komentarz lub pytanie',
      back: 'Wstecz',
      submit: 'Wyślij wniosek',
      submitting: 'Wysyłanie...',
      success: {
        title: 'Dziękujemy!',
        message: 'Skontaktujemy się z Tobą w najbliższym czasie.',
        backHome: 'Na stronę główną'
      }
    }
  },
  
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'External Intellectual Management',
      subtitle: 'Global Support specializes in external intellectual management.',
      description: 'We specialize in integrating solutions in the areas of financial architecture, educational dynamics, and management transformation. Our team provides strategic support, mentoring, and operational modeling for structures striving for sustainable growth.',
      ctaConsultation: 'Get Consultation',
      ctaLearnMore: 'Learn More',
    },
    stats: {
      title: 'Our Achievements',
      clients: 'Satisfied Clients',
      projects: 'Successful Projects',
      experience: 'Years of Experience',
      satisfaction: 'Satisfaction Rate',
    },
    directions: {
      title: 'Areas of Activity',
      subtitle: 'We work in three key areas to ensure comprehensive business development',
      finance: {
        title: 'Finance',
        subtitle: 'Financial architecture and strategy',
        description: 'Capital flow modeling, crisis engineering, financial strategy considering market fluctuations, business model auditing',
        details: [
          'Capital flow modeling and crisis engineering',
          'Financial strategy formation with market fluctuation projection',
          'Business model audit for profitability and viability'
        ]
      },
      education: {
        title: 'Education',
        subtitle: 'Educational dynamics and development',
        description: 'Educational format curation, knowledge ecosystem creation, learning experience engineering, soft+hard skills development',
        details: [
          'Educational format curation and knowledge ecosystem building',
          'Learning experience engineering and soft+hard skills development',
          'Optimization of educational-cognitive processes in corporate environment'
        ]
      },
      management: {
        title: 'Management',
        subtitle: 'Management transformation',
        description: 'Decision support in changing conditions, strategic leadership, organizational structure diagnostics',
        details: [
          'Management decision support in changing environment',
          'Strategic leadership model implementation',
          'Organizational structure diagnostics and market challenge adaptation'
        ]
      },
      learnMore: 'Learn More',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for individuals and businesses',
      individual: {
        title: 'For Individuals',
        personalPlanning: {
          title: 'Personal Financial Planning',
          description: 'Want to know how to properly allocate income/expenses',
          details: 'How to start saving and investing without risk'
        },
        investing: {
          title: 'Investing',
          description: 'Where to invest $5–10k without experience',
          details: 'What to choose: crypto, real estate, bonds?'
        },
        taxOptimization: {
          title: 'Tax Structuring',
          description: 'How to pay less taxes legally',
          details: 'How to register as self-employed for foreign income'
        },
        assetProtection: {
          title: 'Asset Protection',
          description: 'How to preserve savings during instability',
          details: 'Is it worth opening an account abroad?'
        }
      },
      business: {
        title: 'For Business',
        financialPlanning: {
          title: 'Financial Planning and Budgeting',
          description: 'How to create a financial model for a year',
          details: 'How to optimize costs without stopping development'
        },
        profitability: {
          title: 'Profitability Calculation',
          description: 'I have a business but don\'t understand if it\'s really profitable',
          details: 'How to calculate product/service profitability'
        },
        investmentAttraction: {
          title: 'Investment Attraction',
          description: 'Need investor presentation / pitch deck',
          details: 'How to prepare documents for grants/funds'
        },
        automation: {
          title: 'Finance Automation',
          description: 'How to manage finances without an accountant',
          details: 'Which services are suitable for small business'
        },
        cashflow: {
          title: 'Cash Flow Management',
          description: 'Not enough money for operations despite sales',
          details: 'How to plan cash flows'
        }
      }
    },
    advantages: {
      title: 'Why Choose Us',
      subtitle: 'Advantages of working with Global Support',
      experience: {
        title: 'Experience',
        description: 'Over 10 years of work in consulting'
      },
      expertise: {
        title: 'Expertise',
        description: 'Team of certified specialists from various industries'
      },
      approach: {
        title: 'Approach',
        description: 'Individual solutions for each client'
      },
      results: {
        title: 'Results',
        description: 'Proven effectiveness of our solutions'
      }
    },
    testimonials: {
      title: 'Client Reviews',
      subtitle: 'What our clients say about us',
      items: [
        {
          text: 'Global Support helped us completely rethink our financial strategy. Results exceeded expectations.',
          author: 'Serhii Nikiforov',
          position: 'CEO, TechCorp'
        },
        {
          text: 'Professional team with individual approach. I recommend to everyone looking for quality consulting services.',
          author: 'Alexander Kovalenko',
          position: 'Founder, StartupHub'
        },
        {
          text: 'Thanks to Global Support, we were able to optimize all business processes and significantly improve indicators.',
          author: 'Julia Sydorenko',
          position: 'CFO, InnovateTech'
        }
      ]
    },
    cta: {
      title: 'Ready to Start?',
      subtitle: 'Contact us for a free consultation',
      description: 'Our team of experts is ready to help you achieve your goals',
      button: 'Get Consultation'
    },
    footer: {
      description: 'We integrate solutions in the areas of financial architecture, educational dynamics, and management transformation.',
      quickLinks: 'Quick Links',
      contacts: 'Contacts',
      copyright: 'Global Support. All rights reserved.'
    },
    application: {
      title: 'Submit Application',
      subtitle: 'Fill out the form and our team will contact you soon',
      formTitle: 'Application Form',
      name: 'Name',
      nameRequired: 'Name is required',
      phone: 'Phone',
      phoneRequired: 'Phone is required',
      email: 'Email',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email format',
      country: 'Country',
      countryRequired: 'Country is required',
      selectCountry: 'Select country',
      comment: 'Comment (optional)',
      commentPlaceholder: 'Your comment or question',
      back: 'Back',
      submit: 'Submit Application',
      submitting: 'Submitting...',
      success: {
        title: 'Thank You!',
        message: 'We will contact you soon.',
        backHome: 'Back to Home'
      }
    }
  }
};