import museeImg from "@/assets/places/musee-art-moderne.jpg";
import sentierImg from "@/assets/places/sentier-cretes.jpg";
import rueImg from "@/assets/places/rue-artisans.jpg";
import belvedereImg from "@/assets/places/belvedere-coucher.jpg";
import cathedraleImg from "@/assets/places/cathedrale.jpg";
import jardinImg from "@/assets/places/jardin-botanique.jpg";
import medievalImg from "@/assets/places/quartier-medieval.jpg";
import citadelleImg from "@/assets/places/panorama-citadelle.jpg";

export interface Place {
  id: number;
  name: string;
  type: string;
  tag: string;
  img: string;
}

export const places: Place[] = [
  { id: 1, name: "Musée d'Art Moderne", type: "Musées & Culture", tag: "Culture", img: museeImg },
  { id: 2, name: "Sentier des Crêtes", type: "Balades & Randonnées", tag: "Nature", img: sentierImg },
  { id: 3, name: "Rue des Artisans", type: "Rues historiques", tag: "Rue historique", img: rueImg },
  { id: 4, name: "Belvédère du Coucher de Soleil", type: "Points de vue", tag: "Vue", img: belvedereImg },
  { id: 5, name: "Cathédrale Saint-Pierre", type: "Musées & Culture", tag: "Culture", img: cathedraleImg },
  { id: 6, name: "Jardin Botanique", type: "Balades & Randonnées", tag: "Nature", img: jardinImg },
  { id: 7, name: "Quartier médiéval", type: "Rues historiques", tag: "Rue historique", img: medievalImg },
  { id: 8, name: "Panorama de la Citadelle", type: "Points de vue", tag: "Vue", img: citadelleImg },
];

export const getPlaceById = (id: number) => places.find((p) => p.id === id);
