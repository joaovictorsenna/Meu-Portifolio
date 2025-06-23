import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import './StyledRoutes/Experience.css';

const timelineData = [
    {
        title: 'Porteiro',
        subtitle: 'Álamo Protec',
        description: 'Atuei como porteiro na empresa Álamo Protec Porteiro, desempenhando funções essenciais para a segurança e o bom funcionamento do ambiente. Minhas responsabilidades incluíam: controlar o acesso de visitantes e prestadores de serviço; monitorar câmeras de segurança e realizar rondas periódicas; manter registros organizados de entrada e saída; garantir a comunicação eficiente entre portaria e administração, sempre prezando pela cordialidade e responsabilidade.',
        date: 'Novembro 2022',
    },
    {
        title: 'Designer Freelancer',
        subtitle: 'Organização SHox (Free Fire)',
        description: 'Atuei como designer freelancer para a organização de Free Fire SHox em 2019. Fui responsável pela criação de artes visuais, como banners, logos e posts para redes sociais. Desenvolvi habilidades em design gráfico voltado para o público gamer, garantindo identidade visual atrativa e alinhada com os objetivos da organização.',
        date: '2019',
    }
];

const Experience: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="experience">
            <div className="px-6 mt-[5rem]">
                <p className="card-title flex items-center justify-between w-full md:w-1/2 lg:w-1/3 h-10 px-4 py-2 bg-base-500 rounded-full border-2 transition-all">
                    <span className="relative z-10">Experiência Profissional</span>
                </p>
            </div>
            <div className="timeline w-full max-w-[1000px] mx-auto my-12 p-8 box-border relative mb-20" >
                <ul className="p-0 m-0">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

const TimelineItem: React.FC<{ item: { title: string; description: string; date: string; subtitle: string; } }> = ({ item }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <li ref={ref} data-aos="fade-up" className={`${inView ? 'fade-in' : 'fade-out'} relative w-[50%] px-10 box-border list-none`}>
            <div className="content pb-5">
                <h2 className="bg-gradient-to-br from-[#007cf0] via-[#00dfd8] to-[#38b2ac] bg-clip-text text-transparent font-bold mt-8">{item.title}</h2>
                <h4 className="bg-gradient-to-r from-[#007cf0] via-[#00dfd8] to-[#38b2ac] bg-clip-text text-transparent font-semibold">{item.subtitle}</h4>
                <p className="mt-2">{item.description}</p>
            </div>
            <div className="time absolute top-3 bg-gradient-to-r from-[#007cf0] via-[#00dfd8] to-[#38b2ac] text-white py-2 px-4 rounded-full shadow-md">
                <h4>{item.date}</h4>
            </div>
        </li>
    );
};

export default Experience;