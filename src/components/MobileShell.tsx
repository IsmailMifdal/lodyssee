import { ReactNode } from "react";
import { BookOpen, Map, Users, User } from "lucide-react";

type Tab = "carnet" | "carte" | "equipe" | "profil";

interface Props {
  children: ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  hideNav?: boolean;
}

const tabs: { id: Tab; label: string; icon: typeof BookOpen }[] = [
  { id: "carnet", label: "Carnet", icon: BookOpen },
  { id: "carte", label: "Carte", icon: Map },
  { id: "equipe", label: "Équipe", icon: Users },
  { id: "profil", label: "Profil", icon: User },
];

const MobileShell = ({ children, activeTab, onTabChange, hideNav }: Props) => (
  <div className="mx-auto max-w-[430px] min-h-screen bg-background flex flex-col relative shadow-2xl">
    <div className="flex-1 overflow-y-auto pb-20">{children}</div>
    {!hideNav && (
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-card/95 backdrop-blur-md border-t border-border px-2 py-2 flex justify-around z-50">
        {tabs.map((t) => {
          const active = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onTabChange(t.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              <t.icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              <span className="text-[10px] font-display font-semibold">{t.label}</span>
            </button>
          );
        })}
      </nav>
    )}
  </div>
);

export default MobileShell;
