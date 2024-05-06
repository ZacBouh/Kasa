import { useLoaderData } from "react-router";
import { LogementObject } from "../Logement";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import bannerImage from "@assets/banner.png";
import Card from "../../components/Card";
import styles from "./home.module.scss";

export async function loader() {
  const data: Promise<Array<LogementObject>> = (
    await fetch("/logements.json")
  ).json();
  return data;
}

export default function Home() {
  const logements: Array<LogementObject> = useLoaderData() as typeof logements;
  return (
    <section className={styles.mainContainer}>
      <Banner
        caption={true}
        picture={bannerImage}
        alt={"image de bord de mer"}
      />
      {logements.map((logement) => (
        <Link to={`/logements/${logement.id}`} key={logement.id}>
          <Card
            title={logement.title}
            img={logement.cover}
            alt={logement.title}
          />
        </Link>
      ))}
    </section>
  );
}
