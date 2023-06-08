import { VehicleObj } from "@/types/global";

// array of months in polish
const months = [
  "Sty",
  "Lut",
  "Mar",
  "Kwi",
  "Maj",
  "Cze",
  "Lip",
  "Sie",
  "Wrz",
  "Paz",
  "Lis",
  "Gru",
];

export const formatArrayDate = (data: VehicleObj[]) => {
  const formattedData = data.map((item) => {
    const dateObj = new Date(item.date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const newDate = `${day} ${months[month]}`;
    return { ...item, date: newDate };
  });
  return formattedData;
};
