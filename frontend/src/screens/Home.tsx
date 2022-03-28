import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

await (await fetch("http://localhost:4000/api/trending")).json();

export default function Home() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const data = getTrending();
    console.log(data);
  }, []);

  return (
    <>
      <Helmet>
        <title>Wetube</title>
      </Helmet>
      <h1>Welcome to Wetube</h1>
    </>
  );
}
