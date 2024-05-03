import { useLoaderData } from "react-router";
import { LogementObject } from "./Logement";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";

export async function loader() {
  const data: Promise<Array<LogementObject>> = (
    await fetch("/logements.json")
  ).json();
  return data;
}

export default function Home() {
  const logements: Array<LogementObject> = useLoaderData() as typeof logements;
  console.log("logements :  ", logements);
  return (
    <>
      <Banner />
      {logements.map((logement) => (
        <Link to={`/logements/${logement.id}`} key={logement.id}>
          <Card
            title={logement.title}
            img={logement.cover}
            alt={logement.title}
          />
        </Link>
      ))}
    </>
  );
}
