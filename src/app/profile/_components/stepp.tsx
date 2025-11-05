"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RedefinirSenha } from "./RedefinirSenha";
import { ChangeNewPassword } from "./ChengeNewPassword";
import { SenhaAlteradaPage } from "./SenhaAlteradaPage";
const steps = ["1", "2", "3"];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="xl:h-[115vh] w-[200rem] 2xl:h-[60rem] flex flex-col items-center">
      {/* 🔹 Conteúdo dos Steps com Animação */}
      <div className="2xl:bg-transparent w-[50rem] 2xl:h-[50rem] xl:h-[45rem] flex justify-center">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex justify-center">
                <RedefinirSenha           
                  nextStep={nextStep}
                />
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex justify-center">
                <ChangeNewPassword           
                  nextStep={nextStep}
                />
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              
              <div className="flex justify-center">
                <SenhaAlteradaPage />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/* 🔹 Stepper */}
       <div className="2xl:absolute xl:relative 2xl:mt-[52rem] flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* 🔹 Números dos Steps */}
            <div
              className={`w-6 h-6 flex items-center justify-center text-xs rounded-full ${
                index <= currentStep
                  ? "bg-[#F08F3E] text-white"
                  : "border-2 border-[#F1F5F7] text-[#717F96]"
              }`}
            >
              {step}
            </div>

            {/* 🔹 Separador (fica laranja se já passou por esse step) */}
            {index < steps.length - 1 && (
              <div
                className={`w-[2.5rem] h-[2px] transition-colors duration-300 ${
                  index < currentStep ? "bg-[#F08F3E]" : "bg-[#F1F5F7]"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
