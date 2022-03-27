import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Wetube</title>
      </Helmet>
      <body>
        <h1>Welcome to Wetube</h1>
      </body>
    </>
  );
}
