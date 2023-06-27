import { useEffect, useState } from "react";
import HomeForm from "../components/HomeForm";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("/api/home").then((res) => {
      const data = res.data;
      setData(data);
      console.log(res);
    });
  }, []);
  return (
    <div className="home">
      <h2>Home</h2>
      <HomeForm data={data} />
    </div>
  );
};

export default Home;
