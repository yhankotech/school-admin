"use client"
//libs
import { AnimatedSection } from "../utils/animations";
import { useRouter } from 'next/navigation'
//Componentes
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Plane from "@/components/Plan";
import Feedback from "@/components/Costumers";
import { NewsletterForm } from '@/components/NewslatterForm';
//Imagens
import Dashboard from "@/assets/Dashboard.svg";
import Teacher from "@/assets/Teachers.svg";
import Chat from "@/assets/Chat.svg";
import Student from "@/assets/StudentDetails.svg";
import Finance from "@/assets/Finance.svg";
import Yhanko from "@/assets/yhankoIMG.svg";
import Automacao from "@/assets/automacao.jpg";
import Future from "@/assets/future.jpg";
import Event from "@/assets/Events.svg";
import Support from "../assets/chatc.gif";
import Information from "../assets/consulting.gif";
import Financial from "@/assets/Finance.gif";
import Securtitydata from "../assets/securityData.jpg";

export default function Home() {
  const router = useRouter();

    function goTo(){
      router.push("/login")
    }
    
    function goToPayment(){
      router.push("/payment")
    }
  return (
    <main className="bg-[#1B191F]">
      {/* HEADER */}
      <header className="flex items-center p-6 shadow-sm bg-transparent backdrop-brightness-50 fixed z-50 w-screen h-14">
        <Image src={Yhanko} alt="yhanko" className="w-10 text-[#FF5777]"/>
        <nav className="w-[27rem] ml-40">
            <ul className="flex justify-center items-center space-x-8 text-white">
                <li className="nav-item-1 animate-slide-in-left">
                  <a href="#home" className="nav-link hover:text-[#FF5777] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Home</a>
                </li>
                <li className="nav-item-2 animate-slide-in-left">
                  <a href="#sobre" className="nav-link hover:text-[#FF5777] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Sobre</a>
                </li>
                <li className="nav-item-3 animate-slide-in-left">
                  <a href="#uso" className="nav-link hover:text-[#FF5777] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Pais</a>
                </li>
                <li className="nav-item-4 animate-slide-in-left">
                  <a href="#vantagens" className="nav-link hover:text-[#FF5777] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Vantagens</a>
                </li>
                  <li className="nav-item-4 animate-slide-in-left">
                  <a href="#plano" className="nav-link hover:text-[#FF5777] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Plano</a>
                </li>
                <li className="nav-item-5 animate-slide-in-left">
                  <a href="#clientes" className="nav-link hover:text-[#FF5777] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Testemunho</a>
                </li>
            </ul>
        </nav>
        <div className="flex ml-auto px-4 space-x-3">
          <Button onClick={goTo} className="px-6 py-2 bg-transparent text-sm font-medium text-[#FF5777] border border-[#FF5777] hover:bg-[#FF5777] hover:text-white cursor-pointer">
             Login
          </Button>
          <Button onClick={goToPayment} className="px-8 py-2 text-sm font-medium text-white bg-[#FF5777] border border-[#FF5777] hover:border-[#FF5777] hover:bg-[#FF5777] cursor-pointer">
            Cadastre-se
          </Button>
        </div>
      </header>

      {/* HERO */}
      <AnimatedSection className="py-8 px-32"  delay={0.2}>
        <section className="text-center py-30  gradient-background bg-white h-[30rem] space-y-6" id="home">
          <h1 className="text-4xl font-bold mb-4 text-white">Transformando a Educação com <span className="text-[#FF5777]">Tecnologia</span></h1>

          <p className="max-w-xl mx-auto text-white"> Imagine um futuro onde a tecnologia serve como um poderoso aliado na educação, conectando professores, alunos e pais numa experiência única e transformadora. Apresentamos uma plataforma inovadora, dedicada exclusivamente ao universo da educação. Uma plataforma que impulsionará a inclusão tecnológica e revolucionará a maneira como aprendemos e ensinamos.</p>

          <Button className="px-10 py-5 text-sm font-medium animate-pulse text-white bg-[#FF5777] hover:bg-[#FF5777]  cursor-pointer">
              Cadastre-se
          </Button>
        </section>
      </AnimatedSection>

      {/* SOBRE O PRODUTO */}
        <AnimatedSection className="py-16 px-32" delay={0.3}>
          <section className="px-32" id="sobre">
            <h2 className="text-3xl font-semibold mb-6 text-white">Plataforma</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
              
                <div className="space-y-12">
                    
                    <div className="flex items-start group">
                        <div className="flex flex-col items-center mr-8">
                            <span className="section-number transition-all duration-300 group-hover:scale-110">1</span>
                            <div className="section-line h-32 mt-4 bg-[#FF5777] transition-all duration-300 group-hover:h-40"></div>
                        </div>
                        <div className="flex-1 pt-2">
                          <h2 className="text-2xl font-semibold text-[#FF5777] mb-4">
                              Automação e Eficiência
                          </h2>
                          <p className="text-white">
                            oferece automação de tarefas repetitivas, liberando tempo precioso para os administradores se dedicarem a atividades mais estratégicas. A geração de relatórios automatizados, a gestão de pagamentos e a comunicação interna são apenas alguns exemplos da eficiência que a plataforma proporciona.
                        </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start group">
                        <div className="flex flex-col items-center mr-8">
                            <span className="section-number transition-all duration-300 group-hover:scale-110">2</span>
                            <div className="section-line h-24 mt-4 bg-[#FF5777] transition-all duration-300 group-hover:h-32"></div>
                        </div>
                        <div className="flex-1 pt-2">
                          <h2 className="text-2xl font-semibold text-[#FF5777] mb-4">
                            Comunicação Direta e Eficaz
                          </h2>
                            <p className="text-white">
                            A plataforma oferece aos professores ferramentas de comunicação eficientes para se conectarem com os alunos, pais e colegas, agendando reuniões, partilhando materiais, dando feedback e colaborando em projetos.
                          </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start group">
                        <div className="flex flex-col items-center mr-8">
                            <span className="section-number transition-all duration-300 group-hover:scale-110">3</span>
                        </div>
                        <div className="flex-1 pt-2">
                            <h2 className="text-2xl font-semibold text-[#FF5777] mb-4">
                                Gestão Centralizada
                            </h2>
                          <p className="text-white">
                            tendo acesso a todas as informações, recursos e dados da instituição num único lugar, simplificando tarefas administrativas e eliminando a necessidade de consulta em vários documentos.
                          </p>
                        </div>
                    </div>
                </div>
            </div>
              
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              <Image src={Dashboard} alt="Funcionalidade 1" className="rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              <Image src={Teacher} alt="Funcionalidade 2" className="rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              <Image src={Chat} alt="Funcionalidade 3" className="rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              <Image src={Student} alt="Funcionalidade 4" className="rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              <Image src={Finance} alt="Funcionalidade 5" className="rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              <Image src={Event} alt="Funcionalidade 6" className="rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-lg" />
            </div>
            </div>
          </section>
       </AnimatedSection>

      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-32 relative overflow-hidden" delay={0.3}>
        {/* Efeitos de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF5777]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF5777]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5777]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Partículas flutuantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#FF5777]/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <section className="relative z-10" id="uso">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-[#FF5777]/10 rounded-full mb-6">
              <div className="flex items-center space-x-2 bg-[#FF5777]/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-[#FF5777] rounded-full animate-pulse"></div>
                <span className="text-[#FF5777] font-semibold text-sm uppercase tracking-wider">Casos de Uso</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
              Pais <span className="text-[#FF5777] relative">
                Conectados
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5777]/50 to-transparent rounded-full"></div>
              </span> e Envolvidos
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Descubra como nossa plataforma revoluciona a participação dos pais na educação dos filhos, 
              criando uma ponte digital entre família e escola.
            </p>
          </div>

          {/* Grid de cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            
            {/* Card 1 - Comunicação e Participação */}
            <div className="group relative">
              {/* Efeito de brilho no fundo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5777]/20 via-[#FF5777]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/5 backdrop-blur-md border border-[#FF5777]/20 p-8 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[#FF5777]/20 hover:border-[#FF5777]/40 group">
                {/* Efeito shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
                
                {/* Ícone e título */}
                <div className="flex items-start space-x-4 mb-6 relative z-10">
                  <div className="flex-shrink-0 p-3 bg-[#FF5777]/20 rounded-xl group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                    <Image src={Support} alt="support" className="w-8 h-8 rounded-lg"/>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#FF5777] mb-2 group-hover:text-[#FF5777]/90 transition-colors duration-300">
                      Comunicação e Participação
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#FF5777] to-[#FF5777]/50 rounded-full"></div>
                  </div>
                </div>
                
                {/* Conteúdo */}
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
                  Os pais podem acompanhar o progresso dos seus filhos, 
                  receber notificações de eventos, reuniões, tarefas e 
                  avaliações, e interagir diretamente com os professores. A plataforma torna os pais participantes ativos no processo educativo.
                </p>
                
                {/* Indicador de hover */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#FF5777]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-3 h-3 text-[#FF5777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 - Acesso à Informação */}
            <div className="group relative" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5777]/20 via-[#FF5777]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/5 backdrop-blur-md border border-[#FF5777]/20 p-8 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[#FF5777]/20 hover:border-[#FF5777]/40 group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
                
                <div className="flex items-start space-x-4 mb-6 relative z-10">
                  <div className="flex-shrink-0 p-3 bg-[#FF5777]/20 rounded-xl group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                    <Image src={Information} alt="information" className="w-8 h-8 rounded-lg"/>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#FF5777] mb-2 group-hover:text-[#FF5777]/90 transition-colors duration-300">
                      Acesso à Informação
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#FF5777] to-[#FF5777]/50 rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
                  A plataforma oferece aos pais acesso a informações importantes sobre a instituição, os horários, as atividades escolares e os 
                  recursos disponíveis, mantendo-os informados sobre tudo o que é relevante para a educação dos seus filhos.
                </p>
                
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#FF5777]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-3 h-3 text-[#FF5777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3 - Gerenciamento Financeiro */}
            <div className="group relative md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5777]/20 via-[#FF5777]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/5 backdrop-blur-md border border-[#FF5777]/20 p-8 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[#FF5777]/20 hover:border-[#FF5777]/40 group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
                
                <div className="flex items-start space-x-4 mb-6 relative z-10">
                  <div className="flex-shrink-0 p-3 bg-[#FF5777]/20 rounded-xl group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                    <Image src={Financial} alt="financial" className="w-8 h-8 rounded-lg"/>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#FF5777] mb-2 group-hover:text-[#FF5777]/90 transition-colors duration-300">
                      Gerenciamento Financeiro
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#FF5777] to-[#FF5777]/50 rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
                  Os pais podem realizar pagamentos de propinas e outras 
                  despesas escolares através da plataforma, de forma rápida, 
                  segura e conveniente. A plataforma também permite que os pais 
                  rastreiem os seus pagamentos e recebam recibos eletrónicos.
                </p>
                
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#FF5777]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-3 h-3 text-[#FF5777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Seção de estatísticas */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF5777]/20 rounded-full mb-4 group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                <span className="text-2xl font-bold text-[#FF5777]">98%</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Satisfação dos Pais</h4>
              <p className="text-gray-400 text-sm">Pais mais envolvidos na educação</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF5777]/20 rounded-full mb-4 group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                <span className="text-2xl font-bold text-[#FF5777]">24/7</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Acesso Contínuo</h4>
              <p className="text-gray-400 text-sm">Informações sempre disponíveis</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF5777]/20 rounded-full mb-4 group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                <span className="text-2xl font-bold text-[#FF5777]">100%</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Segurança</h4>
              <p className="text-gray-400 text-sm">Dados protegidos e criptografados</p>
            </div>
          </div>

        </section>

        {/* Estilos CSS personalizados */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out;
          }
        `}</style>
      </AnimatedSection>

              {/* VANTAGENS */}
        <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 xl:px-32 relative overflow-hidden" delay={0.3}>
          {/* Efeitos de fundo atmosféricos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF5777]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF5777]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5777]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Partículas flutuantes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#FF5777]/40 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          <section className="relative z-10 max-w-7xl mx-auto" id="vantagens">
            
            {/* Cabeçalho da seção */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center p-2 bg-[#FF5777]/10 rounded-full mb-6">
                <div className="flex items-center space-x-2 bg-[#FF5777]/20 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-[#FF5777] rounded-full animate-pulse"></div>
                  <span className="text-[#FF5777] font-semibold text-sm uppercase tracking-wider">Vantagens</span>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
                Por que Escolher Nossa <span className="text-[#FF5777] relative">
                  Plataforma
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5777]/50 to-transparent rounded-full"></div>
                </span>?
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Descubra as vantagens que fazem da nossa solução a escolha ideal para transformar 
                a gestão educacional da sua instituição.
              </p>
            </div>

            {/* Container das vantagens */}
            <div className="space-y-24">
              
              {/* Vantagem 1 - Automação de Processos */}
              <div className="group relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Conteúdo */}
                  <div className="space-y-6 order-2 lg:order-1">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 bg-[#FF5777]/20 rounded-xl group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                        <svg className="w-8 h-8 text-[#FF5777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl md:text-3xl text-[#FF5777] group-hover:text-[#FF5777]/90 transition-colors duration-300">
                          Automação de Processos
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#FF5777] to-[#FF5777]/50 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { title: "Relatórios automáticos", desc: "Gere relatórios em segundos sem esforço manual." },
                        { title: "Gestão de pagamentos eficiente", desc: "Controle e organize seus recebimentos e pagamentos com facilidade." },
                        { title: "Alertas e lembretes automáticos", desc: "Receba notificações importantes sem precisar acompanhar tudo manualmente." },
                        { title: "Redução de tarefas repetitivas", desc: "Automatize fluxos que consomem tempo diariamente." },
                        { title: "Mais foco no que importa", desc: "Libere sua equipe para atividades estratégicas e de maior impacto." }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#FF5777]/20 rounded-full flex items-center justify-center mt-1 group-hover/item:bg-[#FF5777]/30 transition-colors duration-300">
                            <svg className="w-3 h-3 text-[#FF5777]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover/item:text-[#FF5777] transition-colors duration-300">{item.title}</h4>
                            <p className="text-gray-300 text-sm mt-1 group-hover/item:text-gray-200 transition-colors duration-300">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Imagem */}
                  <div className="order-1 lg:order-2 relative group/image">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5777]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover/image:shadow-[#FF5777]/20 transition-all duration-500">
                      <Image 
                        src={Automacao} 
                        alt="Automação de processos" 
                        className="w-full h-80 object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B191F]/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                          <p className="text-white font-semibold text-sm">Automatize processos e ganhe eficiência</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Vantagem 2 - Inclusão Digital */}
              <div className="group relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Imagem */}
                  <div className="relative group/image">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5777]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover/image:shadow-[#FF5777]/20 transition-all duration-500">
                      <Image 
                        src={Future} 
                        alt="Inclusão Digital" 
                        className="w-full h-80 object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B191F]/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                          <p className="text-white font-semibold text-sm">Tecnologia acessível para todos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 bg-[#FF5777]/20 rounded-xl group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                        <svg className="w-8 h-8 text-[#FF5777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl md:text-3xl text-[#FF5777] group-hover:text-[#FF5777]/90 transition-colors duration-300">
                          Inclusão Digital
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#FF5777] to-[#FF5777]/50 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { title: "Acesso para todos", desc: "Ferramentas pensadas para todos os públicos, sem exceção." },
                        { title: "Acessibilidade", desc: "Funcionalidades adaptadas para alunos com necessidades especiais." },
                        { title: "Interface intuitiva", desc: "Navegação fácil e compreensível, mesmo para quem tem pouca experiência com tecnologia." },
                        { title: "Tecnologia como aliada", desc: "Promovemos a igualdade de oportunidades por meio da inovação." },
                        { title: "Educação sem barreiras", desc: "Levamos conhecimento a todos, independentemente de limitações físicas, sociais ou cognitivas." }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#FF5777]/20 rounded-full flex items-center justify-center mt-1 group-hover/item:bg-[#FF5777]/30 transition-colors duration-300">
                            <svg className="w-3 h-3 text-[#FF5777]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover/item:text-[#FF5777] transition-colors duration-300">{item.title}</h4>
                            <p className="text-gray-300 text-sm mt-1 group-hover/item:text-gray-200 transition-colors duration-300">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Vantagem 3 - Segurança */}
              <div className="group relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Conteúdo */}
                  <div className="space-y-6 order-2 lg:order-1">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 bg-[#FF5777]/20 rounded-xl group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                        <svg className="w-8 h-8 text-[#FF5777]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl md:text-3xl text-[#FF5777] group-hover:text-[#FF5777]/90 transition-colors duration-300">
                          Segurança
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#FF5777] to-[#FF5777]/50 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { title: "Proteção de dados", desc: "Proteção dos seus dados pessoais e sensíveis." },
                        { title: "Privacidade garantida", desc: "Privacidade garantida em todas as operações." },
                        { title: "Criptografia avançada", desc: "Informações criptografadas e armazenadas com segurança." },
                        { title: "Monitoramento contínuo", desc: "Monitoramento contínuo contra acessos não autorizados." },
                        { title: "Conformidade", desc: "Conformidade com padrões e boas práticas de segurança digital." }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#FF5777]/20 rounded-full flex items-center justify-center mt-1 group-hover/item:bg-[#FF5777]/30 transition-colors duration-300">
                            <svg className="w-3 h-3 text-[#FF5777]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover/item:text-[#FF5777] transition-colors duration-300">{item.title}</h4>
                            <p className="text-gray-300 text-sm mt-1 group-hover/item:text-gray-200 transition-colors duration-300">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Imagem */}
                  <div className="order-1 lg:order-2 relative group/image">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5777]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover/image:shadow-[#FF5777]/20 transition-all duration-500">
                      <Image 
                        src={Securtitydata} 
                        alt="Segurança de dados" 
                        className="w-full h-80 object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1B191F]/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                          <p className="text-white font-semibold text-sm">Máxima segurança para seus dados</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>

            {/* Seção de estatísticas/métricas */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF5777]/20 rounded-full mb-4 group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                  <span className="text-3xl font-bold text-[#FF5777]">90%</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Redução de Tempo</h4>
                <p className="text-gray-400 text-sm">Em tarefas administrativas</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF5777]/20 rounded-full mb-4 group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                  <span className="text-3xl font-bold text-[#FF5777]">99.9%</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Uptime</h4>
                <p className="text-gray-400 text-sm">Disponibilidade garantida</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF5777]/20 rounded-full mb-4 group-hover:bg-[#FF5777]/30 transition-colors duration-300">
                  <span className="text-3xl font-bold text-[#FF5777]">256</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Criptografia</h4>
                <p className="text-gray-400 text-sm">Bits de segurança</p>
              </div>
            </div>

          </section>

          {/* Estilos CSS personalizados */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-15px) rotate(180deg); }
            }
            
            .animate-float {
              animation: float 5s ease-in-out infinite;
            }
            
            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(30px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            
            .animate-fade-in-up {
              animation: fadeInUp 0.6s ease-out;
            }
          `}</style>
        </AnimatedSection>

        {/* Plano */}
       <AnimatedSection className="py-16 px-32"  delay={0.3}>
          <section id="plano">
            <Plane/>
          </section>
       </AnimatedSection>

      {/* CLIENTES */}
       <AnimatedSection className="py-16 px-32"  delay={0.3}>
          <section id="clientes">
            <Feedback/>
          </section>
       </AnimatedSection>

      {/* NEWSLETTER */}
      <section className="px-6" id="newsletter">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">Receba Novidades</h2>
        <div className="max-w-md mx-auto">
          <NewsletterForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Yhanko. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}