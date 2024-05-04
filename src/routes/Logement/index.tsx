import RatingStars from "../../components/RatingStars";
import { useLoaderData } from "react-router";
import { LoaderFunctionArgs } from "react-router";
import Gallery from "../../components/Gallery";
import styles from "./logement.module.scss";
import Tag from "../../components/Tag";

const logementObject = {
  id: "c67ab8a7",
  title: "Appartement cosy",
  cover:
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  pictures: [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
  ],
  description:
    "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
  host: {
    name: "Nathalie Jean",
    picture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
  },
  rating: 5,
  location: "Ile de France - Paris 17e",
  equipments: [
    "Équipements de base",
    "Micro-Ondes",
    "Douche italienne",
    "Frigo",
    "WIFI",
  ],
  tags: ["Batignolle", "Montmartre"],
};
export type LogementObject = typeof logementObject;

export async function loader({ params }: LoaderFunctionArgs<any>) {
  const data: Promise<Array<LogementObject>> = (
    await fetch("/logements.json")
  ).json();

  return (await data).filter(
    (logement) => logement.id === params.logementId
  )[0];
}

export default function Logement() {
  const logement = useLoaderData() as LogementObject;

  return (
    <>
      <Gallery title={logement.title} />
      <h1 className={styles.title}>{logement.title}</h1>
      <p className={styles.location}>{logement.location}</p>
      <div className={styles.tagContainer}>
        {logement.tags.map((tag) => (
          <Tag content={tag} key={tag} />
        ))}
      </div>
      <RatingStars rating={logement.rating} />
    </>
  );
}
