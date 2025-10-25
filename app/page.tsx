import Carousel from '@/components/carousel';
import Link from 'next/link';

export default function Home() {
  const slides = [
    {
      backgroundImage: 'biblia.jpg',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Estudo da Bíblia e Cultos</h1>
          <p className="text-xl text-white/90 font-semibold drop-shadow-lg max-w-2xl mx-auto">
            Momentos de adoração, reflexão e comunhão que fortalecem a fé e aproximam os jovens de Deus.
          </p>
        </div>
      ),
    },
    {
      backgroundImage: 'auxilio.jpg',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Missão Calebe</h1>
          <p className="text-xl text-white/90 font-semibold drop-shadow-lg max-w-2xl mx-auto">
            Levando esperança, solidariedade e amor através de projetos missionários e auxílio às comunidades.
          </p>
        </div>
      ),
    },
    {
      backgroundImage: 'volei.jpg',
      content: (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Esportes e Recreação</h1>
          <p className="text-xl text-white/90 font-semibold drop-shadow-lg max-w-2xl mx-auto">
            Futebol, vôlei e trilhas que promovem amizade, saúde e união entre os jovens do Kyrius.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main>
      {/* Hero / Carousel */}
      <Carousel slides={slides} autoPlay autoPlayInterval={10000} />

      {/* Seção sobre o clube */}
      <section className="py-20 bg-[#FAF6EF] text-center px-4">
        <h2 className="text-4xl font-cinzel font-bold text-[#1D1D1D] mb-6">
          Jovens unidos por propósito e amizade
        </h2>
        <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto mb-10 leading-relaxed">
          O <span className="text-[#C5A572] font-semibold">Kyrius</span> é um clube de jovens que busca viver a fé na prática — com cultos inspiradores, 
          esportes, missões e momentos de comunhão. Nosso espaço é aberto para todos que desejam crescer 
          espiritualmente e fazer parte de uma comunidade vibrante e acolhedora.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
          <a
            href="#"
            className="bg-[#C5A572] hover:bg-[#B08B50] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300"
          >
            Conheça o Kyrius
          </a>
          <a
            href="#"
            className="bg-[#1D1D1D] hover:bg-[#333] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300"
          >
            Faça parte
          </a>
        </div>
      </section>

      {/* Atividades principais */}
      <section className="py-20 bg-white text-[#1D1D1D]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-cinzel font-bold text-center mb-12">
            O que vivemos no Kyrius
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-t-4 border-[#C5A572] shadow-sm hover:shadow-md transition">
              <img src="book.svg" alt="Cultos" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cultos Jovens</h3>
              <p className="text-gray-600">
                Momentos de louvor, oração e estudo bíblico que fortalecem a fé e aproximam os corações.
              </p>
            </div>

            <div className="text-center p-6 bg-[#C5A572] text-white rounded-lg shadow-md hover:bg-[#B08B50] transition">
              <img src="dribbble.svg" alt="Esportes" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Esportes e Recreação</h3>
              <p>
                Futebol, vôlei, trilhas e desafios que promovem amizade, saúde e espírito de equipe.
              </p>
            </div>

            <div className="text-center p-6 border-t-4 border-[#C5A572] shadow-sm hover:shadow-md transition">
              <img src="heart-fill.svg" alt="Missões" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ações Missionárias</h3>
              <p className="text-gray-600">
                Levamos esperança e solidariedade por meio de visitas, doações e projetos sociais.
              </p>
            </div>

            <div className="text-center p-6 bg-[#C5A572] text-white rounded-lg shadow-md hover:bg-[#B08B50] transition">
              <img src="tent.svg" alt="Acampamentos" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Acampamentos</h3>
              <p>
                Dias inesquecíveis de contato com a natureza, reflexões espirituais e desafios em grupo.
              </p>
            </div>

            <div className="text-center p-6 border-t-4 border-[#C5A572] shadow-sm hover:shadow-md transition">
              <img src="journal-text.svg" alt="Estudos" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Estudo e Crescimento</h3>
              <p className="text-gray-600">
                Estudamos temas bíblicos, emocionais e sociais para crescer como jovens equilibrados e conscientes.
              </p>
            </div>

            <div className="text-center p-6 bg-[#C5A572] text-white rounded-lg shadow-md hover:bg-[#B08B50] transition">
              <img src="people-fill.svg" alt="Comunidade" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comunidade Kyrius</h3>
              <p>
                Uma família de jovens que se apoia, compartilha experiências e celebra conquistas juntos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de propósito */}
      <section className="py-16 bg-[#FAF6EF] text-center px-4">
        <h2 className="text-3xl font-cinzel font-bold text-[#1D1D1D] mb-6">
          Fé, amizade e propósito
        </h2>
        <p className="text-[#4A4A4A] mb-10 max-w-2xl mx-auto leading-relaxed">
          O <span className="text-[#C5A572] font-semibold">Kyrius</span> acredita que a juventude pode transformar o mundo — com amor, fé e atitude.
          Nossas atividades são oportunidades para fortalecer a espiritualidade e fazer a diferença na vida das pessoas.
        </p>

        <a
          href="#"
          className="bg-[#C5A572] hover:bg-[#B08B50] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
        >
          Ver Próximos Eventos
        </a>
      </section>

      {/* Chamada final */}
      <section className="py-20 bg-[#1D1D1D] text-center text-white">
        <h2 className="text-4xl font-cinzel font-bold mb-4">
          Faça parte dessa jornada
        </h2>
        <p className="text-lg mb-8 text-[#FAF6EF]/90">
          Junte-se ao Kyrius e viva experiências que inspiram corpo, mente e espírito.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="bg-[#C5A572] hover:bg-[#B08B50] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300"
          >
            Quero Participar
          </a>
          <a
            href="#"
            className="border-2 border-[#C5A572] px-8 py-3 rounded-md font-semibold hover:bg-[#C5A572] hover:text-white transition-all duration-300"
          >
            Falar com o Time
          </a>
        </div>
      </section>
    </main>
  );
}
