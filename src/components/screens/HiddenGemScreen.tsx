import { motion } from "framer-motion";
import { Sparkles, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onContinue: () => void;
}

const HiddenGemScreen = ({ onContinue }: Props) => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center px-5 py-10">
    <motion.div
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="notebook-page w-full max-w-sm p-8 flex flex-col items-center gap-5 relative overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-xl" />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center relative"
      >
        <Sparkles size={28} className="text-gold" />
      </motion.div>

      <h2 className="font-display font-extrabold text-lg text-center relative">Page secrète débloquée !</h2>

      <div className="w-full p-4 rounded-xl bg-gold/10 border border-gold/20 relative">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={14} className="text-gold" />
          <span className="font-display font-bold text-sm">Point de vue secret sur la vieille ville</span>
        </div>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          Parce que tu explores les lieux moins touristiques, nous te révélons un secret…
          Un panorama caché connu uniquement des habitants.
        </p>
      </div>

      <div className="flex gap-3 w-full relative">
        <Button variant="outline-sand" className="flex-1 rounded-xl h-11 gap-1.5 text-xs">
          <MapPin size={13} /> Voir sur la carte
        </Button>
        <Button variant="gold" className="flex-1 rounded-xl h-11 gap-1.5 text-xs" onClick={onContinue}>
          <BookOpen size={13} /> Ajouter au Carnet
        </Button>
      </div>
    </motion.div>
  </div>
);

export default HiddenGemScreen;
