import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, PenLine, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onContinue: () => void;
}

const CheckInScreen = ({ onContinue }: Props) => {
  const [stamped, setStamped] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-5 pt-10 pb-8">
      {/* Stamp animation */}
      <div className="notebook-page w-full max-w-sm p-8 flex flex-col items-center gap-6 relative overflow-hidden">
        <motion.div
          initial={{ scale: 3, rotate: -15, opacity: 0 }}
          animate={{ scale: 1, rotate: -3, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          onAnimationComplete={() => setStamped(true)}
          className="relative"
        >
          <div className="w-28 h-28 rounded-full border-4 border-dashed border-stamp-red flex flex-col items-center justify-center rotate-[-3deg]">
            <span className="font-display font-extrabold text-stamp-red text-sm tracking-wider">VISITÉ</span>
            <span className="text-[9px] text-stamp-red font-body mt-0.5">Musée d'Art Moderne</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: stamped ? 1 : 0, y: stamped ? 0 : 10 }}
          className="text-center"
        >
          <h2 className="font-display font-extrabold text-lg mb-1">Étape validée !</h2>
          <p className="text-xs text-muted-foreground font-body">Tampon ajouté à ton Carnet de Route</p>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stamped ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="w-full h-28 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 bg-muted/30"
        >
          <Camera size={20} className="text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground font-body">Ajouter une photo souvenir</span>
        </motion.div>

        {/* Anecdote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stamped ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="w-full p-3 rounded-lg bg-sage-light/50"
        >
          <p className="text-xs text-sage-dark font-body leading-relaxed">
            💡 <strong>Le savais-tu ?</strong> Ce musée a été conçu par un architecte japonais primé au Pritzker.
            Les lignes fluides du bâtiment symbolisent le dialogue entre l'art et la nature.
          </p>
        </motion.div>
      </div>

      {/* Points */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: stamped ? 1 : 0, scale: stamped ? 1 : 0.9 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 mt-6"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/20">
          <Sparkles size={12} className="text-gold" />
          <span className="text-xs font-display font-bold text-gold">+75 pts</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-light">
          <span className="text-xs font-display font-bold text-primary">+10% Explorateur</span>
        </div>
      </motion.div>

      {/* Actions */}
      <div className="w-full max-w-sm flex flex-col gap-3 mt-8">
        <Button variant="outline-sand" className="rounded-xl h-11 gap-2">
          <PenLine size={14} /> Ajouter une note personnelle
        </Button>
        <Button variant="hero" className="rounded-xl h-12 gap-2" onClick={onContinue}>
          Continuer mon voyage <ArrowRight size={14} />
        </Button>
      </div>
    </div>
  );
};

export default CheckInScreen;
