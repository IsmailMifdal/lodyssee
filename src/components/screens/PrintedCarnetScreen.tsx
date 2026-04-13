import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onBack: () => void;
}

const PrintedCarnetScreen = ({ onBack }: Props) => (
  <div className="bg-background min-h-screen pb-8">
    <div className="px-5 pt-6 mb-6">
      <button onClick={onBack} className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
        <ArrowLeft size={14} /> Retour
      </button>
      <h1 className="font-display font-extrabold text-xl mb-1">Carnet Souvenir Imprimé</h1>
      <p className="text-sm text-muted-foreground font-body">Transforme ton Carnet numérique en un vrai livre souvenir.</p>
    </div>

    {/* Book mockup */}
    <div className="mx-5 notebook-page p-6 flex flex-col items-center gap-4 mb-6">
      <div className="w-48 h-60 rounded-lg bg-gradient-to-br from-sage-light to-sand-dark border-2 border-border shadow-lg flex flex-col items-center justify-center gap-2 relative overflow-hidden">
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full border-2 border-dashed border-stamp-red/40 flex items-center justify-center rotate-[-5deg]">
          <span className="text-[6px] font-display font-bold text-stamp-red/60">VISITÉ</span>
        </div>
        <span className="text-4xl">📔</span>
        <span className="font-display font-bold text-xs text-foreground/70">Mon Voyage</span>
        <span className="text-[9px] text-muted-foreground font-body">Léa Dumont — 2024</span>
      </div>
    </div>

    {/* Preview pages */}
    <div className="px-5 mb-6">
      <h3 className="font-display font-bold text-sm mb-3">Aperçu des pages</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {[
          { label: "Photos", emoji: "📸" },
          { label: "Tampons", emoji: "🪪" },
          { label: "Anecdotes", emoji: "💡" },
          { label: "Carte", emoji: "🗺️" },
        ].map((p, i) => (
          <div key={i} className="shrink-0 w-24 h-32 notebook-page flex flex-col items-center justify-center gap-1.5">
            <span className="text-2xl">{p.emoji}</span>
            <span className="text-[10px] font-display font-semibold">{p.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="px-5">
      <div className="notebook-page p-4 mb-4 text-center">
        <p className="text-sm font-display font-bold mb-1">À partir de 25–30 €</p>
        <p className="text-xs text-muted-foreground font-body">Livraison sous 7 jours</p>
      </div>
      <Button variant="gold" size="lg" className="w-full rounded-xl h-12 gap-2">
        <ShoppingBag size={16} /> Commander mon Carnet imprimé
      </Button>
    </div>
  </div>
);

export default PrintedCarnetScreen;
