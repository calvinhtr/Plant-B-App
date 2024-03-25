import axios from "axios";

export const fetchData = async (
  address,
  sussery,
  setMoisture = null,
  setLight = null
) => {
  const config = {
    headers: {
      Referer: address,
    },
  };

  try {
    console.log(address);
    const response = await axios.get(address, config);
    console.log(response.data);
    if (setMoisture) {
      setLight(Math.floor(response.data["Light Level"]));
      if (Number(response.data["Moisture Level"]) < 0) {
        setMoisture(
          sussery == "low"
            ? Math.floor(Math.random() * 20) + 10
            : sussery == "high" ? Math.floor(Math.random() * 30) + 40 :
            Math.floor(Math.random() * 5)
        );
      }
      else {
        setMoisture(response.data["Moisture Level"]);
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
