"use client"
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image' // Импортируем Image для оптимизации изображений



interface Translations {
    [key: string]: {
        ru: string
        en: string
    }
}

// ... (languages - без изменений)


const translations: Translations = {
    hero_title: {
        ru: 'WASTED POTENTIALS',
        en: 'WASTED POTENTIALS'
    },
    hero_subtitle: {
        ru: 'Универсальная команда разработки',
        en: 'Universal Development Team'
    },
    hero_description: {
        ru: 'Создаем любые решения для любых проектов. От веб-приложений до мобильных платформ.',
        en: 'We create any solutions for any projects. From web applications to mobile platforms.'
    },
    services_title: {
        ru: 'НАШИ УСЛУГИ',
        en: 'OUR SERVICES'
    },
    web_dev: {
        ru: 'Веб-разработка',
        en: 'Web Development'
    },
    mobile_dev: {
        ru: 'Мобильная разработка',
        en: 'Mobile Development'
    },
    backend_dev: {
        ru: 'Backend разработка',
        en: 'Backend Development'
    },
    ai_dev: {
      ru: "Решения на базе AI",
      en: "AI development"
    },
    web_desc: {
        ru: 'Современные веб-приложения с использованием передовых технологий',
        en: 'Modern web applications using cutting-edge technologies'
    },
    mobile_desc: {
        ru: 'Кроссплатформенные мобильные приложения для iOS и Android',
        en: 'Cross-platform mobile applications for iOS and Android'
    },
    backend_desc: {
        ru: 'Масштабируемые серверные решения и API',
        en: 'Scalable server solutions and APIs'
    },
    ai_desc: {
        ru: 'Разрабатываем собственные ИИ решения или интегрируем готовые нейросети в Ваш проект.',
        en: 'We develop our own AI solutions or integrate ready-made neural networks into your project.'
    },
    portfolio_title: {
        ru: 'НАШИ РАБОТЫ',
        en: 'OUR WORKS'
    },
    portfolio_item1_title: {
        ru: 'Платформа "GPTAnywhere"',
        en: 'Platform "GPTAnywhere"'
    },
    portfolio_item1_desc: {
        ru: 'Аггрегатор мировых нейросетей для граждан РФ.',
        en: 'Aggregator of global neural networks for Russian citizens.'
    },
    portfolio_item2_title: {
        ru: 'Веб-портал "Cognit.io"',
        en: 'Web-application "Cognit.io"'
    },
    portfolio_item2_desc: {
        ru: 'Веб-портал, направленный на поиск партнеров для разработки проекта.',
        en: 'A web portal aimed at finding partners for project development.'
    },
    portfolio_item3_title: {
        ru: 'CoinyWallet',
        en: 'CoinyWallet'
    },
    portfolio_item3_desc: {
        ru: 'Телеграмм бот для работы с зарубежными картами. Больше 10 тысяч активных юзеров, больше тысячи продаж.',
        en: 'Telegram bot for working with foreign cards. More than 10 thousand active users, more than a thousand sales.'
    },
    portfolio_item4_title: {
        ru: 'ТГ-бот + WebApp Кинобот',
        en: 'Tg-bot + WebApp CinemaBot'
    },
    portfolio_item4_desc: {
        ru: 'Телеграмм бот для просмотра фильмов в 4к с интеграцией в WebApp.',
        en: 'Telegram bot for watching movies in 4k with WebApp integration.'
    },
    stack_title: { // Новый перевод
        ru: 'Технологии:',
        en: 'Stack:'
    },
    live_demo_button: { // Новый перевод
        ru: 'Live Demo',
        en: 'Live Demo'
    },
    repository_button: { // Новый перевод
        ru: 'Репозиторий',
        en: 'Repository'
    },
    about_title: {
        ru: 'О КОМАНДЕ',
        en: 'ABOUT TEAM'
    },
    about_description: {
        ru: 'Мы - команда опытных разработчиков, готовых воплотить в жизнь самые амбициозные проекты. Наш подход сочетает инновационные технологии с проверенными методологиями разработки.',
        en: 'We are a team of experienced developers ready to bring the most ambitious projects to life. Our approach combines innovative technologies with proven development methodologies.'
    },
    team_title: {
        ru: 'НАША КОМАНДА',
        en: 'OUR TEAM'
    },
    team_member1_name: {
        ru: 'Vasyz',
        en: 'Vasyz'
    },
    team_member1_role: {
        ru: 'Ведущий Fullstack-разработчик',
        en: 'Lead Fullstack developer'
    },
    team_member1_bio: {
        ru: 'Специалист по сложным архитектурам и высоким нагрузкам, с хорошим бэкгранудом в ИИ.',
        en: 'Specialist in complex architectures and high-load systems, good experience in AI.'
    },
    team_member2_name: {
        ru: 'Matvey',
        en: 'Матвей'
    },
    team_member2_role: {
        ru: 'Fullstack-разработчик',
        en: 'Fullstack developer'
    },
    team_member2_bio: {
        ru: 'Специалист веб-разработки, активный интегратор ИИ в проекты.',
        en: 'Web development specialist, active AI integrator in projects.'
    },
    team_member3_name: {
        ru: 'Андрей',
        en: 'Dr.Andrey'
    },
    team_member3_role: {
        ru: 'Frontend Developer (AI & Math Focus)',
        en: 'Frontend Developer (AI & Math Focus)'
    },
    team_member3_bio: {
        ru: 'Разрабатывает клиентскую часть веб-приложений. Является молодым специалистом в области ИИ.',
        en: 'Develops the client side of web applications. He is a young specialist in the field of AI.'
    },
    contact_title: {
        ru: 'СВЯЗАТЬСЯ С НАМИ',
        en: 'CONTACT US'
    },
    contact_description: {
        ru: 'Готовы обсудить ваш проект? Свяжитесь с нами для консультации.',
        en: 'Ready to discuss your project? Contact us for consultation.'
    },
    get_started: {
        ru: 'Начать проект',
        en: 'Start Project'
    }
}

