import "./StyledRoutes/About.css";
//import profileImage from "../../public/Foto_perfil.jpeg";

export default function About() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about-me">
            <div className="px-4 sm:px-6 mt-[5rem]" data-aos="fade-up">
                <p className="card-title flex items-center justify-between w-full md:w-1/2 lg:w-1/3 h-10 px-4 py-2 bg-base-500 rounded-full border-2 transition-all">
                    <span className="relative z-10">Sobre Mim</span>
                </p>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center gap-8">
                <article className="article-about rounded-xl md:mx-auto md:max-w-lg p-4" data-aos="fade-right">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        {/* <img
                            alt="Foto de perfil"
                            src={profileImage}
                            className="w-24 h-24 rounded-full object-cover"
                        /> */}
                        <div>
                            <h3 className="text-2xl font-medium text-white">
                                João Sena
                            </h3>
                            <div className="flow-root">
                                <ul className="-m-1 flex flex-wrap">
                                    <li className="p-1 leading-none">
                                        <a
                                            href="https://www.linkedin.com/in/joão-victor-sena-lopes/"
                                            className="text-base font-medium text-gray-300 hover:text-[#ff0080]"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Linkedin
                                        </a>
                                    </li>
                                    <li className="p-1 leading-none">
                                        <a
                                            href="https://github.com/joaovictorsenna"
                                            className="text-base font-medium text-gray-300 hover:text-[#ff4d4d]"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    </li>
                                    <li className="p-1 leading-none">
                                        <a
                                            href="/Curriculo.pdf"
                                            download="Currículo_João_Sena_Lopes.pdf"
                                            className="text-base font-medium text-gray-300 hover:text-[#f9cb28]"
                                        >
                                            Currículo
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="mt-4 space-y-2 max-w-[500px]">
                        <li>
                            <h2 className="mb-4 text-lg">Ultimos Projetos:</h2>
                            <a
                                href="https://github.com/joaovictorsenna/urldev"
                                className="block h-full rounded-lg border border-[#007cf0] p-4 hover:border-[#00dfd8]"
                            >
                                <strong className="font-medium text-white">
                                    Encurtador de URL
                                </strong>
                                <p className="mt-1 text-xs font-medium text-gray-300">
                                    Este é um projeto de encurtador de URLs desenvolvido com Spring Boot, JPA, e H2 (ou outro banco relacional). Ele permite que você envie uma URL longa e receba uma URL curta, que redireciona para o endereço original. As URLs curtas expiram automaticamente após 30 dias.
                                </p>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/joaovictorsenna/BOT_ASSISTENTE"
                                className="block h-full rounded-lg border border-[#007cf0] p-4 hover:border-[#00dfd8]"
                            >
                                <strong className="font-medium text-white">
                                    Bot Assistente
                                </strong>
                                <p className="mt-1 text-xs font-medium text-gray-300">
                                    Este projeto tem como objetivo automatizar o processo de lançamento de dados contábeis em sistemas corporativos utilizando Python, com apoio das bibliotecas openpyxl, pyautogui e pyperclip. A automação lê uma planilha Excel com os dados e insere essas informações diretamente no sistema da empresa simulando ações humanas no computador.
                                </p>
                            </a>
                        </li>
                    </ul>
                    <div className="mt-3">
                        <button className="px-5">
                            <span className="button-text slide" onClick={() => scrollToSection('projects')}>Ver todos os projetos</span>
                        </button>
                    </div>
                </article>
                <div className="h-auto lg:w-1/2 px-4" data-aos="fade-left">
                    <span className="text-sm sm:text-lg">
                        Estudante de Análise e Desenvolvimento de Sistemas com foco em
                        desenvolvimento back-end. Aprimorei minhas habilidades
                        em HTML5, CSS3, JavaScript, ReactJS TypeScript e Tailwind CSS por meio de
                        projetos pessoais e acadêmicos. Embora eu não tenha experiência
                        formal em cargos de tecnologia, apliquei meu conhecimento em
                        projetos como um aplicativo de Transação API utilizando
                        Java e Docker, é um projeto API REST para gerenciar transações e calcular estatísticas das transações realizada nos  últimos
                        60 segundos.
                        Construído com Java, SpringBoot e Docker.
                        Além disso, no meu trabalho no setor de porteiro fortaleceu minhas habilidades de comunicação,
                        resolução de problemas e gestão de tempo, preparando-me para atuar
                        em equipes de desenvolvimento ágeis.
                    </span>
                </div>
            </div>
        </section>
    );
}