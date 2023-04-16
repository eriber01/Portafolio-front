import { gql } from "@apollo/client";

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
