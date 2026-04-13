import { useState } from "react";
import { Trophy, Users, UserPlus, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

const players = [
  { name: "Léa D.", pts: 820, stamps: 8, avatar: "🧭" },
  { name: "Yassine M.", pts: 750, stamps: 7, avatar: "🏔️" },
  { name: "Sarah L.", pts: 620, stamps: 6, avatar: "🌿" },
  { name: "Maxime R.", pts: 540, stamps: 5, avatar: "🏛️" },
  { name: "Camille B.", pts: 480, stamps: 4, avatar: "🌅" },
];

const teams = [
  { name: "Les Explorateurs", pts: 2190, stamps: 21, avatar: "🧭" },
  { name: "Team Nature", pts: 1850, stamps: 17, avatar: "🌿" },
  { name: "Culture Club", pts: 1420, stamps: 13, avatar: "🏛️" },
];

type Tab = "joueurs" | "equipes";

const LeaderboardScreen = () => {
  const [tab, setTab] = useState<Tab>("joueurs");
  const data = tab === "joueurs" ? players : teams;

  return (
    <div className="px-5 pt-8 pb-8 bg-background min-h-screen">
      <div className="flex items-center gap-2 mb-5">
        <Trophy size={20} className="text-gold" />
        <h1 className="font-display font-extrabold text-xl">Classement des voyageurs</h1>
      </div>

      <div className="flex gap-2 mb-5">
        {(["joueurs", "equipes"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-lg text-xs font-display font-bold transition-colors ${
              tab === t ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"
            }`}
          >
            {t === "joueurs" ? "Joueurs" : "Équipes"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 mb-6">
        {data.map((d, i) => (
          <div key={i} className="notebook-page p-4 flex items-center gap-3">
            <span className={`w-6 text-center font-display font-extrabold text-sm ${i < 3 ? "text-gold" : "text-muted-foreground"}`}>
              {i + 1}
            </span>
            <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-lg">{d.avatar}</div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-sm truncate">{d.name}</p>
              <p className="text-[10px] text-muted-foreground font-body">{d.stamps} lieux tamponnés</p>
            </div>
            <span className="font-display font-extrabold text-sm text-primary">{d.pts} pts</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="hero" className="flex-1 rounded-xl h-11 gap-1.5 text-xs">
          <UserPlus size={13} /> Créer une équipe
        </Button>
        <Button variant="outline-sand" className="flex-1 rounded-xl h-11 gap-1.5 text-xs">
          <Hash size={13} /> Rejoindre via un code
        </Button>
      </div>
    </div>
  );
};

export default LeaderboardScreen;
