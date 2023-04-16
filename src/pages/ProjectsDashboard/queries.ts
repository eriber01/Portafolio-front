import { gql } from "@apollo/client";

export const GET_TECH = gql`
  query ($where: techInput) {
    getTech(where: $where) {
      id
      url
      name
      descriptions
      publicId
    }
  }
`;

export const CREATED_PROJECT = gql`
  mutation ($data: ProjectInput) {
    createdUpdateProject(data: $data)
  }
`;

export const GET_PROJECTS = gql`
  query ($where: ProjectInput) {
    getProjects(where: $where) {
      id
      name
      descriptions
      url
      img
      gitUrl
      enabled
      publicId
      techData {
        id
        name
        techId
        url
      }
    }
  }
`;

export const ENABLED_PROJECT = gql`
  mutation ($where: ProjectInput) {
    enabledProject(where: $where)
  }
`;

export const DELETE_PROJECT = gql`
  mutation ($where: ProjectInput) {
    deleteProject(where: $where)
  }
`;
