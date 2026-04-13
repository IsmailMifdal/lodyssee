import { useState } from "react";
import { ThumbsUp, ArrowLeft } from "lucide-react";

const feedItems = [
  { avatar: "🌿", name: "Sarah", action: "a tamponné 'Rue des Artisans' et débloqué une Page secrète.", pts: 50, time: "Il y a 12 min", bravos: 3 },
  { avatar: "🏔️", name: "Yassine", action: "a complété son Carnet à 100% !", pts: 100, time: "Il y a 1h", bravos: 7 },
  { avatar: "🧭", name: "Léa", action: "a tamponné 'Belvédère du Coucher de Soleil'.", pts: 75, time: "Il y a 2h", bravos: 2 },
  { avatar: "🏛️", name: "Maxime", action: "a débloqué un Hidden Gem !", pts: 60, time: "Il y a 3h", bravos: 5 },
];

interface Props {
  onBack: () => void;
}

const TeamFeedScreen = ({ onBack }: Props) => {
  const [bravos, setBravos] = useState<Record<number, boolean>>({});

  const toggleBravo = (i: number) => setBravos((b) => ({ ...b, [i]: !b[i] }));

  return (
    <div className="px-5 pt-8 pb-8 bg-background min-h-screen">
      <button onClick={onBack} className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
        <ArrowLeft size={14} /> Retour
      </button>
      <h1 className="font-display font-extrabold text-xl mb-1">Flux d'activité de l'équipe</h1>
      <p className="text-xs text-muted-foreground font-body mb-5">Encourage tes amis à compléter leur Carnet !</p>

      <div className="flex flex-col gap-3">
        {feedItems.map((item, i) => (
          <div key={i} className="notebook-page p-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center text-lg shrink-0">{item.avatar}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-body">
                  <strong className="font-display font-bold">{item.name}</strong>{" "}
                  {item.action}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-[10px] text-muted-foreground font-body">{item.time}</span>
                  <span className="text-[10px] font-display font-bold text-gold">+{item.pts} pts</span>
                </div>
              </div>
              <button
                onClick={() => toggleBravo(i)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-all text-xs ${
                  bravos[i] ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"
                }`}
              >
                <ThumbsUp size={12} />
                <span className="font-display font-bold">{item.bravos + (bravos[i] ? 1 : 0)}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamFeedScreen;
