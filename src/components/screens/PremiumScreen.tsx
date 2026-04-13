import { ArrowLeft, Check, Crown, Printer, Building2, Store, Landmark as LandmarkIcon, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onBack: () => void;
}

const PremiumScreen = ({ onBack }: Props) => (
  <div className="bg-background min-h-screen pb-8">
    <div className="px-5 pt-6">
      <button onClick={onBack} className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
        <ArrowLeft size={14} /> Retour
      </button>
      <h1 className="font-display font-extrabold text-xl mb-1">EcoQuest Premium</h1>
      <p className="text-xs text-muted-foreground font-body mb-6">Choisis le pack qui te convient</p>
    </div>

    {/* B2C Packs */}
    <div className="px-5 flex flex-col gap-4 mb-8">
      {/* Free */}
      <div className="notebook-page p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📓</span>
          <h3 className="font-display font-bold text-sm">Carnet Numérique</h3>
          <span className="ml-auto text-xs font-display font-bold text-primary bg-sage-light px-2 py-0.5 rounded-full">Gratuit</span>
        </div>
        <ul className="space-y-1.5 mb-3">
          {["Créer son Carnet de Route", "Check-in & tampons", "Hidden Gems de base"].map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
              <Check size={12} className="text-primary shrink-0" /> {f}
            </li>
          ))}
        </ul>
        <Button variant="outline-sand" size="sm" className="w-full rounded-lg" disabled>Actif</Button>
      </div>

      {/* Print */}
      <div className="notebook-page p-5 border-gold/30">
        <div className="flex items-center gap-2 mb-3">
          <Printer size={18} className="text-gold" />
          <h3 className="font-display font-bold text-sm">Carnet Souvenir</h3>
          <span className="ml-auto text-xs font-display font-bold text-gold bg-gold/10 px-2 py-0.5 rounded-full">25–30 €</span>
        </div>
        <p className="text-xs text-muted-foreground font-body mb-3">Imprime ton carnet personnalisé avec tes photos, tampons et anecdotes.</p>
        <div className="flex gap-2">
          <Button variant="outline-sand" size="sm" className="flex-1 rounded-lg text-xs">Voir un exemple</Button>
          <Button variant="gold" size="sm" className="flex-1 rounded-lg text-xs">Commander</Button>
        </div>
      </div>

      {/* Premium */}
      <div className="notebook-page p-5 ring-2 ring-primary/20">
        <div className="flex items-center gap-2 mb-3">
          <Crown size={18} className="text-primary" />
          <h3 className="font-display font-bold text-sm">Explorateur Premium</h3>
          <span className="ml-auto text-xs font-display font-bold text-primary bg-sage-light px-2 py-0.5 rounded-full">4,99 €/mois</span>
        </div>
        <p className="text-[10px] text-muted-foreground font-body mb-2">ou 19,99 €/an</p>
        <ul className="space-y-1.5 mb-3">
          {["Plus de lieux dans le Carnet", "Hidden Gems exclusifs", "Thèmes de carnet premium", "Statistiques avancées"].map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
              <Check size={12} className="text-primary shrink-0" /> {f}
            </li>
          ))}
        </ul>
        <Button variant="hero" size="sm" className="w-full rounded-lg">Essayer 7 jours gratuits</Button>
      </div>
    </div>

    {/* B2B */}
    <div className="px-5 mb-6">
      <h2 className="font-display font-bold text-base mb-4">Espace Partenaires</h2>

      {/* Destinations */}
      <div className="notebook-page p-5 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <Building2 size={16} className="text-navy" />
          <h3 className="font-display font-bold text-sm">EcoQuest pour les villes & destinations</h3>
        </div>
        <div className="space-y-3 mb-3">
          <div className="p-3 rounded-lg bg-navy/5">
            <div className="flex items-center gap-2 mb-1">
              <MapIcon size={12} className="text-navy" />
              <span className="font-display font-bold text-xs">Pack Ville Explorer — 100–200 €/mois</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-body">Carnets pré-remplis, stats anonymisées des visiteurs.</p>
          </div>
          <div className="p-3 rounded-lg bg-navy/5">
            <div className="flex items-center gap-2 mb-1">
              <MapIcon size={12} className="text-navy" />
              <span className="font-display font-bold text-xs">Pack Région Explorer+ — 400–600 €/mois</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-body">Multi-villes, circuits, événements saisonniers.</p>
          </div>
        </div>
        <Button variant="secondary" size="sm" className="w-full rounded-lg text-xs">Contacter l'équipe EcoQuest</Button>
      </div>

      {/* Cultural partners */}
      <div className="notebook-page p-5 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <LandmarkIcon size={16} className="text-gold" />
          <h3 className="font-display font-bold text-sm">Pour les musées & attractions</h3>
        </div>
        <p className="text-xs text-muted-foreground font-body mb-3">
          Intégrez votre billetterie dans le Carnet de Route. Commission de 5–10 % par billet vendu.
        </p>
        <Button variant="gold" size="sm" className="w-full rounded-lg text-xs">Devenir partenaire billetterie</Button>
      </div>

      {/* Local businesses */}
      <div className="notebook-page p-5">
        <div className="flex items-center gap-2 mb-2">
          <Store size={16} className="text-accent" />
          <h3 className="font-display font-bold text-sm">Commerces & hébergements locaux</h3>
        </div>
        <p className="text-xs text-muted-foreground font-body mb-2">
          Apparaissez dans les Carnets. Offres liées à la complétion d'un quartier.
        </p>
        <p className="text-[10px] text-muted-foreground font-body mb-3">À partir de 30–50 €/mois</p>
        <Button variant="outline-sand" size="sm" className="w-full rounded-lg text-xs">En savoir plus</Button>
      </div>
    </div>
  </div>
);

export default PremiumScreen;
