import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation signup($data: userInput){
    signup(data: $data){
      token
      message
      isLogin
    }
  }
`