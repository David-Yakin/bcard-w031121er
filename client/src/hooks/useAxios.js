import axios from "axios";
import { useSnack } from "../providers/SnackbarProvider";

const useAxios = () => {
  const snack = useSnack();

  axios.interceptors.request.use(data => {
    console.log("in useAxios request interceptor");
    return Promise.resolve(data);
  }, null);

  axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400;
    if (expectedError) snack("error", error.message);
    return Promise.reject(error);
  });
};

export default useAxios;
