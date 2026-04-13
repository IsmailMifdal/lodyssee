import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { places } from "@/data/places";

const categories = ["Tous", "Musées & Culture", "Balades & Randonnées", "Rues historiques", "Points de vue"];

const tagColors: Record<string, string> = {
  Culture: "bg-navy/10 text-navy",
  Nature: "bg-sage-light text-sage-dark",
  "Rue historique": "bg-gold/20 text-gold",
  Vue: "bg-accent/20 text-accent",
};

interface Props {
  onViewCarnet: (selected: number[]) => void;
}

const BucketListScreen = ({ onViewCarnet }: Props) => {
  const [filter, setFilter] = useState("Tous");
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = filter === "Tous" ? places : places.filter((p) => p.type === filter);
  const toggle = (id: number) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <div className="px-5 pt-8 pb-32 bg-background min-h-screen">
      <h1 className="font-display font-extrabold text-xl mb-1">Prépare ton Carnet de Route</h1>
      <p className="text-sm text-muted-foreground font-body mb-5">Choisis les lieux que tu rêves de découvrir.</p>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-display font-semibold transition-colors ${
              filter === c ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border border-border"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((place, i) => {
          const added = selected.includes(place.id);
          return (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="notebook-page p-4 flex items-center gap-4"
            >
              <img
                src={place.img}
                alt={place.name}
                loading="lazy"
                className="w-12 h-12 rounded-lg object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-sm truncate">{place.name}</p>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-display font-semibold ${tagColors[place.tag] || ""}`}>
                  {place.tag}
                </span>
              </div>
              <button
                onClick={() => toggle(place.id)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shrink-0 ${
                  added ? "bg-primary text-primary-foreground" : "border-2 border-border text-muted-foreground hover:border-primary"
                }`}
              >
                {added ? <Check size={16} /> : <Plus size={16} />}
              </button>
            </motion.div>
          );
        })}
      </div>

      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[390px] px-5">
        <div className="notebook-page p-4 flex items-center justify-between">
          <span className="text-sm font-display font-semibold">{selected.length} lieu{selected.length > 1 ? "x" : ""} sélectionné{selected.length > 1 ? "s" : ""}</span>
          <Button variant="hero" size="sm" className="rounded-lg" onClick={() => onViewCarnet(selected)} disabled={selected.length === 0}>
            Voir mon Carnet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BucketListScreen;
