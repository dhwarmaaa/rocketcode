import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation createPerson($personInput: PersonInput!) {
    createPerson(personInput: $personInput) {
      name {
        firstName
        lastName
      }
    }
  }
`;
