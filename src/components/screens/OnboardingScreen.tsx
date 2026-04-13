import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, MapPin, Stamp, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    icon: BookOpen,
    title: "Avant le départ",
    desc: "Prépare ta Bucket List de lieux à découvrir.",
  },
  {
    icon: Stamp,
    title: "Sur place",
    desc: "Tamponne ton Carnet, débloque des secrets.",
  },
  {
    icon: Printer,
    title: "Après",
    desc: "Transforme ton Carnet en souvenir imprimé.",
  },
];

interface Props {
  onGetStarted: () => void;
  onLogin: () => void;
}

const OnboardingScreen = ({ onGetStarted, onLogin }: Props) => {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-10 bg-background paper-texture">
      {/* Logo area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 mt-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
          <BookOpen className="text-primary-foreground" size={36} />
        </div>
        <h1 className="text-2xl font-display font-extrabold text-foreground tracking-tight">
          L'ODYSSÉE
        </h1>
        <p className="text-sm text-muted-foreground text-center max-w-[260px] font-body">
          Construit ton Carnet de Route. Vis, tamponne, garde le souvenir.
        </p>
      </motion.div>

      {/* Slides */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="notebook-page p-6 w-full flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center">
              {(() => {
                const Icon = slides[step].icon;
                return <Icon className="text-primary" size={28} />;
              })()}
            </div>
            <h2 className="font-display font-bold text-lg text-foreground">{slides[step].title}</h2>
            <p className="text-muted-foreground text-center text-sm font-body">{slides[step].desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === step ? "bg-primary scale-110" : "bg-border"}`}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="w-full max-w-sm flex flex-col gap-3 mb-4">
        <Button variant="hero" size="lg" className="w-full rounded-xl h-12" onClick={onGetStarted}>
          Créer mon Carnet de Route
        </Button>
        <button onClick={onLogin} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
          J'ai déjà un compte
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
