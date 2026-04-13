import { motion } from "framer-motion";
import { GripVertical, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { places as allPlaces } from "@/data/places";

const carnetPlaces = allPlaces.slice(0, 5).map((p) => ({ ...p, status: "À faire" }));

interface Props {
  onStartVoyage: () => void;
}

const CarnetScreen = ({ onStartVoyage }: Props) => (
  <div className="px-5 pt-8 pb-32 bg-background min-h-screen">
    <h1 className="font-display font-extrabold text-xl mb-1">Mon Carnet de Route</h1>
    <p className="text-sm text-muted-foreground font-body mb-6">Ton itinéraire personnalisé</p>

    <div className="notebook-page p-5 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
          <MapPin size={16} className="text-gold" />
        </div>
        <span className="font-display font-bold text-sm">{carnetPlaces.length} étapes</span>
      </div>

      <div className="flex flex-col gap-3">
        {carnetPlaces.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-background/60 border border-border/50"
          >
            <GripVertical size={14} className="text-muted-foreground/40 shrink-0 cursor-grab" />
            <img src={p.img} alt={p.name} loading="lazy" className="w-10 h-10 rounded-lg object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-sm truncate">{p.name}</p>
              <span className="text-[10px] text-muted-foreground font-body">{p.status}</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-border shrink-0" />
          </motion.div>
        ))}
      </div>
    </div>

    <Button variant="hero" size="lg" className="w-full rounded-xl h-12" onClick={onStartVoyage}>
      Commencer le voyage
    </Button>
  </div>
);

export default CarnetScreen;
