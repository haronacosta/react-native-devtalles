import type { AxiosError } from "axios";
import type { UserRequestResponse } from "../interfaces/request.response";
import axios from "axios";

export const loadUsersAction = async (page: number = 1) => {
  try {
    const { data } = await axios.get<UserRequestResponse>(
      `https://reqres.in/api/users`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        params: { page },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
    return new Error("Error loading users", error as AxiosError);
  }
};
