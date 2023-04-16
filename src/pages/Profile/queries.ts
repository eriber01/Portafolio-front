import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query getUser {
    getUser {
      id
      name
      descriptions
      phone
      email
      github
      linkedin
      position
      cvUrl
      aboutProgramming
      aboutGaming
      aboutSeries
    }
  }
`;

export const CREATE_UPDATE_USER = gql`
  mutation createUpdateUser($data: userInput){
    createUpdateUser(data: $data)
  }
`;
