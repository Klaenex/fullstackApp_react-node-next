import axios from "axios";

const baseUrl = "/api/home";

const fetchHome = async () => {
  try {
    const res = await axios.get(baseUrl);
    if (res.status === 200) {
      const home = res.data;
      return home;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateHome = async (form) => {
  try {
    const res = await axios.patch(baseUrl, form);
    const home = res.data;
    return home;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export { fetchHome, updateHome };
