import { useState } from "react";
import { ArrowLeft, MapPin, Sparkles } from "lucide-react";

interface Props {
  onBack: () => void;
}

const NotificationsScreen = ({ onBack }: Props) => {
  const [toggles, setToggles] = useState([true, false, true]);

  const toggleAt = (index: number) =>
    setToggles((prev) => prev.map((v, i) => (i === index ? !v : v)));

  const labels = [
    "Rappels de mes étapes en cours",
    "Nouveaux défis week-end / événements",
    "Activité de mon équipe",
  ];

  return (
    <div className="px-5 pt-8 pb-8 bg-background min-h-screen">
      <button onClick={onBack} className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
        <ArrowLeft size={14} /> Retour
      </button>
      <h1 className="font-display font-extrabold text-xl mb-1">Notifications</h1>
      <p className="text-xs text-muted-foreground font-body mb-6">Active les notifications pour garder ta série et ne pas rater les lieux secrets.</p>

      <div className="flex flex-col gap-3 mb-8">
        {labels.map((label, i) => (
          <button key={i} onClick={() => toggleAt(i)} className="notebook-page p-4 flex items-center justify-between">
            <span className="text-sm font-body text-left">{label}</span>
            <div className={`w-11 h-6 rounded-full flex items-center transition-colors px-0.5 ${toggles[i] ? "bg-primary" : "bg-muted"}`}>
              <div className={`w-5 h-5 rounded-full bg-primary-foreground shadow transition-transform ${toggles[i] ? "translate-x-5" : "translate-x-0"}`} />
            </div>
          </button>
        ))}
      </div>

      <h3 className="font-display font-bold text-sm mb-3">Aperçu</h3>
      <div className="flex flex-col gap-3">
        <div className="notebook-page p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0">
            <MapPin size={14} className="text-primary" />
          </div>
          <div>
            <p className="text-xs font-body"><strong className="font-display">EcoQuest Tour</strong> — Tu es proche du 'Point de vue du coucher de soleil'. Veux-tu tamponner ton Carnet ?</p>
            <span className="text-[10px] text-muted-foreground">Il y a 5 min</span>
          </div>
        </div>
        <div className="notebook-page p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
            <Sparkles size={14} className="text-gold" />
          </div>
          <div>
            <p className="text-xs font-body"><strong className="font-display">EcoQuest Tour</strong> — Nouveau 'Hidden Gem' débloqué grâce à ta jauge d'Explorateur.</p>
            <span className="text-[10px] text-muted-foreground">Il y a 2h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsScreen;
