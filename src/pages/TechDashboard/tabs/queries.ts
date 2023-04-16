import { gql } from "@apollo/client";

export const GET_TECH = gql`
  query {
    getTech {
      id
      url
      name
      descriptions
      publicId
      enabled
    }
  }
`;

export const CREATED_TECH = gql`
  mutation ($data: techInput) {
    createdUpdateTech(data: $data)
  }
`;

export const DELETE_TECH = gql`
  mutation ($where: techInput) {
    deleteTech(where: $where)
  }
`;

export const GET_TECH_UNIQUE = gql`
  query ($where: techInput) {
    getTechUnique(where: $where){
      id
      name
      descriptions
      publicId
    }
  }
`;

export const ENABLED_TECH = gql`
mutation ($where: techInput){
  enabledTech(where: $where)
}
`