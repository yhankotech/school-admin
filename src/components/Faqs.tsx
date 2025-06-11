import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como a plataforma simplifica a administração escolar?",
    answer:
      "A plataforma centraliza todas as informações da instituição em um só lugar, eliminando a necessidade de consultar vários documentos e otimizando tarefas como gestão de alunos, professores, contabilidade e geração de relatórios."
  },
  {
    question: "Quais tarefas administrativas são automatizadas?",
    answer:
      "A plataforma automatiza tarefas como geração de relatórios, gestão de pagamentos e comunicação interna, liberando tempo para que os administradores se concentrem em estratégias mais importantes."
  },
  {
    question: "Como a plataforma apoia os professores?",
    answer:
      "Ela oferece criação de planos de aula digitais com recursos multimédia, comunicação direta com alunos e pais, além de acesso a conteúdos educativos e sugestões personalizadas com ajuda da IA."
  },
  {
    question: "Os pais podem acompanhar o desempenho dos filhos?",
    answer:
      "Sim. Os pais recebem notificações sobre tarefas, eventos e reuniões, e podem interagir diretamente com os professores para acompanhar o progresso dos seus filhos."
  },
  {
    question: "É possível realizar pagamentos pela plataforma?",
    answer:
      "Sim. Os pais podem pagar propinas e outras despesas escolares com segurança, além de acompanhar o histórico de pagamentos e receber recibos eletrônicos."
  },
  {
    question: "Como a plataforma garante a segurança dos dados?",
    answer:
      "A plataforma utiliza autenticação de dois fatores, senhas seguras e controle de acesso avançado, podendo ser integrada com QR code e reconhecimento biométrico para ainda mais segurança."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">❓Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-medium  transition text-white"
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform duration-300 text-white ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
