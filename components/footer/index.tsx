'use client';

export function Footer() {
  return (
    <footer className="bg-[#1A2750] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e redes sociais */}
        <div>
          <img
            src="kyrius.png"
            alt="Kyrius"
            className="h-36 mb-6"
          />
          <div className="flex space-x-4">
            {['facebook', 'instagram', 'envelope-at', 'whatsapp'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#D4AF37] hover:bg-[#f1d97c] transition-colors"
              >
                <img src={`${icon}.svg`} alt={icon} className="w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Sobre nós */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D4AF37] cursor-default">Sobre o Kyrius</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/sobre" className="hover:text-[#f1d97c] transition-colors">Quem somos</a></li>
            <li><a href="/eventos" className="hover:text-[#f1d97c] transition-colors">Eventos e Encontros</a></li>
            <li><a href="/lideranca" className="hover:text-[#f1d97c] transition-colors">Nossa liderança</a></li>
            <li><a href="/contato" className="hover:text-[#f1d97c] transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Vida Espiritual */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D4AF37] cursor-default">Vida Espiritual</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/estudos-biblicos" className="hover:text-[#f1d97c] transition-colors">Estudos Bíblicos</a></li>
            <li><a href="/devocionais" className="hover:text-[#f1d97c] transition-colors">Devocionais</a></li>
            <li><a href="/cultos" className="hover:text-[#f1d97c] transition-colors">Cultos Jovens</a></li>
            <li><a href="/ministerios" className="hover:text-[#f1d97c] transition-colors">Ministérios e Missões</a></li>
          </ul>
        </div>

        {/* Movimento JA e Missão Calebe */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D4AF37] cursor-default">Movimento Jovem</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/ja" className="hover:text-[#f1d97c] transition-colors">Jovens Adventistas (JA)</a></li>
            <li><a href="/calebe" className="hover:text-[#f1d97c] transition-colors">Missão Calebe</a></li>
            <li><a href="/acampamentos" className="hover:text-[#f1d97c] transition-colors">Acampamentos e Trilhas</a></li>
            <li><a href="/voluntariado" className="hover:text-[#f1d97c] transition-colors">Projetos de Voluntariado</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Rodapé inferior */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 space-y-3 md:space-y-0">
        <p>© {new Date().getFullYear()} Kyrius — Clube de Jovens Adventistas. Todos os direitos reservados.</p>
        <div className="flex space-x-4">
          <a href="/termos" className="hover:text-[#D4AF37] transition-colors">Termos de Uso</a>
          <span>|</span>
          <a href="/privacidade" className="hover:text-[#D4AF37] transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
