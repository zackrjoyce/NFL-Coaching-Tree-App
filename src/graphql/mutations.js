/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrUpdateCoachingTree = /* GraphQL */ `
  mutation CreateOrUpdateCoachingTree($input: CoachingTreeInput!) {
    createOrUpdateCoachingTree(input: $input) {
      id
      hc
      oc
      dc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMatchup = /* GraphQL */ `
  mutation CreateMatchup(
    $input: CreateMatchupInput!
    $condition: ModelMatchupConditionInput
  ) {
    createMatchup(input: $input, condition: $condition) {
      id
      team1
      team1_hc
      team1_oc
      team1_dc
      team1_score
      team2
      team2_hc
      team2_oc
      team2_dc
      team2_score
      injury
      tanking
      turnover_dif
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMatchup = /* GraphQL */ `
  mutation UpdateMatchup(
    $input: UpdateMatchupInput!
    $condition: ModelMatchupConditionInput
  ) {
    updateMatchup(input: $input, condition: $condition) {
      id
      team1
      team1_hc
      team1_oc
      team1_dc
      team1_score
      team2
      team2_hc
      team2_oc
      team2_dc
      team2_score
      injury
      tanking
      turnover_dif
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMatchup = /* GraphQL */ `
  mutation DeleteMatchup(
    $input: DeleteMatchupInput!
    $condition: ModelMatchupConditionInput
  ) {
    deleteMatchup(input: $input, condition: $condition) {
      id
      team1
      team1_hc
      team1_oc
      team1_dc
      team1_score
      team2
      team2_hc
      team2_oc
      team2_dc
      team2_score
      injury
      tanking
      turnover_dif
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCoachingTree = /* GraphQL */ `
  mutation CreateCoachingTree(
    $input: CreateCoachingTreeInput!
    $condition: ModelCoachingTreeConditionInput
  ) {
    createCoachingTree(input: $input, condition: $condition) {
      id
      hc
      oc
      dc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCoachingTree = /* GraphQL */ `
  mutation UpdateCoachingTree(
    $input: UpdateCoachingTreeInput!
    $condition: ModelCoachingTreeConditionInput
  ) {
    updateCoachingTree(input: $input, condition: $condition) {
      id
      hc
      oc
      dc
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCoachingTree = /* GraphQL */ `
  mutation DeleteCoachingTree(
    $input: DeleteCoachingTreeInput!
    $condition: ModelCoachingTreeConditionInput
  ) {
    deleteCoachingTree(input: $input, condition: $condition) {
      id
      hc
      oc
      dc
      createdAt
      updatedAt
      __typename
    }
  }
`;
