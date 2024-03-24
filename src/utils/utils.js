import axios from "axios";

export const fetchData = async (address, setMoisture, setLight) => {
  try {
    console.log(address)
    const response = await axios.get(address);
    console.log(response.data);
    setMoisture(response.data["Moisture Level"]);
    setLight(response.data["Light Level"]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
