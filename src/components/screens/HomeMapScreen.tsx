import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, BookOpen, HelpCircle, Leaf } from "lucide-react";
import { places as allPlaces } from "@/data/places";

type View = "carte" | "carnet";

const steps = [
  { ...allPlaces[0], status: "Tamponné", lat: 35, left: 60 },
  { ...allPlaces[1], status: "En cours", lat: 55, left: 30 },
  { ...allPlaces[2], status: "À faire", lat: 45, left: 70 },
  { ...allPlaces[3], status: "À faire", lat: 25, left: 45 },
  { ...allPlaces[4], status: "Tamponné", lat: 65, left: 55 },
];

const statusColor: Record<string, string> = {
  Tamponné: "bg-primary text-primary-foreground",
  "En cours": "bg-gold text-foreground",
  "À faire": "bg-muted text-muted-foreground",
};

interface Props {
  onSelectPlace: (id: number) => void;
}

const HomeMapScreen = ({ onSelectPlace }: Props) => {
  const [view, setView] = useState<View>("carte");
  const completed = steps.filter((s) => s.status === "Tamponné").length;
  const pct = Math.round((completed / steps.length) * 100);

  return (
    <div className="bg-background min-h-screen">
      <div className="px-5 pt-6 pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Leaf size={14} className="text-primary" />
          <span className="text-xs font-display font-bold text-foreground">Explorateur : {pct}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div className="h-full bg-primary rounded-full" initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, ease: "easeOut" }} />
        </div>
        <p className="text-[10px] text-muted-foreground mt-1 font-body">Continue à visiter des lieux hors des sentiers battus</p>
      </div>

      <div className="px-5 mb-4 flex gap-2">
        {(["carte", "carnet"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-display font-bold transition-colors ${
              view === v ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border border-border"
            }`}
          >
            {v === "carte" ? <MapPin size={13} /> : <BookOpen size={13} />}
            {v === "carte" ? "Carte" : "Carnet"}
          </button>
        ))}
      </div>

      {view === "carte" ? (
        <div className="relative mx-5 rounded-xl bg-sage-light/40 border border-border h-[420px] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <path d="M0,100 Q100,50 200,120 T400,100" stroke="hsl(var(--sage))" fill="none" strokeWidth="2" />
              <path d="M0,200 Q150,150 300,220 T500,180" stroke="hsl(var(--navy))" fill="none" strokeWidth="1.5" opacity="0.5" />
              <path d="M50,0 Q80,100 120,300 T200,450" stroke="hsl(var(--sage))" fill="none" strokeWidth="1" />
            </svg>
          </div>

          {steps.map((s) => (
            <button key={s.id} onClick={() => onSelectPlace(s.id)} className="absolute group" style={{ top: `${s.lat}%`, left: `${s.left}%` }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: s.id * 0.1, type: "spring" }}
                className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-md border-2 ${
                  s.status === "Tamponné" ? "border-primary" : s.status === "En cours" ? "border-gold" : "border-border"
                }`}
              >
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-card px-2 py-0.5 rounded text-[9px] font-display shadow">
                {s.name}
              </div>
            </button>
          ))}

          <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }} className="absolute top-[75%] left-[20%]">
            <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center animate-pulse">
              <HelpCircle size={16} className="text-gold" />
            </div>
          </motion.button>
        </div>
      ) : (
        <div className="px-5 flex flex-col gap-3 pb-8">
          {steps.map((s) => (
            <button key={s.id} onClick={() => onSelectPlace(s.id)} className="notebook-page p-4 flex items-center gap-3 text-left">
              <img src={s.img} alt={s.name} loading="lazy" className="w-10 h-10 rounded-lg object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-sm truncate">{s.name}</p>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-display font-bold ${statusColor[s.status]}`}>{s.status}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeMapScreen;
