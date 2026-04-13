import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onLogin: () => void;
  onBack: () => void;
}

const LoginScreen = ({ onLogin, onBack }: Props) => (
  <div className="min-h-screen flex flex-col items-center px-6 py-10 bg-background paper-texture">
    <button onClick={onBack} className="self-start text-sm text-muted-foreground mb-6">← Retour</button>

    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-md mb-4">
      <BookOpen className="text-primary-foreground" size={28} />
    </div>
    <h1 className="font-display font-bold text-xl mb-1">Connexion</h1>
    <p className="text-sm text-muted-foreground mb-8 font-body">Retrouve ton Carnet de Route</p>

    <div className="w-full max-w-sm flex flex-col gap-4">
      <div>
        <label className="text-xs font-display font-semibold text-foreground mb-1 block">Email</label>
        <input className="w-full h-11 rounded-lg border border-border bg-card px-4 text-sm font-body focus:ring-2 focus:ring-primary/30 outline-none" placeholder="ton@email.com" />
      </div>
      <div>
        <label className="text-xs font-display font-semibold text-foreground mb-1 block">Mot de passe</label>
        <input type="password" className="w-full h-11 rounded-lg border border-border bg-card px-4 text-sm font-body focus:ring-2 focus:ring-primary/30 outline-none" placeholder="••••••••" />
      </div>

      <Button variant="hero" size="lg" className="w-full rounded-xl h-12 mt-2" onClick={onLogin}>
        Se connecter
      </Button>
      <Button variant="outline-sand" size="lg" className="w-full rounded-xl h-12" onClick={onLogin}>
        Créer un compte
      </Button>

      <div className="flex items-center gap-3 my-2">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">ou</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex gap-3">
        <button className="flex-1 h-11 rounded-lg border border-border bg-card flex items-center justify-center gap-2 text-sm font-body hover:bg-muted transition-colors">
          <span className="text-base">G</span> Google
        </button>
        <button className="flex-1 h-11 rounded-lg border border-border bg-card flex items-center justify-center gap-2 text-sm font-body hover:bg-muted transition-colors">
          <span className="text-base"></span> Apple
        </button>
      </div>

      <p className="text-[11px] text-muted-foreground text-center mt-4 font-body">
        En continuant, tu acceptes nos conditions d'utilisation.
      </p>
    </div>
  </div>
);

export default LoginScreen;
