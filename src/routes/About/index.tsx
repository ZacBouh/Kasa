import Dropdown from "@/components/Dropdown";
import styles from "./about.module.scss";
import Banner from "@/components/Banner";
import bannerImage from "@assets/banner_montagne.jpg";

export default function About() {
  const topics = ["Fiabilité", "Respect", "Service", "Sécurité"];
  const content = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  return (
    <main className={styles.mainContainer}>
      <div className={styles.bannerWrapper}>
        <Banner caption={false} picture={bannerImage} />
      </div>
      {topics.map((topic, index) => (
        <Dropdown title={topic} content={[content[index]]} key={topic} />
      ))}
    </main>
  );
}
