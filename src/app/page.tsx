"use client"

import { AnimatedSection } from "../utils/animations";
import Link from "next/link";
import Image from 'next/image';
import { NewsletterForm } from '@/components/NewslatterForm';
import Dashboard from "@/assets/Dashboard.svg";
import Teacher from "@/assets/Teachers.svg";
import Chat from "@/assets/Chat.svg";
import Student from "@/assets/StudentDetails.svg";
import Finance from "@/assets/Finance.svg";
import { Button } from "@/components/ui/button";
import Feedback from "@/components/Costumers";
import Yhanko from "@/assets/yhankoIMG.svg";
import Automacao from "@/assets/automacao.jpg";
import Future from "@/assets/future.jpg";
import Event from "@/assets/Events.svg";
import Support from "../assets/chatc.gif";
import Information from "../assets/consulting.gif";
import Financial from "@/assets/Finance.gif";
import Securtitydata from "../assets/securityData.jpg";
import FAQAccordion from "../components/Faqs";


export default function Home() {
  return (
    <main className="font-sans bg-[#1B191F]">
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
                <li className="nav-item-5 animate-slide-in-left">
                  <a href="#clientes" className="nav-link hover:text-[#FF5777] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">Testemunho</a>
                </li>
            </ul>
        </nav>
        <div className="flex ml-auto px-4 space-x-3">
          <Button className="px-6 py-2 bg-transparent text-sm font-medium text-[#FF5777] border border-[#FF5777] hover:bg-[#FF5777] hover:text-white cursor-pointer">
             <Link href="/login">Login</Link>
          </Button>
          <Button className="px-8 py-2 text-sm font-medium text-white bg-[#FF5777] border border-[#FF5777] hover:border-[#FF5777] hover:bg-[#FF5777] cursor-pointer">
            Cadastre-se
          </Button>
        </div>
      </header>

      {/* HERO */}
      <AnimatedSection className="py-16 px-32"  delay={0.2}>
        <section className="text-center py-30  gradient-background bg-white h-[30rem] space-y-6" id="home">
          <h1 className="text-4xl font-bold mb-4 text-white">Transformando a Educação com <span className="text-[#FF5777]">Tecnologia</span></h1>

          <p className="max-w-xl mx-auto text-white"> Imagine um futuro onde a tecnologia serve como um poderoso aliado na educação, conectando professores, alunos e pais numa experiência única e transformadora. Apresentamos uma plataforma inovadora, dedicada exclusivamente ao universo da educação. Uma plataforma que impulsionará a inclusão tecnológica e revolucionará a maneira como aprendemos e ensinamos.</p>

          <Button className="px-10 py-5 text-sm font-medium animate-pulse text-white bg-[#FF5777] hover:bg-[#FF5777]  cursor-pointer">
              Cadastre-se
          </Button>
        </section>
      </AnimatedSection>

      {/* SOBRE O PRODUTO */}
       <AnimatedSection className="py-16 px-32"  delay={0.4}>
          <section className="py-16 px-32" id="sobre">
            <h2 className="text-3xl font-semibold mb-6 text-white">Plataforma</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
              
                <div className="space-y-12">
                    
                    <div className="flex items-start">
                        <div className="flex flex-col items-center mr-8">
                            <span className="section-number">1</span>
                            <div className="section-line h-32 mt-4"></div>
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
                    
                    <div className="flex items-start">
                        <div className="flex flex-col items-center mr-8">
                            <span className="section-number">2</span>
                            <div className="section-line h-24 mt-4"></div>
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
                    
                    <div className="flex items-start">
                        <div className="flex flex-col items-center mr-8">
                            <span className="section-number">3</span>
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
              <Image src={Dashboard} alt="Funcionalidade 1" className="rounded-xl shadow" />
              <Image src={Teacher} alt="Funcionalidade 2" className="rounded-xl shadow" />
              <Image src={Chat} alt="Funcionalidade 3" className="rounded-xl shadow" />
              <Image src={Student} alt="Funcionalidade 4" className="rounded-xl shadow" />
              <Image src={Finance} alt="Funcionalidade 5" className="rounded-xl shadow" />
              <Image src={Event} alt="Funcionalidade 6" className="rounded-xl shadow" />
            </div>
            </div>
          </section>
       </AnimatedSection>


      {/* CASOS DE USO */}
       <AnimatedSection className="py-16 px-32"  delay={0.6}>
          <section className="py-16 px-32" id="uso">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center">Pais Conectados e Envolvidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Item 1 */}
              <div className="border border-[#FF5777] p-6 rounded-xl shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl space-y-3">
                <div className="flex space-x-2 items-center">
                    <Image src={Support} alt="support" className="w-10 h-10 rounded-2xl"/>
                    <h3 className="text-xl font-semibold text-[#FF5777] mb-2"> Comunicação e Participaçãos</h3> 
                </div>
                <p className="text-white">
                  Os pais podem acompanhar o progresso dos seus filhos, 
                  receber notificações de eventos, reuniões, tarefas e 
                  avaliações, e interagir diretamente com os professores. A plataforma torna os pais participantes ativos no processo educativo.
                </p>
              </div>

              {/* Item 2 */}
              <div className="border border-[#FF5777] p-6 rounded-xl shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl space-y-3">
                <div className="flex space-x-2 items-center">
                  <Image src={Information} alt="support" className="w-10 h-10 rounded-2xl"/>
                  <h3 className="text-xl font-semibold text-[#FF5777] mb-2">Acesso à Informação</h3>
                </div>
                <p className="text-white">
                  A plataforma oferece aos pais acesso a informações importantes sobre a instituição, os horários, as atividades escolares e os 
                  recursos disponíveis, mantendo-os informados sobre tudo o que é relevante para a educação dos seus filhos.
                </p>
              </div>

              {/* Item 3 */}
              <div className="border border-[#FF5777] p-6 rounded-xl shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl space-y-3">
                <div className="flex space-x-2 items-center">
                  <Image src={Financial} alt="support" className="w-10 h-10 rounded-2xl"/>
                  <h3 className="text-xl font-semibold text-[#FF5777] mb-2">Gerenciamento Financeiro</h3>
                </div>
                <p className="text-white">
                  Os pais podem realizar pagamentos de propinas e outras 
                  despesas escolares através da plataforma, de forma rápida, 
                  segura e conveniente. A plataforma também permite que os pais 
                  rastreiem os seus pagamentos e recebam recibos eletrónicos.
                </p>
              </div>
            </div>
          </section>
       </AnimatedSection>

      {/* VANTAGENS */}
       <AnimatedSection className="py-16 px-32"  delay={0.8}>
          <section className="py-16 px-32" id="vantagens">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center">Vantagens</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-[#FF5777] rounded-lg space-y-4">
              <div>
                  <h3 className="font-semibold text-[#FF5777]">Automação de processos</h3>
                  <p className="text-white">Economize tempo com relatórios automáticos, gestão de pagamentos e muito mais.</p>
              </div>
                <Image src={Automacao} alt="automacao" className="rounded-lg"/>
              </div>
              <div className="p-4 border border-[#FF5777] rounded-lg space-y-4">
                <div>
                  <h3 className="font-semibold text-[#FF5777]">Inclusão Digital</h3>
                  <p className="text-white">Ferramentas acessíveis para todos, incluindo alunos com necessidades especiais.</p>
                </div>
                <Image src={Future} alt="automacao" className="rounded-lg"/>
              </div>
              <div className="p-4 border border-[#FF5777] rounded-lg space-y-4">
              <div>
                  <h3 className="font-semibold text-[#FF5777]">Segurança</h3>
                  <p className="text-white">Sgurança nos seus dados e a todo tipo de infroamções e operações.</p>
              </div>
              <Image src={Securtitydata} alt="automacao" className="rounded-lg"/>
              </div>
            </div>
          </section>
       </AnimatedSection>

      {/* CLIENTES */}
       <AnimatedSection className="py-16 px-32"  delay={0.10}>
          <section id="clientes">
            <Feedback/>
          </section>
       </AnimatedSection>

       {/* Frquents questions */}
       <AnimatedSection className="py-16 px-32"  delay={0.10}>
          <section>
          <FAQAccordion/>
          </section>
       </AnimatedSection>


      {/* NEWSLETTER */}
      <section className="py-16 px-6" id="newsletter">
        <h2 className="text-3xl font-semibold mb-6 text-[#FF5777] text-center">Receba Novidades</h2>
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
