import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, BookOpen, HelpCircle, Leaf } from "lucide-react";

type View = "carte" | "carnet";

const steps = [
  { id: 1, name: "Musée d'Art Moderne", icon: "🏛️", status: "Tamponné", lat: 35, left: 60 },
  { id: 2, name: "Sentier des Crêtes", icon: "🏔️", status: "En cours", lat: 55, left: 30 },
  { id: 3, name: "Rue des Artisans", icon: "🏘️", status: "À faire", lat: 45, left: 70 },
  { id: 4, name: "Belvédère du Coucher de Soleil", icon: "🌅", status: "À faire", lat: 25, left: 45 },
  { id: 5, name: "Cathédrale Saint-Pierre", icon: "⛪", status: "Tamponné", lat: 65, left: 55 },
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
      {/* Explorer gauge */}
      <div className="px-5 pt-6 pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Leaf size={14} className="text-primary" />
          <span className="text-xs font-display font-bold text-foreground">Explorateur : {pct}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <p className="text-[10px] text-muted-foreground mt-1 font-body">Continue à visiter des lieux hors des sentiers battus</p>
      </div>

      {/* Tabs */}
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
        /* Map view */
        <div className="relative mx-5 rounded-xl bg-sage-light/40 border border-border h-[420px] overflow-hidden">
          {/* Abstract map background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%">
              <path d="M0,100 Q100,50 200,120 T400,100" stroke="hsl(var(--sage))" fill="none" strokeWidth="2" />
              <path d="M0,200 Q150,150 300,220 T500,180" stroke="hsl(var(--navy))" fill="none" strokeWidth="1.5" opacity="0.5" />
              <path d="M50,0 Q80,100 120,300 T200,450" stroke="hsl(var(--sage))" fill="none" strokeWidth="1" />
            </svg>
          </div>

          {/* Pins */}
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelectPlace(s.id)}
              className="absolute group"
              style={{ top: `${s.lat}%`, left: `${s.left}%` }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: s.id * 0.1, type: "spring" }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md ${
                  s.status === "Tamponné" ? "bg-primary" : s.status === "En cours" ? "bg-gold" : "bg-card border border-border"
                }`}
              >
                {s.icon}
              </motion.div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-card px-2 py-0.5 rounded text-[9px] font-display shadow">
                {s.name}
              </div>
            </button>
          ))}

          {/* Hidden gem */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute top-[75%] left-[20%]"
          >
            <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center animate-pulse">
              <HelpCircle size={16} className="text-gold" />
            </div>
          </motion.button>
        </div>
      ) : (
        /* Carnet list view */
        <div className="px-5 flex flex-col gap-3 pb-8">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelectPlace(s.id)}
              className="notebook-page p-4 flex items-center gap-3 text-left"
            >
              <span className="text-xl">{s.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-sm truncate">{s.name}</p>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-display font-bold ${statusColor[s.status]}`}>
                {s.status}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeMapScreen;
