import { useLoaderData } from "react-router";
import { LogementObject } from "./Logement";
import { Link } from "react-router-dom";

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
      this is the home
      {logements.map((logement) => (
        <Link to={`/logements/${logement.id}`} key={logement.id}>
          {" "}
          {logement.title}{" "}
        </Link>
      ))}
    </>
  );
}
