import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUser {
  firstName: string;
  lastName: string;
  phone: string | null;
  email: string;
  id: number;
}

export const getUserContactInfoApi = createApi({
  reducerPath: "contactInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, number>({
      query: (id) => `${process.env.REACT_APP_USER_CONTACT_INFO_URL}/${id}`,
    }),
    updateUser: builder.mutation<IUser, IUser>({
      query: ({ firstName, lastName, phone, id }) => ({
        url: `${process.env.REACT_APP_USER_CONTACT_INFO_URL}/${id}`,
        method: "PATCH",
        body: {
          firstName,
          lastName,
          phone,
        },
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = getUserContactInfoApi;
