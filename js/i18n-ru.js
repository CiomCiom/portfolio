// i18n-ru.js — русские переводы сайта.
//
// Как это устроено: слева — английский текст ровно так, как он написан в HTML,
// справа — русский перевод. Когда выбран русский язык, js/i18n.js находит на
// странице элементы с английским текстом и подставляет перевод.
//
// Если вы поменяете английский текст в HTML, поменяйте его и здесь (слева),
// иначе этот фрагмент останется на английском. Новый текст добавляется так же:
//   "English text": "Русский текст",
// Внутри перевода можно использовать те же теги, что и в оригинале (<strong>, <br>, <span>).

window.I18N_RU = {
  // ---------- Главная страница (index.html) ----------
  "Statkevich Anastasiya — UX/UI Designer":
    "Анастасия Статкевич — UX/UI-дизайнер",
  "Product Designer / UX/UI Designer specializing in SaaS, fintech, Web3 and design systems":
    "Продуктовый дизайнер / UX/UI-дизайнер: SaaS, финтех, Web3 и дизайн-системы",
  "Statkevich Anastasiya":
    "Анастасия Статкевич",
  "Design is a system, <br>not a <span style=\"color: var(--color-accent)\">coincidence</span>.":
    "Дизайн — это система, <br>а не <span style=\"color: var(--color-accent)\">случайность</span>.",
  "I am a Product Designer with over seven years of experience designing digital products for SaaS, fintech and Web3.":
    "Я продуктовый дизайнер с опытом более семи лет: проектирую цифровые продукты для SaaS, финтеха и Web3.",
  "Throughout my career I have worked on complex products including crypto infrastructure, staking platforms and financial dashboards. My focus is creating intuitive user experiences for technically sophisticated systems while balancing user needs, business goals and engineering constraints.":
    "Я работала над сложными продуктами: криптоинфраструктурой, стейкинг-платформами и финансовыми дашбордами. Моя главная задача — делать понятный пользовательский опыт для технически сложных систем, находя баланс между потребностями пользователей, целями бизнеса и техническими ограничениями.",
  "I enjoy working closely with developers and founders, turning complex workflows into clear, scalable product experiences.":
    "Люблю работать в тесной связке с разработчиками и фаундерами и превращать сложные процессы в понятные и масштабируемые продуктовые решения.",
  "Outside of work: I read and help volunteers at an animal shelter 🐾.":
    "Вне работы: читаю и помогаю волонтёрам в приюте для животных 🐾.",
  "Contact me":
    "Связаться со мной",
  "Work experience":
    "Опыт работы",
  "Projects":
    "Проектов",
  "Skills":
    "Навыки",
  "Product &amp; UX":
    "Продукт и UX",
  "Product Design | UX Design | Information Architecture | User Flows | Interaction Design | Design Systems | Accessibility (WCAG)":
    "Продуктовый дизайн | UX-дизайн | Информационная архитектура | Пользовательские сценарии | Дизайн взаимодействия | Дизайн-системы | Доступность (WCAG)",
  "UI Design | Visual Design | Responsive Design | Mobile Design | Web Design | Prototyping":
    "UI-дизайн | Визуальный дизайн | Адаптивный дизайн | Мобильный дизайн | Веб-дизайн | Прототипирование",
  "Tools":
    "Инструменты",
  "AI":
    "ИИ",
  "AI-assisted Design | Figma AI":
    "Дизайн с помощью ИИ | Figma AI",
  "How I work":
    "Как я работаю",
  "Step 1":
    "Шаг 1",
  "Research and Structure":
    "Исследование и структура",
  "I analyze the task, study users and competitors, gather a mood board and references. I build the information architecture and develop the flow. If required by the client, I create a prototype with wireframes.":
    "Разбираю задачу, изучаю пользователей и конкурентов, собираю мудборд и референсы. Выстраиваю информационную архитектуру и прорабатываю пользовательские сценарии. Если это нужно клиенту, делаю прототип на вайрфреймах.",
  "Step 2":
    "Шаг 2",
  "Design and Responsive":
    "Дизайн и адаптив",
  "I create several design options, and after discussion and approval of the design, I build a design system and compile the design. If it's a website or application, I also need to create responsive designs for all necessary breakpoints.":
    "Готовлю несколько вариантов дизайна, а после обсуждения и согласования собираю дизайн-систему и финальные макеты. Для сайта или приложения также делаю адаптивные версии под все нужные брейкпоинты.",
  "Step 3":
    "Шаг 3",
  "Handoff to Developer":
    "Передача в разработку",
  "I hand over all completed work to the developer. If there are animations on the site or in the app, I also create separate files to clarify the concept for the developer.":
    "Передаю всю готовую работу разработчику. Если на сайте или в приложении есть анимации, дополнительно готовлю отдельные файлы, чтобы разработчику была понятна задумка.",
  "Step 4":
    "Шаг 4",
  "Testing":
    "Тестирование",
  "After the developer finishes their work, I review what has been done to minimize discrepancies with the design and to identify any issues.":
    "Когда разработчик заканчивает работу, я проверяю результат, чтобы свести к минимуму расхождения с макетами и выявить возможные проблемы.",
  "Lead Product Designer (UX/UI)":
    "Ведущий продуктовый дизайнер (UX/UI)",
  "Dec 2024 – Jun 2026":
    "Декабрь 2024 – июнь 2026",
  "Led end-to-end UX/UI design for a non-custodial crypto asset management platform, including staking, validator selection, wallet management and portfolio monitoring.":
    "Руководила UX/UI-дизайном некастодиальной платформы для управления криптоактивами от начала до конца: стейкинг, выбор валидаторов, управление кошельками и мониторинг портфеля.",
  "Simplified complex financial workflows into intuitive, easy-to-understand interfaces.":
    "Превращала сложные финансовые процессы в интуитивные и понятные интерфейсы.",
  "Built and maintained the product's Design System, enabling consistent, scalable design across the platform.":
    "Создала и поддерживала дизайн-систему продукта, которая обеспечила единообразный и масштабируемый дизайн по всей платформе.",
  "Worked closely with founders and developers from planning through QA, and created investor-facing presentations.":
    "Тесно работала с фаундерами и разработчиками на всех этапах — от планирования до QA, — а также готовила презентации для инвесторов.",
  "UX/UI Designer":
    "UX/UI-дизайнер",
  "Freelance":
    "Фриланс",
  "Sep 2023 – Dec 2024":
    "Сентябрь 2023 – декабрь 2024",
  "Designed end-to-end web, mobile and Telegram Mini App experiences for international startups across Web3, fintech, aviation and consumer products.":
    "Проектировала веб-, мобильные интерфейсы и Telegram Mini App от начала до конца для международных стартапов в сферах Web3, финтеха, авиации и потребительских продуктов.",
  "Delivered user flows, wireframes and high-fidelity prototypes in Figma, collaborating directly with founders and developers from concept to delivery.":
    "Готовила пользовательские сценарии, вайрфреймы и детализированные прототипы в Figma, напрямую работая с фаундерами и разработчиками от концепции до запуска.",
  "UX/UI Designer and graphic designer":
    "UX/UI-дизайнер и графический дизайнер",
  "Jul 2019 – Sep 2023":
    "Июль 2019 – сентябрь 2023",
  "Designed responsive websites, mobile apps, dashboards and CRM systems for clients across fintech, crypto and social networking.":
    "Проектировала адаптивные сайты, мобильные приложения, дашборды и CRM-системы для клиентов из сфер финтеха, криптовалют и социальных сетей.",
  "Built and maintained design systems, ensuring consistency across multiple concurrent products.":
    "Создавала и поддерживала дизайн-системы, обеспечивая единообразие сразу в нескольких параллельных продуктах.",
  "Partnered with project managers and developers through implementation and handoff.":
    "Работала вместе с проджект-менеджерами и разработчиками на этапах реализации и передачи в разработку.",
  "Education":
    "Образование",
  "UX / UI Design":
    "UX/UI-дизайн",
  "| Sourdesign courses | 3 months":
    "| Курсы Sourdesign | 3 месяца",
  "Specialist degree — Marketing master's degree":
    "Специалитет — маркетинг",
  "| Belarusian State Technological University | September 2011 – February 2016":
    "| Белорусский государственный технологический университет | сентябрь 2011 – февраль 2016",
  "Latest works":
    "Последние работы",
  "Polli.co (app)":
    "Polli.co (приложение)",
  "Design-system":
    "Дизайн-система",
  "Desktop app":
    "Десктопное приложение",
  "Saas":
    "SaaS",
  "Prototyping (In Figma)":
    "Прототипирование (в Figma)",
  "Logo &amp; Identity Design":
    "Логотип и айдентика",
  "Web":
    "Веб",
  "Presentation":
    "Презентация",
  "In this project, I was involved in building a design system that includes over 1000 components, creating a brand book. I also worked on optimizing the workflow for designers, as it was necessary to quickly create different themes for the application depending on the client. Prototypes were also created for presentations to clients and investors.":
    "В этом проекте я создавала дизайн-систему из более чем 1000 компонентов и брендбук. Также оптимизировала рабочий процесс дизайнеров: нужно было быстро создавать разные темы приложения под каждого клиента. Кроме того, я делала прототипы для презентаций клиентам и инвесторам.",
  "View project":
    "Смотреть проект",
  "Website":
    "Сайт",
  "Mobile app":
    "Мобильное приложение",
  "Delivery food":
    "Доставка еды",
  "A mobile application for ordering food. The work took just a couple of weeks, but it was interesting. Competitor analysis was conducted, wireframes with prototypes were created, the design was adapted for different languages, and designs for both iOS and Android were developed. The final design along with the design system was handed over to the developers. The application is currently in development.":
    "Мобильное приложение для заказа еды. Работа заняла всего пару недель, но была очень интересной. Я провела анализ конкурентов, сделала вайрфреймы и прототипы, адаптировала дизайн под разные языки и подготовила макеты для iOS и Android. Финальный дизайн вместе с дизайн-системой передан разработчикам. Сейчас приложение в разработке.",
  "Web app":
    "Веб-приложение",
  "Admin Panel":
    "Админ-панель",
  "Extructor is a web platform that allows users to create, customize, and manage their own cryptocurrency exchange services. Through a comprehensive admin panel, users can configure how their exchange looks and operates, manage available currencies, monitor exchange activity, and manually handle transactions when needed.":
    "Extructor — веб-платформа, на которой пользователи создают, настраивают и ведут собственные сервисы обмена криптовалют. Через полноценную админ-панель можно настроить внешний вид и работу обменника, управлять доступными валютами, отслеживать активность и при необходимости обрабатывать транзакции вручную.",
  "Other projects":
    "Другие проекты",
  "Solostakers <span class=\"text-secondary\">(Blog for crypto owners)</span> <span class=\"divider\">|</span> <a href=\"https://solostakers.com\" target=\"_blank\" rel=\"noopener\">website</a>":
    "Solostakers <span class=\"text-secondary\">(блог для владельцев криптовалют)</span> <span class=\"divider\">|</span> <a href=\"https://solostakers.com\" target=\"_blank\" rel=\"noopener\">сайт</a>",
  "Polli.co <span class=\"text-secondary\">(delegation app)</span>":
    "Polli.co <span class=\"text-secondary\">(приложение для делегирования)</span>",
  "Meal Prep<span class=\"text-secondary\">(mobile app for ordering food)</span>":
    "Meal Prep <span class=\"text-secondary\">(мобильное приложение для заказа еды)</span>",
  "Polli.co (cryptocurrency SaaS)":
    "Polli.co (криптовалютный SaaS)",
  "FGG <span class=\"divider\">|</span> <a href=\"https://fgg.aero/en\" target=\"_blank\" rel=\"noopener\">website</a>":
    "FGG <span class=\"divider\">|</span> <a href=\"https://fgg.aero/en\" target=\"_blank\" rel=\"noopener\">сайт</a>",
  "Sei Mei <span class=\"text-secondary\">(mobile app for affirmations)</span>":
    "Sei Mei <span class=\"text-secondary\">(мобильное приложение с аффирмациями)</span>",
  "Extructor <span class=\"text-secondary\">(cryptocurrency SaaS)</span>":
    "Extructor <span class=\"text-secondary\">(криптовалютный SaaS)</span>",
  "Paykins <span class=\"text-secondary\">(cryptocurrency SaaS)</span>":
    "Paykins <span class=\"text-secondary\">(криптовалютный SaaS)</span>",
  "Reactive <span class=\"text-secondary\">(mobile app)</span>":
    "Reactive <span class=\"text-secondary\">(мобильное приложение)</span>",
  "Honey locust health <span class=\"text-secondary\">(website)</span>":
    "Honey locust health <span class=\"text-secondary\">(сайт)</span>",
  "Polykinetix <span class=\"text-secondary\">(website)</span>":
    "Polykinetix <span class=\"text-secondary\">(сайт)</span>",
  "DraftChamp <span class=\"text-secondary\">(mobile sports betting apps)</span>":
    "DraftChamp <span class=\"text-secondary\">(мобильные приложения для ставок на спорт)</span>",
  "Clix therapy<span class=\"text-secondary\">(website+app for working at trade shows)</span>":
    "Clix therapy <span class=\"text-secondary\">(сайт и приложение для работы на выставках)</span>",
  "True North <span class=\"text-secondary\">(SaaS for recipes)</span>":
    "True North <span class=\"text-secondary\">(SaaS для рецептов)</span>",
  "Violumas <span class=\"text-secondary\">(website)</span>":
    "Violumas <span class=\"text-secondary\">(сайт)</span>",
  "All about cbd <span class=\"text-secondary\">(website)</span>":
    "All about cbd <span class=\"text-secondary\">(сайт)</span>",
  "Fratogo <span class=\"text-secondary\">(website)</span>":
    "Fratogo <span class=\"text-secondary\">(сайт)</span>",
  "The kallective <span class=\"text-secondary\">(e-commerce)</span>":
    "The kallective <span class=\"text-secondary\">(интернет-магазин)</span>",
  "Artspective <span class=\"text-secondary\">(web-app for nurses)</span>":
    "Artspective <span class=\"text-secondary\">(веб-приложение для медсестёр)</span>",
  "Eat for life <span class=\"text-secondary\">(recipe mobile app)</span>":
    "Eat for life <span class=\"text-secondary\">(мобильное приложение с рецептами)</span>",
  "BOOMN <span class=\"text-secondary\">(mobile app for creating crypto tokens)</span>":
    "BOOMN <span class=\"text-secondary\">(мобильное приложение для создания криптотокенов)</span>",
  "Foliolens <span class=\"text-secondary\">(desktop app and a website for renting out and renting accommodation)</span>":
    "Foliolens <span class=\"text-secondary\">(десктопное приложение и сайт для сдачи и аренды жилья)</span>",
  "Foliolens <span class=\"text-secondary\">(mobile app for renting out and renting accommodation)</span>":
    "Foliolens <span class=\"text-secondary\">(мобильное приложение для сдачи и аренды жилья)</span>",
  "Planet farm <span class=\"text-secondary\">(social network for farm owners)</span>":
    "Planet farm <span class=\"text-secondary\">(соцсеть для владельцев ферм)</span>",
  "Luner<span class=\"text-secondary\">(crypto exchange)</span> <span class=\"divider\">|</span><a href=\"https://www.luner.com/\" target=\"_blank\" rel=\"noopener\">website</a>":
    "Luner <span class=\"text-secondary\">(криптобиржа)</span> <span class=\"divider\">|</span><a href=\"https://www.luner.com/\" target=\"_blank\" rel=\"noopener\">сайт</a>",
  "and others...":
    "и другие...",
  "Let's work together":
    "Давайте работать вместе",
  "Open to new projects and full-time positions":
    "Открыта к новым проектам и предложениям о работе в штате",
  "email":
    "почта",

  // ---------- Polli.co (projects/polli-co.html) ----------
  "Polli.co — Statkevich Anastasiya":
    "Polli.co — Анастасия Статкевич",
  "Main page":
    "На главную",
  "Designing clarity and control into AI-powered Web3 delegation.":
    "Понятное и управляемое Web3-делегирование на основе ИИ.",
  "As the sole product designer, I designed Polli from early concepts to handoff — turning complex delegation, AI recommendations, and wallet states into an experience users could understand and control.":
    "Как единственный продуктовый дизайнер, я вела Polli от первых концепций до передачи в разработку — превращала сложное делегирование, рекомендации ИИ и состояния кошельков в опыт, который пользователи могли понимать и контролировать.",
  "Year":
    "Год",
  "Lead Product Designer":
    "Ведущий продуктовый дизайнер",
  "Role":
    "Роль",
  "Web app + Website":
    "Веб-приложение + сайт",
  "Platform":
    "Платформа",
  "UX, UI, Design System, Branding, Prototyping, Handoff":
    "UX, UI, дизайн-система, брендинг, прототипирование, передача в разработку",
  "Scope":
    "Задачи",
  "Challenge":
    "Задача",
  "How might we reduce the complexity of delegation without taking control away from experienced users — especially when AI is making recommendations on their behalf?":
    "Как упростить делегирование, не отнимая контроль у опытных пользователей, — особенно когда рекомендации за них даёт ИИ?",
  "My role":
    "Моя роль",
  "Sole Product Designer | ~2 years | End-to-end ownership":
    "Единственный продуктовый дизайнер | ~2 года | Полная ответственность за продукт",
  "<strong>Full design cycle</strong> from moodboard to final UI over ~2 years as the sole designer":
    "<strong>Полный цикл дизайна</strong> — от мудборда до финального UI — за ~2 года в роли единственного дизайнера",
  "Design system built from scratch enabled the web app and website to run in parallel <strong>without losing consistency</strong>":
    "Дизайн-система, созданная с нуля, позволила вести веб-приложение и сайт параллельно <strong>без потери единообразия</strong>",
  "I worked closely and continuously <strong>with the development team</strong> to gain a deeper understanding of the project's workings.":
    "Я тесно и постоянно работала <strong>с командой разработки</strong>, чтобы глубже понимать, как устроен проект.",
  "For a time, I <strong>supervised a second designer</strong> who assisted with marketing materials.":
    "Какое-то время я <strong>руководила вторым дизайнером</strong>, который помогал с маркетинговыми материалами.",
  "Created":
    "Что сделано",
  "Design system":
    "Дизайн-система",
  "Brand + logo":
    "Бренд + логотип",
  "Marketing materials":
    "Маркетинговые материалы",
  "Prototypes":
    "Прототипы",
  "User":
    "Пользователь",
  "The target audience is technically literate users aged 22–50 who understand the crypto market well but want to spend less time on operational decisions. Transparency, control, and speed are what they care about.":
    "Целевая аудитория — технически грамотные пользователи 22–50 лет, которые хорошо разбираются в криптовалютном рынке, но хотят тратить меньше времени на операционные решения. Для них важны прозрачность, контроль и скорость.",
  "Selected UX Decisions":
    "Ключевые UX-решения",
  "Reducing delegation from 7 steps to 3":
    "Сокращение делегирования с 7 шагов до 3",
  "Problem":
    "Проблема",
  "The original delegation flow required users to go through seven separate steps before reaching their goal. Wallet connection, configuration, optimization settings, and validator selection all required separate actions, creating unnecessary friction and cognitive load.":
    "Исходный сценарий делегирования требовал пройти семь отдельных шагов до цели. Подключение кошелька, настройка, параметры оптимизации и выбор валидаторов — всё требовало отдельных действий, создавая лишние трения и когнитивную нагрузку.",
  "Old flow":
    "Старый сценарий",
  "Design decision":
    "Решение",
  "I reduced the flow by removing unnecessary decision points rather than simply cutting screens. Wallet connection became a contextual action, related inputs and recommendations were brought together, and Polli began automatically suggesting the optimal strategy and validator set - while keeping those recommendations editable.":
    "Я сократила сценарий, убрав лишние точки принятия решений, а не просто вырезав экраны. Подключение кошелька стало контекстным действием, связанные поля и рекомендации объединились, а Polli начал автоматически предлагать оптимальную стратегию и набор валидаторов — при этом рекомендации можно изменить.",
  "<strong>The result:</strong> 7 → 3 steps, with fewer decisions required from the user while keeping control available when needed.":
    "<strong>Результат:</strong> 7 → 3 шага, меньше решений со стороны пользователя, а контроль остаётся доступным, когда он нужен.",
  "Updated flow":
    "Обновлённый сценарий",
  "Designing one withdrawal flow for two scenarios":
    "Один сценарий вывода средств для двух случаев",
  "Withdrawals had to support both single and multiple validator selection, but each scenario required different behavior. With one validator selected, users could specify the withdrawal amount; with multiple validators, the amount had to be calculated automatically from their combined balance.":
    "Вывод средств должен был поддерживать выбор как одного, так и нескольких валидаторов, но в каждом случае требовалось разное поведение. При одном валидаторе пользователь мог указать сумму вывода, а при нескольких сумма должна была рассчитываться автоматически из их общего баланса.",
  "Instead of asking users to choose a withdrawal type upfront or creating two separate flows, I designed one adaptive modal. The amount field appears when a single validator is selected and disappears when multiple validators are selected, while the total updates automatically.":
    "Вместо того чтобы заранее спрашивать тип вывода или делать два отдельных сценария, я спроектировала одно адаптивное модальное окно. Поле суммы появляется при выборе одного валидатора и исчезает при выборе нескольких, а итог обновляется автоматически.",
  "<strong>The result:</strong> two technically different withdrawal scenarios work within one consistent flow, with the interface introducing complexity only when it is needed.":
    "<strong>Результат:</strong> два технически разных сценария вывода работают в рамках одного последовательного процесса, а интерфейс добавляет сложность только тогда, когда она действительно нужна.",
  "Option with multi-select":
    "Вариант с множественным выбором",
  "Option with single selector":
    "Вариант с одиночным выбором",
  "Making automated actions visible":
    "Видимость автоматических действий",
  "Polli performs optimization actions in the background, but the original rewards chart focused primarily on performance. Users could see how their rewards changed over time without a clear connection to what Polli was doing along the way.":
    "Polli выполняет действия по оптимизации в фоне, но исходный график вознаграждений был сосредоточен в основном на доходности. Пользователи видели, как менялись их вознаграждения, но не понимали, что в это время делал Polli.",
  "Old chart":
    "Старый график",
  "I brought delegation, redelegation, undelegation, and compounding events directly into the rewards timeline and connected them with the same actions in the activity history. I also redesigned the action icons into a network-agnostic system that could remain consistent across different networks and themes.":
    "Я перенесла события делегирования, переделегирования, отзыва делегирования и реинвестирования прямо на шкалу вознаграждений и связала их с теми же действиями в истории активности. Также переработала иконки действий в систему, не привязанную к конкретной сети, — она остаётся единообразной в разных сетях и темах.",
  "<strong>The result:</strong> The chart now connects performance with Polli’s activity, helping users understand not only what changed, but what happened along the way.":
    "<strong>Результат:</strong> график теперь связывает доходность с действиями Polli и помогает понять не только что изменилось, но и что происходило по пути.",
  "Chart new":
    "Новый график",
  "Making wallet states easy to recognize":
    "Понятные состояния кошельков",
  "With multiple supported wallets, users needed to quickly distinguish between three states: connected, installed but disconnected, and not installed. These states also required different next actions.":
    "При нескольких поддерживаемых кошельках пользователям нужно было быстро различать три состояния: подключён, установлен, но не подключён, и не установлен. Для каждого состояния требовалось своё следующее действие.",
  "I created distinct visual treatments for each state, using color and status cues to communicate both the wallet’s current condition and the action available to the user — continue with the connected wallet, connect an existing one, or install a missing extension.":
    "Я разработала отдельное визуальное оформление для каждого состояния: цвет и статусные метки показывают и текущее состояние кошелька, и доступное действие — продолжить с подключённым кошельком, подключить установленный или установить недостающее расширение.",
  "<strong>The result:</strong> users can scan the available wallets, understand their state at a glance, and immediately see what they need to do next.":
    "<strong>Результат:</strong> пользователи быстро просматривают доступные кошельки, с первого взгляда понимают их состояние и сразу видят, что делать дальше.",
  "Statuses for wallets":
    "Статусы кошельков",
  "Process":
    "Процесс",
  "The project went through a full design cycle — from market research and moodboard to final UI and testing. Three phases, each with its own focus.":
    "Проект прошёл полный цикл дизайна — от исследования рынка и мудборда до финального UI и тестирования. Три этапа, у каждого свой фокус.",
  "Phase 1":
    "Этап 1",
  "Brand &amp; Identity":
    "Бренд и айдентика",
  "Logo design":
    "Дизайн логотипа",
  "Brand identity":
    "Айдентика бренда",
  "The logo needed to work in a Web3 context — legible at small sizes, feeling technical, but standing out from competitors. Several directions explored, one final mark chosen.":
    "Логотип должен был работать в контексте Web3: читаться в маленьком размере, выглядеть технологично и при этом выделяться среди конкурентов. Я проработала несколько направлений и выбрала один финальный знак.",
  "Concept 1":
    "Концепция 1",
  "Concept 2":
    "Концепция 2",
  "Concept 3 (selected)":
    "Концепция 3 (выбрана)",
  "Phase 2":
    "Этап 2",
  "Wireframes &amp; Testing":
    "Вайрфреймы и тестирование",
  "Low-fi":
    "Low-fi",
  "User flows":
    "Пользовательские сценарии",
  "Usability testing":
    "Юзабилити-тестирование",
  "The core challenge was explaining a complex financial process through a simple interface. I did not conduct the research directly. There was a tester on the team, and I also received data from the marketing team, which I used to make changes to the project. The key insight from testing: users didn't just want to see the outcome — they wanted to understand what the AI was doing and why. This reshaped the entire dashboard structure.":
    "Главная сложность была в том, чтобы объяснить сложный финансовый процесс через простой интерфейс. Исследования я не проводила сама: в команде был тестировщик, а также я получала данные от команды маркетинга и вносила по ним изменения в проект. Ключевой вывод тестирования: пользователям мало видеть результат — они хотели понимать, что делает ИИ и почему. Это полностью изменило структуру дашборда.",
  "Wireframes":
    "Вайрфреймы",
  "Phase 3":
    "Этап 3",
  "Concept Exploration":
    "Поиск концепции",
  "Concept":
    "Концепция",
  "Visual language":
    "Визуальный язык",
  "Direction choice":
    "Выбор направления",
  "Three visual directions were explored in parallel to test different levels of density and tone before committing to a single design language for the product.":
    "Параллельно я проработала три визуальных направления, чтобы проверить разную плотность и тон, прежде чем остановиться на едином визуальном языке продукта.",
  "Phase 2 - 3":
    "Этапы 2–3",
  "Web Application":
    "Веб-приложение",
  "Dashboard":
    "Дашборд",
  "AI interface":
    "ИИ-интерфейс",
  "The heart of the product — a dashboard where users see the AI at work: what delegation decisions were made, on what basis, and how the portfolio changed. Transparency became the core UI principle.":
    "Сердце продукта — дашборд, где пользователи видят работу ИИ: какие решения по делегированию были приняты, на каком основании и как изменился портфель. Прозрачность стала главным принципом UI.",
  "Dashboard (scroll)":
    "Дашборд (прокрутка)",
  "Notification center":
    "Центр уведомлений",
  "Wallet sidebar":
    "Боковая панель кошелька",
  "Design System":
    "Дизайн-система",
  "Built from scratch — colour tokens, type scale, components with all states, and developer documentation. This allowed the web app and website to be worked on in parallel without falling out of sync.":
    "Создана с нуля: цветовые токены, типографическая шкала, компоненты со всеми состояниями и документация для разработчиков. Благодаря этому веб-приложение и сайт можно было развивать параллельно, не теряя согласованности.",
  "Colour tokens":
    "Цветовые токены",
  "Fields":
    "Поля ввода",
  "Concept A":
    "Концепция A",
  "Typography":
    "Типографика",
  "Where the project landed":
    "Чем закончился проект",
  "The product reached final UI stage and was handed off to development. In 2026 the project was paused due to the crypto market downturn — a decision unrelated to the quality of the design or the product.":
    "Продукт дошёл до финального UI и был передан в разработку. В 2026 году проект приостановили из-за спада на криптовалютном рынке — это решение не связано с качеством дизайна или продукта.",
  "Impact":
    "Результаты",
  "Over nearly two years, I helped shape Polli from an early-stage concept into a complete, development-ready product — defining the experience, interaction patterns, and design foundation across the platform.":
    "Почти за два года я помогла превратить Polli из ранней концепции в цельный, готовый к разработке продукт — определила пользовательский опыт, паттерны взаимодействия и дизайн-основу всей платформы.",
  "<strong>End-to-end product ownership</strong> <br>Designed the core experience across delegation, portfolio management, rewards, withdrawals, wallets, and settings — taking the product from early exploration and testing through to production-ready UI and engineering implementation.<br>":
    "<strong>Полная ответственность за продукт</strong> <br>Спроектировала ключевой опыт: делегирование, управление портфелем, вознаграждения, вывод средств, кошельки и настройки — и провела продукт от ранних исследований и тестирования до готового к продакшену UI и реализации в разработке.<br>",
  "<strong>Complexity turned into a coherent system</strong> <br>Translated Web3 mechanics, network requirements, and automated processes into consistent interaction patterns that could work across the product without exposing unnecessary technical complexity.<br>":
    "<strong>Сложность превратилась в цельную систему</strong> <br>Перевела механику Web3, требования сетей и автоматические процессы в единые паттерны взаимодействия, которые работают во всём продукте и не нагружают пользователя лишней технической сложностью.<br>",
  "<strong>A scalable design foundation</strong> <br>Built the design system from scratch, covering components, tokens, responsive behavior, states, and documentation needed to support a growing multi-network product.<br>":
    "<strong>Масштабируемая дизайн-основа</strong> <br>Создала дизайн-систему с нуля: компоненты, токены, адаптивное поведение, состояния и документация для растущего мультисетевого продукта.<br>",
  "<strong>Design beyond individual screens</strong> <br>Established a consistent product and visual language that could scale as Polli expanded to new features, networks, and use cases.<br>":
    "<strong>Дизайн шире отдельных экранов</strong> <br>Сформировала единый продуктовый и визуальный язык, который масштабируется по мере того, как Polli добавляет новые функции, сети и сценарии.<br>",

  // ---------- Extructor (projects/extructor.html) ----------
  "Extructor — Statkevich Anastasiya": "Extructor — Анастасия Статкевич",
  "Exchange Service Builder":
    "Конструктор обменных сервисов",
  "I joined the project at an early stage and helped shape the product as it grew — rebuilding its design system, designing the admin experience and complex configuration interfaces, and adapting the platform across multiple breakpoints.":
    "Я присоединилась к проекту на раннем этапе и помогала формировать продукт по мере его роста: перестроила дизайн-систему, спроектировала админ-панель и сложные интерфейсы настройки, адаптировала платформу под разные брейкпоинты.",
  "Product Designer":
    "Продуктовый дизайнер",
  "UX, UI, Design System, Prototyping, Handoff":
    "UX, UI, дизайн-система, прототипирование, передача в разработку",
  "Running a crypto exchange involves managing a large number of settings, currencies, transactions, and operational states. Extructor needed to give exchange owners enough flexibility and control to configure their service and manage its day-to-day operations — without making the admin experience overwhelming.":
    "Работа криптообменника — это множество настроек, валют, транзакций и операционных состояний. Extructor должен был дать владельцам обменников достаточно гибкости и контроля, чтобы настраивать сервис и управлять им каждый день, — и при этом не перегрузить админ-панель.",
  "The challenge was to turn this complexity into a clear and scalable interface: organize configuration options, establish predictable interaction patterns, and make complex workflows easier to navigate as the product continued to grow.":
    "Задача состояла в том, чтобы превратить эту сложность в понятный и масштабируемый интерфейс: упорядочить настройки, задать предсказуемые паттерны взаимодействия и упростить навигацию по сложным процессам по мере роста продукта.",
  "<strong>Established a scalable design foundation,</strong> rebuilding the early design system and bringing consistency to existing screens and components.":
    "<strong>Заложила масштабируемую дизайн-основу:</strong> перестроила раннюю дизайн-систему и привела к единому виду существующие экраны и компоненты.",
  "<strong>Designed key parts of the admin panel from the ground up,</strong> translating complex product requirements into clear flows, settings, and interaction patterns.":
    "<strong>Спроектировала ключевые разделы админ-панели с нуля,</strong> переводя сложные продуктовые требования в понятные сценарии, настройки и паттерны взаимодействия.",
  "<strong>Created responsive experiences across multiple breakpoints,</strong> defining how complex layouts and components adapt to different screen sizes.":
    "<strong>Сделала адаптив под несколько брейкпоинтов,</strong> определив, как сложные макеты и компоненты подстраиваются под разные размеры экрана.",
  "<strong>Worked closely with product and development</strong>, designing complex interactions, covering different states and preparing components and screens for implementation.":
    "<strong>Тесно работала с продуктом и разработкой</strong>: проектировала сложные взаимодействия, прорабатывала разные состояния и готовила компоненты и экраны к реализации.",
  "Responsive design":
    "Адаптивный дизайн",
  "Logo":
    "Логотип",
  "Crypto-savvy entrepreneurs who want to launch and run their own exchange without technical expertise.":
    "Предприниматели, разбирающиеся в криптовалютах, которые хотят запустить и вести собственный обменник без технической экспертизы.",
  "They understand the crypto market and how an exchange business works, but don’t necessarily have coding or development skills. They need a simple way to set up, customize, and manage their exchange independently — so they can focus on running and growing the business rather than dealing with its technical implementation.":
    "Они понимают криптовалютный рынок и то, как устроен обменный бизнес, но не обязательно умеют программировать. Им нужен простой способ самостоятельно запустить, настроить и вести обменник — чтобы сосредоточиться на работе и развитии бизнеса, а не на его технической реализации.",
  "Making high-volume exchange management easier":
    "Упрощение работы с большим потоком заявок",
  "Operators needed to monitor a large number of exchange requests with different statuses, currencies, payment methods, and levels of urgency. Showing all of this information at once could quickly make the workspace difficult to navigate.":
    "Операторам нужно было отслеживать множество заявок на обмен с разными статусами, валютами, способами оплаты и уровнем срочности. Если показать всю эту информацию сразу, в рабочем пространстве быстро становится сложно ориентироваться.",
  "I designed a flexible operational workspace that combines quick status views, advanced filters, operator-based filtering, and customizable table columns. From the list, operators can open an individual request to see its history, key transaction details, and available actions in one place.":
    "Я спроектировала гибкое рабочее пространство, где есть быстрые представления по статусам, расширенные фильтры, фильтр по операторам и настраиваемые колонки таблицы. Из списка оператор может открыть отдельную заявку и увидеть её историю, ключевые детали транзакции и доступные действия в одном месте.",
  "<strong>The result:</strong> Operators can quickly narrow down large volumes of requests, focus on the information relevant to their task, and move from identifying an issue to managing a specific exchange within the same workflow.":
    "<strong>Результат:</strong> операторы быстро сужают большой объём заявок, сосредотачиваются на информации, важной для текущей задачи, и переходят от выявления проблемы к работе с конкретным обменом, не выходя из процесса.",
  "Monitor &amp; identify":
    "Отслеживание и выявление",
  "Narrow &amp; customize":
    "Фильтрация и настройка",
  "Review &amp; act":
    "Проверка и действие",
  "Keeping user context visible during complex investigations":
    "Контекст пользователя во время сложных проверок",
  "When reviewing suspicious or problematic activity, operators may need to move between a user’s exchanges, activity history, card verifications, AML checks, and blocked data. With this amount of information, it is easy to lose the context of the person being investigated.":
    "При проверке подозрительной или проблемной активности операторам приходится переключаться между обменами пользователя, историей активности, верификациями карт, AML-проверками и заблокированными данными. При таком объёме информации легко потерять контекст человека, которого проверяют.",
  "I kept a persistent user summary visible while organizing detailed information into task-specific views. Operators can move deeper into transaction, behavioral, or risk data while key user context and account-level actions remain accessible.":
    "Я сделала постоянно видимую сводку о пользователе, а подробную информацию разложила по отдельным представлениям под конкретные задачи. Оператор может углубляться в данные о транзакциях, поведении или рисках, а ключевой контекст и действия с аккаунтом остаются под рукой.",
  "<strong>The result:</strong> Operators can investigate different aspects of a user’s activity without repeatedly navigating back to the profile or losing track of the account they are reviewing.":
    "<strong>Результат:</strong> операторы изучают разные аспекты активности пользователя, не возвращаясь постоянно в профиль и не теряя из виду проверяемый аккаунт.",
  "User overview":
    "Обзор пользователя",
  "Behavioral context":
    "Поведенческий контекст",
  "Risk context":
    "Контекст рисков",
  "Building resilience into exchange directions":
    "Устойчивость направлений обмена",
  "Exchange directions depended on external payment services that could become unavailable, run out of reserves, or temporarily stop processing transactions. Relying on a single service could make the entire direction unavailable.":
    "Направления обмена зависели от внешних платёжных сервисов, которые могли стать недоступными, исчерпать резервы или временно перестать обрабатывать транзакции. Если опираться на один сервис, всё направление могло стать недоступным.",
  "I designed a priority-based service configuration that allows operators to assign multiple payment services to the same exchange direction. The system separates active and unavailable services, surfaces operational issues, and lets operators control service priority — so an alternative route can remain available when one of the services cannot process an exchange.":
    "Я спроектировала настройку сервисов с приоритетами: операторы могут назначить несколько платёжных сервисов на одно направление обмена. Система разделяет активные и недоступные сервисы, подсвечивает операционные проблемы и позволяет управлять приоритетом — так альтернативный маршрут остаётся доступным, если один из сервисов не может провести обмен.",
  "<strong>The result:</strong> Operators can respond to service disruptions without disabling or rebuilding the entire exchange direction, while keeping alternative payment routes ready within the same configuration.":
    "<strong>Результат:</strong> операторы реагируют на сбои сервисов, не отключая и не пересобирая всё направление обмена, а альтернативные платёжные маршруты всегда готовы в той же настройке.",
  "Detect operational issues":
    "Выявление операционных проблем",
  "Configure prioritized alternatives":
    "Настройка резервных сервисов по приоритету",
  "The project evolved continuously rather than through a fixed sequence of design phases. My work was split across several overlapping workstreams as the product moved from its initial foundation into active development.":
    "Проект развивался непрерывно, а не по фиксированной последовательности этапов. Моя работа шла в нескольких параллельных направлениях, пока продукт переходил от базовой основы к активной разработке.",
  "Mapping the exchange&nbsp;logic":
    "Карта логики обмена",
  "UX design":
    "UX-дизайн",
  "User flow":
    "Пользовательский сценарий",
  "Map":
    "Карта",
  "Before designing the interface, I mapped the complete exchange flow — from application creation to completion, including status transitions, verification steps, cancellations, expirations, and alternative scenarios.":
    "Прежде чем проектировать интерфейс, я составила карту всего процесса обмена — от создания заявки до завершения, включая смену статусов, шаги верификации, отмены, истечение сроков и альтернативные сценарии.",
  "This helped me understand how different conditions affected the application lifecycle and gave us a shared model for translating complex business logic into the product.":
    "Это помогло понять, как разные условия влияют на жизненный цикл заявки, и дало команде общую модель для перевода сложной бизнес-логики в продукт.",
  "Wireframe":
    "Вайрфрейм",
  "Orders":
    "Заявки",
  "UX/UI design":
    "UX/UI-дизайн",
  "Prototyping":
    "Прототипирование",
  "With the exchange logic mapped out, I moved on to the core operational workflow — applications. I designed the application list for managing the overall workload and the application page for processing each exchange.":
    "Разобравшись с логикой обмена, я перешла к ключевому операционному процессу — заявкам. Спроектировала список заявок для управления общей нагрузкой и страницу заявки для обработки каждого обмена.",
  "The main challenge was to translate a highly branched process into an interface where operators could quickly understand the current state, see what required attention, and take the right next action.":
    "Главная сложность — перевести сильно разветвлённый процесс в интерфейс, где оператор быстро понимает текущее состояние, видит, что требует внимания, и выбирает правильное следующее действие.",
  "Order page":
    "Страница заявки",
  "Users":
    "Пользователи",
  "As the operational workflow grew, looking at individual applications was no longer enough. Operators needed to understand the broader context behind each user — their exchange history, activity, verification data, linked details, and potential risk signals.":
    "По мере роста операционных процессов отдельных заявок стало недостаточно. Операторам нужно было понимать более широкий контекст каждого пользователя: историю обменов, активность, данные верификации, связанные данные и возможные сигналы риска.",
  "I designed the user profile as a consolidated workspace where operators could investigate a user and make informed decisions without piecing together information across separate parts of the system.":
    "Я спроектировала профиль пользователя как единое рабочее пространство, где оператор может изучить пользователя и принять взвешенное решение, не собирая информацию по разным частям системы.",
  "Card verifications":
    "Верификация карт",
  "Blacklist":
    "Чёрный список",
  "Settings":
    "Настройки",
  "As the product grew, more of its behavior needed to become configurable. I worked on identifying which rules should remain part of the core product logic and which administrators needed to control themselves.":
    "По мере роста продукта всё больше его поведения нужно было сделать настраиваемым. Я определяла, какие правила должны остаться частью базовой логики продукта, а какими администраторы должны управлять сами.",
  "This resulted in a configuration model covering restrictions, payment and payout logic, application behavior, and customer-facing settings for each exchange direction.":
    "В результате появилась модель настроек, охватывающая ограничения, логику оплат и выплат, поведение заявок и клиентские настройки для каждого направления обмена.",
  "Exchange settings":
    "Настройки обмена",
  "Currencies":
    "Валюты",
  "Visual - login page":
    "Визуал — страница входа",
  "Visual - exchange":
    "Визуал — обмен",
  "The initial design system needed to support a rapidly growing product with complex tables, forms, statuses, settings, and multiple interface states. I restructured it into a consistent component system that could be reused across the admin panel and translated more clearly into development.":
    "Исходная дизайн-система должна была поддерживать быстро растущий продукт со сложными таблицами, формами, статусами, настройками и множеством состояний интерфейса. Я перестроила её в последовательную систему компонентов, которую можно переиспользовать по всей админ-панели и понятнее передавать в разработку.",
  "As new features were designed, the system evolved alongside the product. Components were expanded with reusable variants, states, and responsive behavior, helping maintain consistency across increasingly complex workflows and reducing the need to design recurring patterns from scratch.":
    "По мере появления новых функций система развивалась вместе с продуктом. Компоненты дополнялись переиспользуемыми вариантами, состояниями и адаптивным поведением — это помогало сохранять единообразие во всё более сложных процессах и реже проектировать повторяющиеся паттерны с нуля.",
  "Some examples of design system pages:":
    "Несколько примеров страниц дизайн-системы:",
  "Calendar":
    "Календарь",
  "Header":
    "Хедер",
  "Tables":
    "Таблицы",
  "Rules for modals":
    "Правила для модальных окон",
  "Extructor progressed into active development, with the core admin experience, design system, and key product flows designed and handed off to the development team.":
    "Extructor перешёл в активную разработку: ключевые разделы админ-панели, дизайн-система и основные продуктовые сценарии спроектированы и переданы команде разработки.",
  "Mapped complex exchange logic into clear operational workflows.":
    "Перевела сложную логику обмена в понятные операционные процессы.",
  "Designed the core admin experience from applications to system configuration.":
    "Спроектировала ключевые разделы админ-панели — от заявок до системных настроек.",
  "Created a scalable framework for configuring multiple exchange scenarios.":
    "Создала масштабируемую основу для настройки разных сценариев обмена.",
  "Restructured and expanded the design system for a growing product.":
    "Перестроила и расширила дизайн-систему для растущего продукта.",
  "Prepared key product flows and components for development handoff.":
    "Подготовила ключевые продуктовые сценарии и компоненты к передаче в разработку.",

  // ---------- Meal.Prep (projects/meal prep.html) ----------
  "MEAL.PREP — Statkevich Anastasiya":
    "MEAL.PREP — Анастасия Статкевич",
  "Meal planning &amp; food delivery app":
    "Приложение для планирования питания и доставки еды",
  "Meal.Prep is a mobile app for planning and ordering meals for days or weeks ahead. Users can build a personalized meal plan based on their dietary preferences and schedule, then manage the entire order in one place.":
    "Meal.Prep — мобильное приложение для планирования и заказа еды на несколько дней или недель вперёд. Пользователь собирает персональный план питания с учётом своих предпочтений и графика, а затем управляет всем заказом в одном месте.",
  "Lead Designer":
    "Ведущий дизайнер",
  "Unlike a typical food delivery app, Meal.Prep requires users to make multiple decisions before placing an order — from dietary preferences and meal selection to planning several days ahead.":
    "В отличие от обычного приложения доставки, в Meal.Prep пользователю нужно принять несколько решений до оформления заказа — от предпочтений в питании и выбора блюд до планирования на несколько дней вперёд.",
  "The challenge was to make this configuration-heavy experience feel simple and familiar, while designing the complete mobile product from scratch within three weeks and adapting the existing brand to a functional UI.":
    "Задача — сделать этот опыт с большим количеством настроек простым и привычным, спроектировать весь мобильный продукт с нуля за три недели и адаптировать существующий бренд к функциональному интерфейсу.",
  "As the sole designer, <strong>I owned the end-to-end product design</strong>, from early flows and wireframes to final UI, within three weeks.":
    "Как единственный дизайнер, <strong>я отвечала за весь продуктовый дизайн</strong> — от первых сценариев и вайрфреймов до финального UI — за три недели.",
  "<strong>Defined the core</strong> user flows and interaction patterns for meal planning, ordering, and checkout.":
    "<strong>Определила ключевые</strong> пользовательские сценарии и паттерны взаимодействия для планирования питания, заказа и оплаты.",
  "<strong>Built a scalable design system</strong> to keep the product consistent and speed up implementation.":
    "<strong>Создала масштабируемую дизайн-систему</strong>, чтобы продукт оставался единообразным, а разработка шла быстрее.",
  "<strong>Created and tested an interactive prototype</strong>, then prepared the designs and components for developer handoff.":
    "<strong>Сделала и протестировала интерактивный прототип</strong>, затем подготовила макеты и компоненты к передаче в разработку.",
  "wireframes":
    "Вайрфреймы",
  "The user is a busy person who prefers to plan meals ahead rather than decide what to eat every day. They value convenience and want their meal plan to fit their dietary preferences, schedule, and everyday routine.":
    "Наш пользователь — занятой человек, который предпочитает планировать питание заранее, а не решать каждый день, что съесть. Он ценит удобство и хочет, чтобы план питания учитывал его предпочтения, график и повседневный ритм.",
  "Letting users start before signing up":
    "Начать можно без регистрации",
  "Requiring an account before users could explore the product would add friction before they had received any value from it.":
    "Если требовать аккаунт до знакомства с продуктом, это создаёт барьер ещё до того, как пользователь получил какую-либо пользу.",
  "Allow users to start building their meal plan as guests. Registration is introduced only after they have already selected their dietary preferences and started configuring the plan.":
    "Позволить пользователям начать собирать план питания в гостевом режиме. Регистрация появляется только после того, как они уже выбрали предпочтения и начали настраивать план.",
  "<strong>The result:</strong> Users can experience the core value of Meal.Prep before being asked to create an account, while their previous choices carry into the next step.":
    "<strong>Результат:</strong> пользователи ощущают ключевую ценность Meal.Prep до того, как их попросят создать аккаунт, а сделанный выбор сохраняется на следующем шаге.",
  "Turning meal planning into a guided flow":
    "Планирование питания как пошаговый сценарий",
  "Creating a meal plan requires users to make several connected choices — dietary preferences, meal type, plan duration, and other options. Showing everything at once would make ordering feel unnecessarily complex.":
    "Чтобы создать план питания, нужно сделать несколько связанных выборов: предпочтения, тип питания, длительность плана и другие параметры. Если показать всё сразу, заказ покажется излишне сложным.",
  "Break the configuration into a guided sequence, grouping related choices and showing users only the information needed at each stage.":
    "Разбить настройку на пошаговую последовательность: сгруппировать связанные выборы и показывать на каждом этапе только нужную информацию.",
  "<strong>The result:</strong> A multi-parameter meal plan becomes a step-by-step ordering flow rather than one complex configuration screen.":
    "<strong>Результат:</strong> план питания со множеством параметров превращается в пошаговый сценарий заказа, а не в один сложный экран настроек.",
  "Making recurring delivery flexible":
    "Гибкая регулярная доставка",
  "A multi-day meal plan cannot assume the same delivery schedule works every day. Users may need to choose when deliveries begin, select a convenient time window, or skip particular days.":
    "Для плана на несколько дней нельзя исходить из того, что один и тот же график доставки подходит каждый день. Пользователю может понадобиться выбрать дату начала доставок, удобный временной интервал или пропустить определённые дни.",
  "I kept delivery scheduling inside the order flow, allowing users to set the first delivery date and time window and add days off without leaving their meal plan.":
    "Я оставила настройку доставки внутри сценария заказа: пользователь задаёт дату первой доставки и временной интервал и добавляет выходные дни, не покидая свой план питания.",
  "<strong>The result:</strong> Users can adapt a recurring meal plan to their actual schedule before committing to the order.":
    "<strong>Результат:</strong> пользователь подстраивает регулярный план питания под свой реальный график ещё до подтверждения заказа.",
  "Delivery settings":
    "Настройки доставки",
  "Prioritizing payment over order details":
    "Приоритет оплаты над деталями заказа",
  "On the payment screen, users still need access to their order details, but displaying the full summary competes with the information required to complete payment.":
    "На экране оплаты пользователю по-прежнему нужен доступ к деталям заказа, но полная сводка отвлекает от информации, необходимой для оплаты.",
  "I made the order summary collapsible: the key information remains visible and the full details stay accessible, without dominating the screen.":
    "Я сделала сводку заказа сворачиваемой: ключевая информация остаётся на виду, полные детали доступны, но не занимают весь экран.",
  "<strong>The result:</strong> Payment methods receive visual priority while users can still review their order whenever needed.":
    "<strong>Результат:</strong> способы оплаты получают визуальный приоритет, а пользователь в любой момент может посмотреть свой заказ.",
  "Order view":
    "Просмотр заказа",
  "Competitor research":
    "Анализ конкурентов",
  "References":
    "Референсы",
  "Tone &amp; feel":
    "Тон и настроение",
  "I reviewed meal-planning and food delivery apps, including Level Kitchen, Grow Food, and JustFood, focusing on how they structure plan selection, meal customization, and ordering.":
    "Я изучила приложения для планирования питания и доставки еды, в том числе Level Kitchen, Grow Food и JustFood, обращая внимание на то, как в них устроены выбор плана, настройка блюд и заказ.",
  "The research showed that most products offered similar functionality, but often presented meal plans and configuration options all at once. For Meal.Prep, I focused on reducing that complexity by grouping related choices and guiding users through the ordering process step by step.":
    "Анализ показал, что у большинства продуктов похожий функционал, но планы питания и настройки часто показаны все сразу. В Meal.Prep я сосредоточилась на снижении этой сложности: сгруппировала связанные выборы и провела пользователя через заказ шаг за шагом.",
  "Competitor references":
    "Референсы конкурентов",
  "Wireframes &amp; Flow Validation":
    "Вайрфреймы и проверка сценариев",
  "Flow validation":
    "Проверка сценариев",
  "I mapped the core user flows in low-fidelity wireframes and connected them into a clickable prototype. Testing the complete journey helped me identify missing states, interaction gaps, and points where the ordering flow needed to be simplified.":
    "Я проработала ключевые пользовательские сценарии в low-fi вайрфреймах и связала их в кликабельный прототип. Тестирование всего пути помогло найти недостающие состояния, пробелы во взаимодействии и места, где сценарий заказа нужно было упростить.",
  "Prototype in Figma":
    "Прототип в Figma",
  "3 Concepts":
    "3 концепции",
  "Meal.Prep already had an established brand identity, including its signature orange, but the mobile product had no defined visual language. I explored three directions for translating the brand into a functional app interface.":
    "У Meal.Prep уже была сложившаяся айдентика с фирменным оранжевым цветом, но визуального языка для мобильного продукта не было. Я проработала три направления того, как перенести бренд в функциональный интерфейс приложения.",
  "I selected the third direction because its clear hierarchy, restrained use of brand color, and consistent card-based system made meal plans easier to scan while giving the product a distinct visual identity.":
    "Я выбрала третье направление: чёткая иерархия, сдержанное использование фирменного цвета и последовательная система карточек упростили просмотр планов питания и при этом придали продукту узнаваемый визуальный стиль.",
  "Final UI &amp; Core Flows":
    "Финальный UI и ключевые сценарии",
  "Mobile App":
    "Мобильное приложение",
  "The final UI brought the validated flows and selected visual direction into one consistent product experience. I designed the complete journey — from onboarding and meal-plan configuration to delivery, payment, order management, and support.":
    "Финальный UI объединил проверенные сценарии и выбранное визуальное направление в цельный продуктовый опыт. Я спроектировала весь путь пользователя — от онбординга и настройки плана питания до доставки, оплаты, управления заказами и поддержки.",
  "As the flows moved into high-fidelity design, I also refined edge cases and supporting states that emerged from testing the complete experience.":
    "При переходе к детализированному дизайну я также проработала пограничные случаи и вспомогательные состояния, выявленные при тестировании всего опыта.",
  "Onboarding &amp; Account":
    "Онбординг и аккаунт",
  "Meal Planning &amp; Checkout":
    "Планирование питания и оформление заказа",
  "Order Management &amp; Support":
    "Управление заказами и поддержка",
  "To keep the product consistent and move quickly within the three-week timeline, I built a lightweight design system alongside the app. It covered reusable components, interaction states, typography, color tokens, and core UI patterns, making both iteration and developer handoff faster.":
    "Чтобы сохранить единообразие продукта и уложиться в три недели, я параллельно с приложением создала лёгкую дизайн-систему. В неё вошли переиспользуемые компоненты, состояния взаимодействия, типографика, цветовые токены и базовые UI-паттерны — это ускорило и итерации, и передачу в разработку.",
  "Colour Tokens":
    "Цветовые токены",
  "Buttons &amp; Chips":
    "Кнопки и чипсы",
  "Menu":
    "Меню",
  "Icons":
    "Иконки",
  "UI Elements":
    "UI-элементы",
  "Controls":
    "Контролы",
  "Shadows":
    "Тени",
  "Statuses":
    "Статусы",
  "By the end of the three-week design sprint, the complete mobile experience was ready for development, including the core ordering flows, supporting states, interactive prototype, and design system.":
    "К концу трёхнедельного дизайн-спринта весь мобильный опыт был готов к разработке: ключевые сценарии заказа, вспомогательные состояния, интерактивный прототип и дизайн-система.",
  "The final experience turned a configuration-heavy meal-planning process into a guided flow covering plan selection, delivery scheduling, payment, and order management.":
    "Финальный опыт превратил процесс планирования питания с большим количеством настроек в пошаговый сценарий: выбор плана, настройка доставки, оплата и управление заказом.",
  "Outcome":
    "Итоги",
  "Delivered the complete mobile product design within three weeks":
    "Спроектировала весь мобильный продукт за три недели",
  "Turned a complex meal-planning process into a guided end-to-end ordering flow":
    "Превратила сложный процесс планирования питания в пошаговый сценарий заказа от начала до конца",
  "Designed the experience from onboarding and plan configuration to delivery, payment, and order management":
    "Спроектировала опыт от онбординга и настройки плана до доставки, оплаты и управления заказами",
  "Built a reusable design system covering components, states, and core UI patterns":
    "Создала переиспользуемую дизайн-систему с компонентами, состояниями и базовыми UI-паттернами",
  "Prepared the final designs, prototype, and component library for developer handoff":
    "Подготовила финальные макеты, прототип и библиотеку компонентов к передаче в разработку",

  // ---------- Kernle (projects/kernle.html) ----------
  "Kernle — Statkevich Anastasiya":
    "Kernle — Анастасия Статкевич",
  "Directing AI to design and build a chatbot builder — from moodboard to live prototype.":
    "Как я руководила ИИ, чтобы спроектировать и собрать конструктор чат-ботов — от мудборда до работающего прототипа.",
  "As the sole designer, I created Kernle through vibe coding: I described the product in prompts, and AI wrote the code. My job was everything the code could not decide on its own — art direction, the design system, motion, and the rules that kept a fast AI workflow from breaking a working product.":
    "Как единственный дизайнер, я создала Kernle методом вайб-кодинга: описывала продукт в промтах, а код писал ИИ. Моя задача — всё, что код не может решить сам: арт-дирекция, дизайн-система, моушн и правила, которые не давали быстрой работе с ИИ сломать работающий продукт.",
  "Product Designer, AI-assisted build":
    "Продуктовый дизайнер, разработка с ИИ",
  "Art direction, UI, Design System, Motion, Prompting, Prototyping":
    "Арт-дирекция, UI, дизайн-система, моушн, промтинг, прототипирование",
  "Sole Designer | Vibe coding with Lovable | End-to-end ownership":
    "Единственный дизайнер | Вайб-кодинг в Lovable | Полная ответственность за результат",
  "<strong>Full design cycle</strong> from moodboard to a deployed prototype, without hand-writing code":
    "<strong>Полный цикл дизайна</strong> — от мудборда до опубликованного прототипа, без ручного написания кода",
  "A <strong>structured prompt system</strong> with logic guards, so the redesign never touched auth, onboarding, billing, or data":
    "<strong>Система промтов</strong> с защитой логики: редизайн не затронул регистрацию, онбординг, оплату и данные",
  "Design system set up as global tokens first, so every page changed <strong>without losing consistency</strong>":
    "Дизайн-система заложена глобальными токенами в первую очередь, поэтому все страницы обновились <strong>без потери целостности</strong>",
  "Kept the product <strong>fully bilingual (EN / RU)</strong> by routing all copy through the translation system":
    "Продукт остался <strong>полностью двуязычным (EN / RU)</strong>: все тексты проходят через систему переводов",
  "Landing page":
    "Лендинг",
  "Training loader":
    "Лоадер обучения",
  "Web app restyle":
    "Рестайл приложения",
  "Prompt system":
    "Система промтов",
  "Live prototype":
    "Живой прототип",
  "The target audience is small business owners, support and marketing teams, and non-technical founders who already have documentation or a help center. They want a support chatbot without involving developers. Speed, a bot that looks like their brand, and zero code are what they care about.":
    "Целевая аудитория — владельцы малого бизнеса, команды поддержки и маркетинга, нетехнические основатели, у которых уже есть документация или справочный центр. Они хотят бота поддержки без участия разработчиков. Для них важны скорость, бот в стиле их бренда и отсутствие кода.",
  "The project went from moodboard to a live prototype in a fully AI-assisted workflow. Three phases, each with its own focus.":
    "Проект прошёл путь от мудборда до живого прототипа полностью в работе с ИИ. Три фазы, у каждой свой фокус.",
  "Moodboard &amp; Direction":
    "Мудборд и направление",
  "Moodboard":
    "Мудборд",
  "Visual concept":
    "Визуальная концепция",
  "Art direction":
    "Арт-дирекция",
  "I collected references with light rings, soft halos, particle waves, and iridescent gradients on black. From them came the core idea: a glowing “knowledge core” that stands for the bot’s understanding and appears across the product.":
    "Я собрала референсы: световые кольца, мягкие ореолы, волны частиц и переливающиеся градиенты на чёрном. Из них выросла главная идея — светящееся «ядро знаний», которое символизирует понимание бота и проходит через весь продукт.",
  "Audit &amp; Prompt System":
    "Аудит и система промтов",
  "Project audit":
    "Аудит проекта",
  "Logic guards":
    "Защита логики",
  "Prompt structure":
    "Структура промтов",
  "The app already worked, so the first step was not design but protection. An audit in chat mode mapped which files held styling and which held logic. From that map, I wrote a prompt template: a guard naming untouched files, one focused task, and translation rules for both languages.":
    "Приложение уже работало, поэтому первым шагом стал не дизайн, а защита. Аудит в режиме чата показал, в каких файлах стили, а в каких логика. На основе этой карты я написала шаблон промта: ограничения с перечнем нетронутых файлов, одна конкретная задача и правила переводов для обоих языков.",
  "Audit":
    "Аудит",
  "Visual Build":
    "Визуальная сборка",
  "Design tokens":
    "Дизайн-токены",
  "App restyle":
    "Рестайл приложения",
  "I rebuilt the product in a strict order: global design system first, then the header and hero, the how-it-works and features sections, and pricing. Each step was checked in the live app before moving on.":
    "Я пересобирала продукт в строгом порядке: сначала глобальная дизайн-система, затем шапка и hero, секции «Как это работает» и «Возможности», цены. Каждый шаг проверялся в живом приложении, прежде чем переходить к следующему.",
  "Training Loader":
    "Лоадер обучения",
  "Motion":
    "Моушн",
  "Stages":
    "Этапы",
  "Iteration":
    "Итерации",
  "The loader went through two versions: solid light ribbons, then a soft halo that matches the landing page. It uses the real names of uploaded sources and replaces the old timer without changing how onboarding works.":
    "Лоадер прошёл две версии: чёткие световые ленты, затем мягкий ореол в стиле главной страницы. Он использует реальные названия загруженных источников и заменяет старый таймер, не меняя работу онбординга.",
  "Set up as global tokens before any section was touched — colour, type, glass surfaces, glows, and button states. Old class names were kept as aliases, so the dashboard and editor took on the new look without anything breaking.":
    "Заложена глобальными токенами до работы над секциями: цвет, типографика, стеклянные поверхности, свечения и состояния кнопок. Старые названия классов сохранены как алиасы, поэтому дашборд и редактор получили новый вид без поломок.",
  "Surfaces &amp; glows":
    "Поверхности и свечения",
  "Kernle is a live concept prototype deployed on Vercel. Data is stored in the browser and bot training is simulated, so it is not a production product — it shows the full experience and the visual direction end to end. Fittingly, the footer says it was trained on documents, not vibes; the interface itself was built on vibes.":
    "Kernle — живой концепт-прототип, опубликованный на Vercel. Данные хранятся в браузере, а обучение бота имитируется, поэтому это не продакшн-продукт: прототип показывает весь опыт и визуальное направление целиком. Символично, что в футере написано «обучен на документах, а не на вайбах», — а сам интерфейс собран именно на вайбах.",
  "I took Kernle from a set of references to a working, bilingual prototype — and tested how far a designer can lead a build with AI while keeping design quality and product stability under control.":
    "Я провела Kernle от набора референсов до работающего двуязычного прототипа — и проверила, насколько далеко дизайнер может вести разработку с ИИ, сохраняя контроль над качеством дизайна и стабильностью продукта.",
  "<strong>Vibe coding with design ownership</strong><br>AI wrote the code, but every decision about composition, colour, motion, and when to stop was mine.":
    "<strong>Вайб-кодинг с дизайнерской ответственностью</strong><br>Код писал ИИ, но все решения о композиции, цвете, моушне и о том, когда остановиться, принимала я.",
  "<strong>A process that protects the product</strong><br>The audit and prompt guards turned a risky full redesign into small, reviewable steps.":
    "<strong>Процесс, который защищает продукт</strong><br>Аудит и ограничения в промтах превратили рискованный полный редизайн в небольшие проверяемые шаги.",
  "<strong>One visual idea across the whole product</strong><br>The knowledge core links the landing page, the demo chat, and the training loader into one experience.":
    "<strong>Одна визуальная идея во всём продукте</strong><br>Ядро знаний связывает главную страницу, демо-чат и лоадер обучения в единый опыт.",
  "<strong>Motion with a purpose</strong><br>The loader turns waiting into an explanation of what the product does with the user’s documents.":
    "<strong>Моушн со смыслом</strong><br>Лоадер превращает ожидание в объяснение того, что продукт делает с документами пользователя.",
  "How might we make turning company docs into a working, embeddable chatbot simple enough for a non-technical team to finish in one sitting — and valuable enough that they want to pay for it?":
    "Как сделать так, чтобы превратить документы компании в работающего встраиваемого чат-бота было достаточно просто для нетехнической команды — за один подход, — и достаточно ценно, чтобы за это захотелось платить?",
  "The project started as a test assignment: a landing page and a clickable web app, built with AI tools and treated as a real product ready to launch, not a demo.":
    "Проект начался как тестовое задание: лендинг и кликабельное веб-приложение, собранные с помощью ИИ-инструментов, — как настоящий продукт, готовый к запуску, а не демо.",
  "Getting to a working bot in three steps":
    "Работающий бот за три шага",
  "A chatbot builder starts with an empty page: users don’t know what to upload, how much is enough, or what the result will look like. Every setup step before the first answer is a reason to leave.":
    "Конструктор чат-ботов начинается с пустой страницы: пользователь не знает, что загружать, сколько этого нужно и как будет выглядеть результат. Каждый шаг настройки до первого ответа — повод уйти.",
  "Onboarding":
    "Онбординг",
  "Onboarding asks only for what the bot needs to exist: a name, a purpose, and sources — files, a website link, or pasted text. Everything else has a sensible default, so even a skipped name becomes “My first bot”. A short training screen shows the user’s own sources being read, then opens the new bot straight in the editor, ready to chat.":
    "Онбординг спрашивает только то, без чего бот не может существовать: имя, назначение и источники — файлы, ссылку на сайт или вставленный текст. У всего остального есть разумные значения по умолчанию: даже пропущенное имя превращается в «My first bot». Короткий экран обучения показывает, как читаются источники пользователя, и сразу открывает нового бота в редакторе, готового к диалогу.",
  "<strong>The result:</strong> from sign-up to the first answer in one sitting, with no empty screens and no settings to fill in upfront.":
    "<strong>Результат:</strong> от регистрации до первого ответа за один подход — без пустых экранов и настроек, которые нужно заполнить заранее.",
  "Training screen":
    "Экран обучения",
  "Testing, sources and settings in one place":
    "Тестирование, источники и настройки в одном месте",
  "Before putting a bot in front of customers, users need to check what it actually knows. If testing, uploading, and customizing lived on separate pages, every fix would mean jumping back and forth.":
    "Прежде чем показывать бота клиентам, нужно проверить, что он действительно знает. Если бы тестирование, загрузка и настройка жили на разных страницах, каждое исправление превращалось бы в прыжки туда и обратно.",
  "Each bot has one editor: a ChatGPT-like chat for testing sits next to the bot’s sources, behavior, and appearance settings. Users can add a document, retrain the bot, and ask again without leaving the page, while a save bar appears only when there are unsaved changes.":
    "У каждого бота один редактор: чат в стиле ChatGPT для тестирования находится рядом с источниками, настройками поведения и внешнего вида. Можно добавить документ, переобучить бота и спросить снова, не уходя со страницы, а панель сохранения появляется только при несохранённых изменениях.",
  "<strong>The result:</strong> a tight loop — ask, spot a gap, add a document, retrain, ask again — that makes the bot better in minutes.":
    "<strong>Результат:</strong> короткий цикл — спросить, заметить пробел, добавить документ, переобучить, спросить снова — улучшает бота за минуты.",
  "Bot editor":
    "Редактор бота",
  "Embedding without a developer":
    "Встраивание без разработчика",
  "A bot is only useful once it is on the customer’s website, and that step usually needs a developer. Users also need to trust that the widget will look like part of their brand, not a third-party add-on.":
    "Бот полезен только тогда, когда он на сайте клиента, а для этого обычно нужен разработчик. Кроме того, пользователю важно быть уверенным, что виджет будет выглядеть частью его бренда, а не сторонней надстройкой.",
  "In the widget builder, colours, avatar, position, and welcome message update a live preview as the user tweaks them. When it looks right, the embed is a single script tag to copy, with a note that it works on Webflow, WordPress, Shopify, and plain HTML.":
    "В конструкторе виджета цвета, аватар, расположение и приветственное сообщение сразу обновляют живое превью. Когда всё выглядит как надо, для встраивания достаточно скопировать один тег script — с пометкой, что он работает на Webflow, WordPress, Shopify и обычном HTML.",
  "<strong>The result:</strong> embedding becomes a copy-paste step that a non-technical user can finish alone.":
    "<strong>Результат:</strong> встраивание превращается в «скопировать и вставить», с которым нетехнический пользователь справится сам.",
  "Widget builder":
    "Конструктор виджета",
  "A paywall that follows the value":
    "Пейвол, который следует за ценностью",
  "Gating random features makes a free plan feel broken and a paid plan feel arbitrary. The limits had to follow how the value of a bot actually grows for a business.":
    "Если закрывать функции наугад, бесплатный тариф кажется сломанным, а платный — случайным. Ограничения должны были повторять то, как на самом деле растёт ценность бота для бизнеса.",
  "Plans are split by what scales with a business: the number of bots, messages per month, removing Kernle branding and, for teams, seats, roles, and API access. The free plan is a complete product with one bot, so users can launch before paying. The upgrade prompt appears at the moment of need — when a user reaches the bot limit — and leads to checkout without leaving the app.":
    "Тарифы различаются тем, что растёт вместе с бизнесом: количеством ботов, сообщений в месяц, возможностью убрать брендинг Kernle, а для команд — местами, ролями и доступом к API. Бесплатный тариф — это полноценный продукт с одним ботом, поэтому запуститься можно до оплаты. Предложение перейти на тариф выше появляется в момент необходимости — когда пользователь достигает лимита ботов — и ведёт к оплате, не выходя из приложения.",
  "<strong>The result:</strong> users pay once the product has already proven useful, and each plan answers a clear need: more bots, more traffic, or their own brand.":
    "<strong>Результат:</strong> пользователь платит, когда продукт уже доказал свою пользу, а каждый тариф отвечает на понятную потребность: больше ботов, больше трафика или собственный бренд.",
  "Pricing &amp; checkout":
    "Тарифы и оплата",
  // Kernle — новые подписи к картинкам и видео (alt)
  "Kernle onboarding: name, purpose, sources":
    "Онбординг Kernle: имя, назначение, источники",
  "Training screen animation":
    "Анимация экрана обучения",
  "Kernle bot editor with a test chat":
    "Редактор бота Kernle с тестовым чатом",
  "Widget builder with a live preview and embed code":
    "Конструктор виджета с живым превью и кодом встраивания",
  "Kernle pricing plans and checkout":
    "Тарифы Kernle и оплата",
  // Kernle на главной (index.html)
  "Kernle (AI chatbot builder)":
    "Kernle (конструктор ИИ-чат-ботов)",
  "Vibe coding":
    "Вайб-кодинг",
  "A concept SaaS that turns documents into a support chatbot. I designed and built it through vibe coding: I led the art direction, design system, and motion, and AI wrote the code. A glowing “knowledge core” runs through the whole product — from the landing page to the animation of the bot learning from the user’s documents.":
    "Концепт SaaS-сервиса, который превращает документы в чат-бота поддержки. Я спроектировала и собрала его методом вайб-кодинга: отвечала за арт-дирекцию, дизайн-систему и моушн, а код писал ИИ. Светящееся «ядро знаний» проходит через весь продукт — от главной страницы до анимации, в которой бот учится на документах пользователя.",
  "Kernle <span class=\"text-secondary\">(AI chatbot builder)</span> <span class=\"divider\">|</span> <a href=\"https://kernle-chat-builder.vercel.app/\" target=\"_blank\" rel=\"noopener\">website</a>":
    "Kernle <span class=\"text-secondary\">(конструктор ИИ-чат-ботов)</span> <span class=\"divider\">|</span> <a href=\"https://kernle-chat-builder.vercel.app/\" target=\"_blank\" rel=\"noopener\">сайт</a>",
  // Kernle — подписи к картинкам и видео (alt)
  "Kernle project cover":
    "Обложка проекта Kernle",
  "Kernle — laptop mockup":
    "Kernle — мокап на ноутбуке",
  "Process timeline: Phase 1 Direction, Phase 2 System, Phase 3 Build":
    "Таймлайн процесса: этап 1 — направление, этап 2 — система, этап 3 — сборка",
  "Kernle moodboard":
    "Мудборд Kernle",
  "Audit result: visual and logic files":
    "Результат аудита: визуальные и логические файлы",
  "Kernle landing page":
    "Лендинг Kernle",
  "Training loader stages":
    "Этапы лоадера обучения",
  "Kernle colour tokens":
    "Цветовые токены Kernle",
  "Kernle typography":
    "Типографика Kernle",
  "Glass surfaces and glows":
    "Стеклянные поверхности и свечения",
  "Kernle buttons with states":
    "Кнопки Kernle с состояниями",

  // ---------- Подписи к картинкам (alt) и кнопкам ----------
  "Portrait of Statkevich Anastasiya":
    "Портрет Анастасии Статкевич",
  "Polli.co project cover":
    "Обложка проекта Polli.co",
  "Meal.prep project cover":
    "Обложка проекта Meal.prep",
  "Extructor project cover":
    "Обложка проекта Extructor",
  "Polli.co — laptop mockup":
    "Polli.co — мокап на ноутбуке",
  "Old delegation flow, 7 steps":
    "Старый сценарий делегирования, 7 шагов",
  "Updated delegation flow, 3 steps":
    "Обновлённый сценарий делегирования, 3 шага",
  "Withdrawal flow with multi-select":
    "Вывод средств с множественным выбором",
  "Withdrawal flow with single selector":
    "Вывод средств с одиночным выбором",
  "Old chart with description":
    "Старый график с описанием",
  "Updated chart":
    "Обновлённый график",
  "Process timeline: Phase 1 Analysis, Phase 2 Design, Phase 3 Build":
    "Таймлайн процесса: этап 1 — анализ, этап 2 — дизайн, этап 3 — сборка",
  "Logo concept 1":
    "Концепция логотипа 1",
  "Logo concept 2":
    "Концепция логотипа 2",
  "Logo concept 3 — selected":
    "Концепция логотипа 3 — выбрана",
  "Wireframes - main flow":
    "Вайрфреймы — основной сценарий",
  "Concept 3 — selected":
    "Концепция 3 — выбрана",
  "Polli.co dashboard":
    "Дашборд Polli.co",
  "Polli.co dashboard notification center":
    "Центр уведомлений в дашборде Polli.co",
  "Polli.co wallet sidebar":
    "Боковая панель кошелька Polli.co",
  "Close":
    "Закрыть",
  "EXTRUCTOR - screens":
    "EXTRUCTOR — экраны",
  "List of orders":
    "Список заявок",
  "Filters and settings":
    "Фильтры и настройки",
  "Page of order":
    "Страница заявки",
  "Meal-prep screens":
    "Экраны Meal.Prep",
  "Hiden elements in Meal.prep":
    "Скрытые элементы в Meal.Prep",
  "Competitor research — examples and references":
    "Анализ конкурентов — примеры и референсы",
  "Prototyping in figma":
    "Прототипирование в Figma",
  "Buttons":
    "Кнопки",
  "UI element":
    "UI-элемент",
};
