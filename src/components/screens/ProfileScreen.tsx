import { motion } from "framer-motion";
import { Printer, Crown, Flame, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { places } from "@/data/places";

interface Props {
  onPrintCarnet: () => void;
  onPremium: () => void;
  onNotifications: () => void;
}

const ProfileScreen = ({ onPrintCarnet, onPremium, onNotifications }: Props) => {
  const pct = 80;
  const souvenirs = places.slice(0, 5);

  return (
    <div className="px-5 pt-8 pb-8 bg-background min-h-screen">
      {/* Avatar + notifications */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center text-2xl font-display font-bold">
          🧭
        </div>
        <div className="flex-1">
          <h1 className="font-display font-extrabold text-lg">Léa Dumont</h1>
          <p className="text-xs text-muted-foreground font-body">Voyageuse curieuse depuis 2024</p>
        </div>
        <button onClick={onNotifications} className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center relative">
          <Bell size={18} className="text-muted-foreground" />
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent border-2 border-background" />
        </button>
      </div>

      {/* Streak */}
      <div className="notebook-page p-4 mb-4 flex items-center gap-3">
        <Flame size={20} className="text-accent" />
        <div>
          <p className="font-display font-bold text-sm">Série : 3 jours de suite 🌱</p>
          <p className="text-[10px] text-muted-foreground font-body">Continue d'explorer pour garder ta série !</p>
        </div>
      </div>

      {/* Progression */}
      <div className="notebook-page p-5 mb-4">
        <h3 className="font-display font-bold text-sm mb-3">Progression du Carnet</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-display font-extrabold text-2xl text-primary">8</span>
          <span className="text-sm text-muted-foreground font-body">/10 étapes complétées</span>
        </div>
        <div className="h-2.5 bg-muted rounded-full overflow-hidden mb-3">
          <motion.div className="h-full bg-primary rounded-full" initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1 }} />
        </div>

        <h3 className="font-display font-bold text-sm mb-2 mt-4">Jauge d'Explorateur</h3>
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2.5 flex-1 bg-muted rounded-full overflow-hidden">
            <motion.div className="h-full bg-gold rounded-full" initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1, delay: 0.3 }} />
          </div>
          <span className="text-xs font-display font-bold text-gold">Confirmé</span>
        </div>
      </div>

      {/* Souvenirs */}
      <div className="notebook-page p-5 mb-4">
        <h3 className="font-display font-bold text-sm mb-3">Souvenirs</h3>
        <div className="flex gap-2 flex-wrap">
          {souvenirs.map((p) => (
            <img key={p.id} src={p.img} alt={p.name} loading="lazy" className="w-12 h-12 rounded-lg object-cover border border-border" />
          ))}
          <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/30">
            <span className="text-lg">✨</span>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2 font-body">2 Hidden Gems débloqués</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <Button variant="hero" className="w-full rounded-xl h-12 gap-2" onClick={onPrintCarnet}>
          <Printer size={16} /> Imprimer mon Carnet souvenir
        </Button>
        <Button variant="gold" className="w-full rounded-xl h-12 gap-2" onClick={onPremium}>
          <Crown size={16} /> Packs & Premium
        </Button>
      </div>
    </div>
  );
};

export default ProfileScreen;
