import jsonToObj from "@/utils/jsonToObj";
import data from "./fuel-excel.json";
import { AllRawData } from "@/types/global";

export const ALL_DATA = jsonToObj(data as unknown as AllRawData);