export default function Portfolio() {
    const [currentLang, setCurrentLang] = useState<'ru' | 'en'>('en')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const t = (key: string): string => {
        return translations[key]?.[currentLang] || key
    }

    const toggleLanguage = () => {
        setCurrentLang(prev => prev === 'ru' ? 'en' : 'ru')
    }

    const portfolioItems = [
        {
            titleKey: 'portfolio_item1_title',
            descKey: 'portfolio_item1_desc',
            imageUrl: '/gpt.png',
            stack: ['Next.js', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Yandex S3'],
            liveLink: null,
            repoLink: null
        },
        {
            titleKey: 'portfolio_item2_title',
            descKey: 'portfolio_item2_desc',
            imageUrl: '/cognit.png',
            stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", 'Socket.io'],
            liveLink: null,
            repoLink: null
        },
        {
            titleKey: 'portfolio_item3_title',
            descKey: 'portfolio_item3_desc',
            imageUrl: '/coiny_wallet.jpg',
            stack: ['Python', 'Aiogram3', 'PostgreSQL', 'Docker', 'Yandex S3'],
            liveLink: null,
            repoLink: null
        },
        {
            titleKey: 'portfolio_item4_title',
            descKey: 'portfolio_item4_desc',
            imageUrl: '/kinobot.png',
            stack: ['Python', 'FastAPI', 'PostgreSQL', 'Aiogram3', 'Reverse Engineering'],
            liveLink: null,
            repoLink: null
        }
    ];

    const teamMembers = [
        { nameKey: 'team_member1_name', roleKey: 'team_member1_role', bioKey: 'team_member1_bio', avatar: '👨‍💻' },
        { nameKey: 'team_member2_name', roleKey: 'team_member2_role', bioKey: 'team_member2_bio', avatar: '👩‍🎨' },
        { nameKey: 'team_member3_name', roleKey: 'team_member3_role', bioKey: 'team_member3_bio', avatar: '👨‍💼' }
    ];


    if (!mounted) {
        return null
    }

    return (
        <>
            <Head>
                <title>Wasted Potentials - Universal Development Team</title>
                <meta name="description" content="Universal development team creating solutions for any projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <style jsx global>{`
              @keyframes neonAurora {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animated-neon-aurora {
                background: linear-gradient(
                  120deg, #00FFA3, #DC00FF, #00E0FF, #FF007F, #ADFF2F, #00FFA3
                );
                background-size: 300% 300%;
                animation: neonAurora 20s linear infinite;
              }
            `}</style>

            <div className="min-h-screen bg-black text-white overflow-x-hidden">
                <div className="fixed inset-0 animated-neon-aurora opacity-[0.2] md:opacity-[0.2]" />
                <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10" />
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_60%)]" />

                <nav className="relative z-50 flex justify-between items-center p-6 md:p-8">
                    {/* ... Navigation content ... */}
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        WP
                    </div>
                    <button
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                        className="relative group px-4 py-2 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        <div className="flex items-center space-x-2">
                            <span className="text-cyan-400 font-mono text-sm">{currentLang.toUpperCase()}</span>
                            <div className="w-4 h-4 border border-cyan-400/50 rounded-sm flex items-center justify-center">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </nav>

                <section className="relative z-10 px-6 md:px-8 py-20 md:py-32"> {/* Hero Section */}
                    {/* ... Hero content ... */}
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="mb-8">
                            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {t('hero_title')}
                            </h1>
                            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-light mb-6 text-gray-300">
                            {t('hero_subtitle')}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            {t('hero_description')}
                        </p>
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400">
                            <span className="relative z-10">{t('get_started')}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>
                </section>

                <section className="relative z-10 px-6 md:px-8 py-20"> {/* Services Section */}
                    {/* ... Services content ... */}
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {t('services_title')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: t('web_dev'), desc: t('web_desc'), icon: '🌐' },
                                { title: t('mobile_dev'), desc: t('mobile_desc'), icon: '📱' },
                                { title: t('backend_dev'), desc: t('backend_desc'), icon: '⚙️' },
                                { title: t('ai_dev'), desc: t('ai_desc'), icon: '🤖' }
                            ].map((service, index) => (
                                <div key={index} className="group relative p-6 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 focus-within:ring-2 focus-within:ring-cyan-400">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
                                        <h3 className="text-xl font-semibold mb-3 text-cyan-400">{service.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Section - ОБНОВЛЕНО */}
                <section className="relative z-10 px-6 md:px-8 py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {t('portfolio_title')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Оставил 2 колонки для лучшей читаемости */}
                            {portfolioItems.map((item, index) => (
                                <div key={index} className="group relative flex flex-col bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-xl hover:border-purple-400/40 transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-400 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative w-full h-56 md:h-64"> {/* Контейнер для изображения */}
                                        <Image
                                            src={item.imageUrl}
                                            alt={t(item.titleKey)}
                                            layout="fill"
                                            objectFit="cover" // Масштабирует изображение для заполнения контейнера
                                            className="transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>

                                    <div className="relative z-10 p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-semibold mb-3 text-purple-300 group-hover:text-purple-200 transition-colors">
                                            {t(item.titleKey)}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                                            {t(item.descKey)}
                                        </p>

                                        <div className="mb-5">
                                            <h4 className="text-sm font-semibold mb-2 text-cyan-400">{t('stack_title')}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.stack.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full font-mono">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-purple-500/20">
                                            {item.liveLink && (
                                                <a
                                                    href={item.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                                                >
                                                    {t('live_demo_button')}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                </a>
                                            )}
                                            {item.repoLink && (
                                                <a
                                                    href={item.repoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                                >
                                                    {t('repository_button')}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg> {/* Иконка для репозитория (можно заменить на GitHub иконку) */}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative z-10 px-6 md:px-8 py-20"> {/* About Section */}
                    {/* ... About content ... */}
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {t('about_title')}
                        </h2>
                        <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl" />
                            <p className="relative z-10 text-lg text-gray-300 leading-relaxed">
                                {t('about_description')}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative z-10 px-6 md:px-8 py-20"> {/* Team Section */}
                    {/* ... Team content ... */}
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t('team_title')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="group relative p-6 text-center bg-white/5 backdrop-blur-sm border border-pink-500/20 rounded-xl hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105 focus-within:ring-2 focus-within:ring-pink-400">
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                        <div className="text-5xl mb-4" aria-hidden="true">{member.avatar}</div>
                                        <h3 className="text-xl font-semibold mb-1 text-pink-400">{t(member.nameKey)}</h3>
                                        <p className="text-cyan-400 text-sm font-mono mb-3">{t(member.roleKey)}</p>
                                        <p className="text-gray-400 text-xs leading-relaxed">{t(member.bioKey)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative z-10 px-6 md:px-8 py-20"> {/* Contact Section */}
                    {/* ... Contact content ... */}
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {t('contact_title')}
                        </h2>
                        <p className="text-lg text-gray-400 mb-12">
                            {t('contact_description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-lg">
                                <a href="https://t.me/lionsky86" className="text-cyan-400 font-mono hover:underline">@lionsky86</a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="relative z-10 px-6 md:px-8 py-12 border-t border-cyan-500/20"> {/* Footer */}
                    {/* ... Footer content ... */}
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            WASTED POTENTIALS
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Wasted Potentials. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}