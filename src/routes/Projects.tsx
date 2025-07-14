import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Project {
    id: string;
    name: string;
    description: string;
    primaryLanguage: string;
    url: string;
    homepageUrl?: string;
    imageUrl?: string;
}

const projectsData: Project[] = [
    {
        id: uuidv4(),
        name: "analisador de vídeos",
        description: "Este é um projeto desenvolvido para fornecer informações sobre é um script Python que permite baixar o áudio de vídeos do YouTube, transcrever o áudio e gerar um resumo do conteúdo usando um modelo de linguagem (ex: GPT, OpenAI, Grop, etc)..",
        primaryLanguage: "Python",
        url: "https://github.com/joaovictorsenna/analisador-de-videos",
        imageUrl: "/img-project/analisador-de-vídeos.png",
    },
    {
        id: uuidv4(),
        name: "Content Analyzer",
        description: "Content Analyzer é uma ferramenta de análise de conteúdo que usa inteligência artificial para interpretar, resumir e gerar insights a partir de qualquer texto, tudo de forma simples, rápida e diretamente pelo terminal.",
        primaryLanguage: "Python",
        url: "https://github.com/joaovictorsenna/Content-Analyzer",
        imageUrl: "/img-project/content-analyzer.png",
    },
    {
        id: uuidv4(),
        name: "Linkedin Bot",
        description: "Este é um projeto automatiza o envio de conexões e publicações no LinkedIn de forma simples e prática usando Python, Selenium e uma interface gráfica intuitiva.",
        primaryLanguage: "Python",
        url: "https://github.com/joaovictorsenna/linkedin_bot",
        imageUrl: "/img-project/linkedinbot.png",
    },
    {
        id: uuidv4(),
        name: "LANDING PAGE PETLEVET",
        description: "Este projeto é uma landing page desenvolvida para a clínica veterinária Petlevet, utilizando REACTJS COM NEXTJS. Ela oferece uma experiência de usuário intuitiva e responsiva, proporcionando informações sobre os serviços oferecidos pela clínica e permitindo que os usuários se conectem com a equipe por meio de formulários de contato.",
        primaryLanguage: "NextJS",
        url: "https://github.com/joaovictorsenna/petlevet",
        homepageUrl: "https://petlevet.vercel.app/",
        imageUrl: "/img-project/petlevet.png",
    },
    {
        id: uuidv4(),
        name: "QR CODE",
        description: "Gerador de QR Code é uma aplicação web desenvolvida com Next.js, TypeScript e TailwindCSS, que permite gerar QR Codes de forma rápida e fácil. Basta digitar um texto, link ou qualquer informação e o QR Code é gerado automaticamente na tela. Simples, intuitivo e responsivo.",
        primaryLanguage: "NextJS",
        url: "https://github.com/joaovictorsenna/qr-code",
        homepageUrl: "https://qr-code-six-lemon.vercel.app/",
        imageUrl: "/img-project/gerador-qrcode.png",
    },
    {
        id: uuidv4(),
        name: " Transação API",
        description: " Este projeto é uma API REST para gerenciar transações e calcular estatísticas das transações realizadas nos últimos 60 segundos. A API foi desenvolvida com Java e Spring Boot.",
        primaryLanguage: "Java",
        url: "https://github.com/joaovictorsenna/lembrete-de-remedio",
        imageUrl: "/img-project/transacao.png",
    },
    {
        id: uuidv4(),
        name: " Encurtador de URL ",
        description: " Este é um projeto de encurtador de URLs desenvolvido com Spring Boot, JPA, e H2 (ou outro banco relacional). Ele permite que você envie uma URL longa e receba uma URL curta, que redireciona para o endereço original. As URLs curtas expiram automaticamente após 30 dias.",
        primaryLanguage: "Java",
        url: "https://github.com/joaovictorsenna/urldev",
        imageUrl: "/img-project/url.png",
    },
    {
        id: uuidv4(),
        name: " Lembrete de Remédio",
        description: " Lembrete de Remédio é um aplicativo web simples e responsivo, desenvolvido com Next.js, TypeScript e TailwindCSS, que permite configurar lembretes de 8 em 8 horas para tomar remédios. Ele salva os dados no navegador e exibe alertas automáticos no horário programado.",
        primaryLanguage: "NextJS",
        url: "https://github.com/joaovictorsenna/transacao-api",
        homepageUrl: "https://lembrete-de-remedio-4884.vercel.app/",
        imageUrl: "/img-project/lembrete-remedio.png",
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("");

    const filteredProjects = projectsData.filter((project) => {
        if (!filter) return true;
        if (filter === "Fullstack") {
            return ["Node.js", "PHP"].includes(project.primaryLanguage);
        } else if (filter === "Frontend") {
            return ["Typescript", "Javascript", "HTML/CSS", "NextJS", "ReactJs"].includes(project.primaryLanguage);
        } else if (filter === "Backend") {
            return ["Java", "PHP", "Node.Js", "Javascript"].includes(project.primaryLanguage);
        } else if (filter === "Python") {
            return project.primaryLanguage === "Python";
        }
        return project.primaryLanguage === filter;
    });

    return (
        <section id="projects">
            <div className="px-4 sm:px-6" data-aos="fade-right">
                <p className="card-title flex items-center justify-between w-full md:w-1/2 lg:w-1/3 h-10 px-4 py-2 bg-base-500 rounded-full border-2 transition-all">
                    <span className="relative z-10">Projetos</span>
                </p>
            </div>
            <div className="px-4 m-4 p-4 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0" data-aos="fade-down-right">
                <button onClick={() => setFilter("")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent hover:border-transparent hover:border-[3px] hover:border-image-[linear-gradient(to right, #ec4899, #f43f5e, #f59e0b)] hover:border-image-slice-[1] hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Todos</button>
                <button onClick={() => setFilter("Frontend")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent hover:border-transparent hover:border-[3px] hover:border-image-[linear-gradient(to right, #ec4899, #f43f5e, #f59e0b)] hover:border-image-slice-[1] hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Frontend</button>
                <button onClick={() => setFilter("Backend")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent hover:border-transparent hover:border-[3px] hover:border-image-[linear-gradient(to right, #ec4899, #f43f5e, #f59e0b)] hover:border-image-slice-[1] hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Backend</button>
                <button onClick={() => setFilter("Fullstack")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent hover:border-transparent hover:border-[3px] hover:border-image-[linear-gradient(to right, #ec4899, #f43f5e, #f59e0b)] hover:border-image-slice-[1] hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Fullstack</button>
                <button onClick={() => setFilter("Python")} className="px-6 py-2 text-white font-bold text-xs rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent hover:border-transparent hover:border-[3px] hover:border-image-[linear-gradient(to right, #ec4899, #f43f5e, #f59e0b)] hover:border-image-slice-[1] hover:shadow-red-500/50 hover:shadow-2xl focus:outline-none">Python</button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 mx-4" data-aos="flip-left">
                {filteredProjects.map((project) => (
                    <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block bg-black rounded-lg overflow-hidden h-60"
                    >
                        {project.imageUrl && (
                            <img
                                alt=""
                                src={project.imageUrl}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />
                        )}

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent ">{project.primaryLanguage}</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">{project.name}</p>

                            <div className="mt-4">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">{project.description || "Sem descrição disponível"}</p>
                                </div>
                            </div>

                            <div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-white"
                                >
                                    GitHub Repo
                                </a>
                                {project.homepageUrl && (
                                    <>
                                        {" | "}
                                        <a
                                            href={project.homepageUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-white"
                                        >
                                            Visitar Deploy
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;