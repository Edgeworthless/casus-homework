// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// This should be an ENV
const BASE_URL = "https://us-central1-casus-fe-task.cloudfunctions.net";


// Service API where we define every endpoint and mutations for RTK Query
export const templatesApi = createApi({
  reducerPath: "templatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getTemplates: builder.query({
      query: () => `templates`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetTemplatesQuery } = templatesApi;

// Classic fetch endpoint for react-query and just Redux
const getTemplates = function () {
  return fetch(`${BASE_URL}/templates`).then((res) => res.ok ? res.json() : Promise.reject());
};

export { getTemplates };
