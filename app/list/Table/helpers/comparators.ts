import moment from "moment";
import { Order } from "../../types/table";

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (orderBy === "date") {
    const first = moment(a[orderBy] as string, "DD-MM-YYYY").valueOf();
    const second = moment(b[orderBy] as string, "DD-MM-YYYY").valueOf();
    if (first < second) {
      return 1;
    }
    if (first > second) {
      return -1;
    }
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
