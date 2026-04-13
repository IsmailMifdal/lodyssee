import { Clock, Tag, Leaf, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onBack: () => void;
  onCheckIn: () => void;
}

const PlaceDetailScreen = ({ onBack, onCheckIn }: Props) => (
  <div className="bg-background min-h-screen pb-8">
    {/* Hero */}
    <div className="relative h-52 bg-sage-light flex items-end">
      <button onClick={onBack} className="absolute top-4 left-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
        <ArrowLeft size={16} />
      </button>
      <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-40">🏛️</div>
      <div className="relative px-5 pb-4">
        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-display font-bold bg-navy/10 text-navy mb-2">Culture</span>
        <h1 className="font-display font-extrabold text-xl">Musée d'Art Moderne</h1>
      </div>
    </div>

    <div className="px-5 pt-5 flex flex-col gap-5">
      {/* Description */}
      <p className="text-sm text-muted-foreground font-body leading-relaxed">
        Un chef-d'œuvre architectural abritant une collection exceptionnelle d'art contemporain.
        Découvre des expositions temporaires et une vue panoramique depuis le toit-terrasse.
      </p>

      {/* Info badges */}
      <div className="flex gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border">
          <Clock size={13} className="text-muted-foreground" />
          <span className="text-xs font-body text-muted-foreground">10h – 18h</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border">
          <Tag size={13} className="text-muted-foreground" />
          <span className="text-xs font-body text-muted-foreground">Billet disponible</span>
        </div>
      </div>

      {/* Notebook note */}
      <div className="notebook-page p-4">
        <p className="text-xs text-muted-foreground font-body mb-1">📓 Prévu dans ton Carnet aujourd'hui</p>
        <div className="flex items-center gap-1.5 mt-2">
          <Leaf size={12} className="text-primary" />
          <span className="text-[10px] font-display font-semibold text-primary">Lieu hors des sentiers battus — bonus Explorateur</span>
        </div>
      </div>

      <Button variant="hero" size="lg" className="w-full rounded-xl h-12" onClick={onCheckIn}>
        Je suis arrivé ici
      </Button>
    </div>
  </div>
);

export default PlaceDetailScreen;
