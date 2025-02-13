const translations = {
    es: {
        title: "Bienvenido a 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸",
        services: "Servicios",
        aboutTitle: "Sobre Nosotros",
        aboutText: "Bienvenido a 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸, tu fuente confiable para todo lo relacionado con los videojuegos. Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades de juego. Desde noticias y reseñas hasta guías y tutoriales, estamos aquí para ayudarte a mejorar tu experiencia de juego.",
        contactTitle: "Contáctenos",
        contactText: "Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nosotros. Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana, para brindarte el apoyo que necesitas.",
        footerText: "© 2023 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸. Todos los derechos reservados.",
        teamSpeakDiscord: "TeamSpeak-Discord: Aquí puedes comunicarte con tus amigos, crear tu canal personal y compartir experiencias.",
        guides: "Guías: Encuentra guías y trucos para mejorar tu experiencia de juego."
    },
    en: {
        title: "Welcome to 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸",
        services: "Services",
        aboutTitle: "About Us",
        aboutText: "Welcome to 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸, your trusted source for all things gaming. We offer a wide range of services to meet all your gaming needs. From news and reviews to guides and tutorials, we are here to help you enhance your gaming experience.",
        contactTitle: "Contact Us",
        contactText: "If you have any questions or need assistance, feel free to reach out to us. Our team is available 24/7 to provide you with the support you need.",
        footerText: "© 2023 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸. All rights reserved.",
        teamSpeakDiscord: "TeamSpeak-Discord: Here you can communicate with your friends, create your personal channel, and share experiences.",
        guides: "Guides: Find guides and tips to improve your gaming experience."
    },
    pt: {
        title: "Bem-vindo ao 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸",
        services: "Serviços",
        aboutTitle: "Sobre Nós",
        aboutText: "Bem-vindo ao 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸, sua fonte confiável para tudo relacionado a jogos. Oferecemos uma ampla gama de serviços para atender a todas as suas necessidades de jogos. De notícias e análises a guias e tutoriais, estamos aqui para ajudá-lo a melhorar sua experiência de jogo.",
        contactTitle: "Contate-Nos",
        contactText: "Se você tiver alguma dúvida ou precisar de assistência, sinta-se à vontade para entrar em contato conosco. Nossa equipe está disponível 24/7 para fornecer o suporte necessário.",
        footerText: "© 2023 24/7 C̷U̷B̴A̵_̸G̷A̷M̷E̸R̸. Todos os direitos reservados.",
        teamSpeakDiscord: "TeamSpeak-Discord: Aqui você pode se comunicar com seus amigos, criar seu canal pessoal e compartilhar experiências.",
        guides: "Guias: Encontre guias e dicas para melhorar sua experiência de jogo."
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[language][key];
    });
}
