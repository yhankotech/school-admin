"use client"
import React, { useState, useEffect } from 'react';

// Tipos TypeScript
interface Plan {
  id: string;
  name: string;
  description: string;
  period: number;
  discount: number;
  popular: boolean;
  features: string[];
  color: string;
}

interface PriceCalculation {
  originalTotal: number;
  finalTotal: number;
  monthlyEquivalent: number;
  discountAmount: number;
  savings: number;
  annualEquivalent: number;
  annualSavings: number;
}

const Plane: React.FC = () => {

  // Estados do componente
  const [selectedPlan, setSelectedPlan] = useState<string>('annual');
  const [isAnnualView, setIsAnnualView] = useState<boolean>(true);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  // Configuração dos planos
  const basePrice: number = 29.90;
  
  const plans: Plan[] = [
    {
      id: 'monthly',
      name: 'Mensal',
      description: 'Flexibilidade máxima',
      period: 1,
      discount: 0,
      popular: false,
      features: ['Acesso completo', 'Suporte 24/7', 'Cancelamento livre'],
      color: 'gray'
    },
    {
      id: 'quarterly',
      name: 'Trimestral',
      description: 'Economia inteligente',
      period: 3,
      discount: 10,
      popular: false,
      features: ['Acesso completo', 'Suporte prioritário', 'Recursos extras'],
      color: 'pink'
    },
    {
      id: 'biannual',
      name: 'Semestral',
      description: 'Ótimo custo-benefício',
      period: 6,
      discount: 15,
      popular: false,
      features: ['Acesso completo', 'Suporte VIP', 'Recursos premium'],
      color: 'pink'
    },
    {
      id: 'annual',
      name: 'Anual',
      description: 'Máxima economia',
      period: 12,
      discount: 20,
      popular: true,
      features: ['Acesso completo', 'Suporte exclusivo', 'Todos os recursos', 'Acesso antecipado'],
      color: 'primary'
    }
  ];

  // Função para calcular preços
  const calculatePrices = (plan: Plan): PriceCalculation => {
    const originalTotal = basePrice * plan.period;
    const discountAmount = originalTotal * (plan.discount / 100);
    const finalTotal = originalTotal - discountAmount;
    const monthlyEquivalent = finalTotal / plan.period;
    const annualEquivalent = monthlyEquivalent * 12;
    const annualSavings = (basePrice * 12) - annualEquivalent;
    
    return {
      originalTotal,
      finalTotal,
      monthlyEquivalent,
      discountAmount,
      savings: originalTotal - finalTotal,
      annualEquivalent,
      annualSavings
    };
  };

  // Filtrar planos baseado na visualização
  const filteredPlans = isAnnualView ? plans : plans.filter(p => p.period <= 3);

  // Função para selecionar plano
  const selectPlan = (planId: string): void => {
    setSelectedPlan(planId);
    setShowSummary(true);
  };

  // Função para obter período em texto
  const getPeriodText = (period: number): string => {
    switch (period) {
      case 1: return 'mês';
      case 3: return 'trimestre';
      case 6: return 'semestre';
      case 12: return 'ano';
      default: return 'período';
    }
  };

  // Componente do Ícone de Check
  const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-[#FF5777] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
    </svg>
  );

  // Componente do Ícone de Seta
  const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg 
      className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  // Componente do Card de Plano
  const PlanCard: React.FC<{ plan: Plan; index: number }> = ({ plan, index }) => {
    const prices = calculatePrices(plan);
    const isSelected = selectedPlan === plan.id;

    const cardClasses = `
      relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-3
      ${plan.popular 
        ? 'bg-gradient-to-br from-[#FF5777]/10 to-[#FF5777]/5 border-2 border-[#FF5777] shadow-2xl shadow-[#FF5777]/25' 
        : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#FF5777]/30'
      }
      ${isSelected ? 'ring-4 ring-[#FF5777]/50 scale-105 shadow-2xl shadow-[#FF5777]/30' : ''}
      animate-fade-in-up backdrop-blur-sm
    `;

    const titleClasses = `text-2xl font-bold mb-2 ${plan.popular ? 'text-[#FF5777]' : 'text-[#1B191F]'}`;
    const descriptionClasses = plan.popular ? 'text-[#FF5777]/80' : 'text-gray-600';
    const priceClasses = `text-4xl font-bold mb-2 ${plan.popular ? 'text-[#FF5777]' : 'text-[#1B191F]'}`;
    const periodClasses = `text-sm ${plan.popular ? 'text-[#FF5777]/70' : 'text-gray-500'}`;
    const featureClasses = `text-sm ${plan.popular ? 'text-[#1B191F] font-semibold' : 'text-gray-700'}`;

    const buttonClasses = `
      w-full py-4 px-6 hover:cursor-pointer rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg
      ${plan.popular 
        ? 'bg-gradient-to-r from-[#FF5777] to-[#FF5777]/90 hover:from-[#FF5777]/90 hover:to-[#FF5777] text-white shadow-[#FF5777]/30 hover:shadow-[#FF5777]/50' 
        : plan.discount > 0 
          ? 'bg-gradient-to-r from-[#FF5777]/80 to-[#FF5777]/70 hover:from-[#FF5777] hover:to-[#FF5777]/90 text-white shadow-[#FF5777]/20'
          : 'bg-gradient-to-r from-[#1B191F] to-[#1B191F]/90 hover:from-[#1B191F]/90 hover:to-[#1B191F] text-white'
      }
    `;

    return (
      <div
        className={cardClasses}
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => selectPlan(plan.id)}
      >
        {/* Efeito de brilho no fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        {/* Badges */}
        {plan.popular && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FF5777] to-[#FF5777]/80 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
            ⭐ MAIS POPULAR
          </div>
        )}
        
        {plan.discount > 0 && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF5777] to-[#FF5777]/80 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg">
            {plan.discount}% OFF
          </div>
        )}
        
        <div className="text-center relative z-10">
          {/* Título */}
          <div className="mb-6">
            <h3 className={titleClasses}>{plan.name}</h3>
            <p className={descriptionClasses}>{plan.description}</p>
          </div>
          
          {/* Preços */}
          <div className="mb-8">
            {plan.discount > 0 && (
              <div className="text-sm text-gray-500 line-through mb-1">
                R$ {prices.originalTotal.toFixed(2)}
              </div>
            )}
            
            <div className={priceClasses}>
              R$ {prices.finalTotal.toFixed(2)}
            </div>
            
            <div className={periodClasses}>
              por {getPeriodText(plan.period)}
            </div>
            
            {plan.period > 1 && (
              <>
                <div className="text-[#FF5777] font-semibold text-sm mt-1">
                  R$ {prices.monthlyEquivalent.toFixed(2)}/mês
                </div>
                {plan.discount > 0 && (
                  <div className="text-[#FF5777] font-bold text-sm bg-[#FF5777]/10 px-3 py-1 rounded-full inline-block mt-2">
                    💰 Economize R$ {prices.savings.toFixed(2)}!
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Features */}
          <div className="space-y-3 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center justify-center">
                <CheckIcon />
                <span className={featureClasses}>{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Botão */}
          <button className={buttonClasses}>
            {plan.discount > 0 ? `💸 Economiza ${plan.discount}%` : '🚀 Começar Agora'}
          </button>
        </div>
      </div>
    );
  };

  // Componente do Resumo do Plano Selecionado
  const PlanSummary: React.FC = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    const prices = plan ? calculatePrices(plan) : null;

    if (!showSummary || !plan || !prices) return null;

    return (
      <div className="max-w-4xl mx-auto mt-16 px-6">
        <div className="bg-white backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#FF5777]/20 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center text-[#1B191F] mb-6">
            📋 Resumo do Plano Selecionado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-[#FF5777]/10 to-[#FF5777]/5 p-6 rounded-xl border border-[#FF5777]/20">
              <h3 className="font-bold text-[#FF5777] mb-2">Plano Escolhido</h3>
              <p className="text-2xl font-bold text-[#1B191F]">{plan.name}</p>
              <p className="text-[#FF5777]/80">{plan.description}</p>
            </div>
            
            <div className="bg-gradient-to-r from-[#FF5777]/10 to-[#FF5777]/5 p-6 rounded-xl border border-[#FF5777]/20">
              <h3 className="font-bold text-[#FF5777] mb-2">Valor Total</h3>
              <p className="text-2xl font-bold text-[#1B191F]">R$ {prices.finalTotal.toFixed(2)}</p>
              <p className="text-[#FF5777]/80">R$ {prices.monthlyEquivalent.toFixed(2)}/mês</p>
            </div>
            
            <div className="bg-gradient-to-r from-[#FF5777]/10 to-[#FF5777]/5 p-6 rounded-xl border border-[#FF5777]/20">
              <h3 className="font-bold text-[#FF5777] mb-2">Economia</h3>
              <p className="text-2xl font-bold text-[#1B191F]">{plan.discount}%</p>
              <p className="text-[#FF5777]/80">R$ {prices.annualSavings.toFixed(2)}/ano</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Componente da Tabela de Comparação
  const ComparisonTable: React.FC = () => (
    <div className="max-w-6xl mx-auto mt-16 px-6">
      <div className="bg-white backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#FF5777]/20">
        <h2 className="text-3xl font-bold text-center text-[#1B191F] mb-8">
          📊 Comparação de Economia
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#FF5777]/20">
                <th className="text-left py-4 px-4 font-bold text-[#1B191F]">Plano</th>
                <th className="text-center py-4 px-4 font-bold text-[#1B191F]">Período</th>
                <th className="text-center py-4 px-4 font-bold text-[#1B191F]">Preço Total</th>
                <th className="text-center py-4 px-4 font-bold text-[#1B191F]">Preço/Mês</th>
                <th className="text-center py-4 px-4 font-bold text-[#1B191F]">Desconto</th>
                <th className="text-center py-4 px-4 font-bold text-[#1B191F]">Economia Anual</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlans.map((plan) => {
                const prices = calculatePrices(plan);
                const rowClasses = `border-b border-gray-100 hover:bg-[#FF5777]/5 transition-colors ${selectedPlan === plan.id ? 'bg-[#FF5777]/20' : ''}`;
                
                return (
                  <tr key={plan.id} className={rowClasses}>
                    <td className="py-4 px-4">
                      <div className={`font-semibold ${plan.popular ? 'text-[#FF5777]' : 'text-[#1B191F]'}`}>
                        {plan.name}
                      </div>
                      <div className="text-sm text-gray-600">{plan.description}</div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="font-semibold text-[#1B191F]">{plan.period} {plan.period === 1 ? 'mês' : 'meses'}</div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="font-semibold text-[#1B191F]">R$ {prices.finalTotal.toFixed(2)}</div>
                      {plan.discount > 0 && (
                        <div className="text-sm text-gray-500 line-through">R$ {prices.originalTotal.toFixed(2)}</div>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="font-semibold text-[#1B191F]">R$ {prices.monthlyEquivalent.toFixed(2)}</div>
                    </td>
                    <td className="text-center py-4 px-4">
                      {plan.discount > 0 ? (
                        <div className="text-[#FF5777] font-semibold bg-[#FF5777]/10 px-2 py-1 rounded">{plan.discount}% OFF</div>
                      ) : (
                        <div className="text-gray-500">-</div>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className={`font-semibold ${prices.annualSavings > 0 ? 'text-[#FF5777]' : 'text-gray-500'}`}>
                        {prices.annualSavings > 0 ? `R$ ${prices.annualSavings.toFixed(2)}` : '-'}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Componente FAQ
  const FAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number): void => {
      setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
      {
        question: "Posso mudar de plano a qualquer momento?",
        answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Os ajustes são feitos proporcionalmente e você recebe créditos ou é cobrado pela diferença."
      },
      {
        question: "Como funciona o desconto?",
        answer: "O desconto é aplicado automaticamente no checkout. Quanto maior o período de assinatura, maior o desconto: 10% trimestral, 15% semestral e 20% anual."
      },
      {
        question: "Há garantia de reembolso?",
        answer: "Oferecemos garantia de 30 dias para todos os planos. Se não ficar satisfeito, devolvemos 100% do valor pago, sem perguntas."
      },
      {
        question: "Os preços incluem impostos?",
        answer: "Os preços mostrados são finais e já incluem todos os impostos aplicáveis no Brasil. Não há taxas ocultas ou custos adicionais."
      },
      {
        question: "Como a plataforma simplifica a administração escolar?",
        answer: "A plataforma centraliza todas as informações da instituição em um só lugar, eliminando a necessidade de consultar vários documentos e otimizando tarefas como gestão de alunos, professores, contabilidade e geração de relatórios."
      },
      {
        question: "Quais tarefas administrativas são automatizadas?",
        answer: "A plataforma automatiza tarefas como geração de relatórios, gestão de pagamentos e comunicação interna, liberando tempo para que os administradores se concentrem em estratégias mais importantes."
      },
      {
        question: "Como a plataforma apoia os professores?",
        answer: "Ela oferece criação de planos de aula digitais com recursos multimédia, comunicação direta com alunos e pais, além de acesso a conteúdos educativos e sugestões personalizadas com ajuda da IA."
      },
      {
        question: "Os pais podem acompanhar o desempenho dos filhos?",
        answer: "Sim. Os pais recebem notificações sobre tarefas, eventos e reuniões, e podem interagir diretamente com os professores para acompanhar o progresso dos seus filhos."
      },
      {
        question: "É possível realizar pagamentos pela plataforma?",
        answer: "Sim. Os pais podem pagar propinas e outras despesas escolares com segurança, além de acompanhar o histórico de pagamentos e receber lembretes automáticos."
      },
      {
        question: "A plataforma é segura para dados sensíveis?",
        answer: "Absolutamente. Utilizamos criptografia de ponta e seguimos rigorosos protocolos de segurança para proteger todos os dados pessoais e académicos dos utilizadores."
      }
    ];

    return (
      <div className="max-w-3xl mx-auto mt-16 px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            ❓ Perguntas Frequentes
          </h2>
          <p className="text-gray-100">Tire suas dúvidas sobre nossos planos e serviços</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#FF5777]/30"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[#fff] pr-4">{faq.question}</h3>
                <ChevronIcon isOpen={openFAQ === index} />
              </div>
              {openFAQ === index && (
                <div className="mt-4 text-gray-100 animate-fade-in-up leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // useEffect para inicialização
  useEffect(() => {
    setShowSummary(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#1B191F] via-[#1B191F]/95 to-[#1B191F]/90 min-h-screen py-12 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5777]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Cabeçalho */}
      <div className="text-center mb-16 animate-fade-in-up relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Escolha Seu <span className="text-[#FF5777]">Plano</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Economize mais com planos de longo prazo. Quanto maior o período, maior o desconto!
        </p>
        
        {/* Toggle de Visualização */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <span className="text-gray-300">Mensal</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={isAnnualView}
              onChange={(e) => setIsAnnualView(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#FF5777]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF5777]"></div>
          </label>
          <span className="text-gray-300">Anual <span className="text-[#FF5777] font-semibold">(Economize até 20%)</span></span>
        </div>
      </div>
      
      {/* Grid de Cards */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPlans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
      
      {/* Resumo do Plano Selecionado */}
      <PlanSummary />
      
      {/* Seção de Comparação */}
      <ComparisonTable />
      
      {/* FAQ */}
      <FAQ />
      
      {/* Estilos CSS personalizados */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Plane;