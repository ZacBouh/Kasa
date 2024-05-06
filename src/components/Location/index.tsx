export default function Location({
  location,
  className,
}: {
  location: string;
  className: string;
}) {
  const city = location.split("-")[1].trim().split(" ")[0];
  const region = location.split("-")[0].trim();
  return (
    <p className={className}>
      {city}, {region}
    </p>
  );
}
