import { ArrowLeft, Clock, Ticket, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onBack: () => void;
}

const TicketScreen = ({ onBack }: Props) => {
  const [qty, setQty] = useState(1);
  const price = 14;

  return (
    <div className="bg-background min-h-screen pb-8">
      <div className="px-5 pt-6">
        <button onClick={onBack} className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
          <ArrowLeft size={14} /> Retour
        </button>
      </div>

      <div className="px-5">
        <div className="notebook-page p-5 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center text-2xl">🏛️</div>
            <div>
              <h2 className="font-display font-bold text-base">Musée d'Art Moderne</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <Clock size={11} className="text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground font-body">10h – 18h</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-gold/10 w-fit">
            <Ticket size={12} className="text-gold" />
            <span className="text-[10px] font-display font-bold text-gold">Coupe-file disponible</span>
          </div>
        </div>

        {/* Quantity */}
        <div className="notebook-page p-5 mb-5">
          <h3 className="font-display font-bold text-sm mb-4">Nombre de billets</h3>
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted">
              <Minus size={16} />
            </button>
            <span className="font-display font-extrabold text-2xl w-8 text-center">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted">
              <Plus size={16} />
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="font-display font-bold text-lg">{qty * price} €</p>
            <p className="text-[10px] text-muted-foreground font-body">{qty} × {price} € par billet</p>
          </div>
        </div>

        <p className="text-[10px] text-muted-foreground font-body text-center mb-4">
          Billet vendu par Musée d'Art Moderne. EcoQuest Tour perçoit une commission de 5–10 %.
        </p>

        <Button variant="hero" size="lg" className="w-full rounded-xl h-12 gap-2">
          <Ticket size={16} /> Acheter mon billet coupe-file
        </Button>
      </div>
    </div>
  );
};

export default TicketScreen;
