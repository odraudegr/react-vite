import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const API_BASE_URL = "https://todo-service-0qq0.onrender.com/api/v1/";

export const Api = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token =
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWJmNWFkY2RlNDVjZjRmYWM5M2RhZiIsImlhdCI6MTY4MzkwMDkxOSwiZXhwIjoxNjg2NDkyOTE5fQ.Hx5pj8oAzLDHiX2ALLqNeFjphlGQT6BRZpCnbgJrhJ6EWzVQNfmi4QieuthvxwR_t22HOi0MVQzf6rEzou8RQa8gUAl6A1bqdW1YnHfnc__YrTpOhxZnr-vKcBlKeCdovBRKx2KhpBnwSMHsCWaI5wBkxT-O_U3_rKQ6A8e5NG8"; //(getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Todos"],
  endpoints: () => ({}),
});
