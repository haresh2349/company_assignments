import { toast } from "react-toastify";

export const calculateTax = (data) => {
  let result = [];
  data.forEach((item) => {
    if (item.item_type == 0 || item.item_type == 1 || item.item_type == 2) {
      let tax =
        item.item_type == 0
          ? item.amount * 0.05
          : item.item_type == 1
          ? item.amount * 0.08
          : item.amount * 0.12;
      item["tax"] = tax.toFixed(4);
      result.push(item);
    }
  });
  return result;
};

export const warnNotify = (msg) =>
  toast.warn(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export const successNotify = (msg) =>
  toast.success(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
