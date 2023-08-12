import React, { useEffect, useState } from "react";
import { fetchHome } from "../utils/apiHome";
import ModifyHomeForm from "../components/ModifyHomeForm";
const Home = () => {
  const [home, setHome] = useState(null);

  useEffect(() => {
    fetchHome()
      .then((data) => {
        setHome(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setHome]);
  return (
    <>
      <h2>Paramètres de l'accueil</h2>

      {home && <ModifyHomeForm home={home} setHome={setHome} />}
    </>
  );
};

export default Home;
