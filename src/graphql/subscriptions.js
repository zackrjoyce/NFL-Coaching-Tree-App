/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMatchup = /* GraphQL */ `
  subscription OnCreateMatchup($filter: ModelSubscriptionMatchupFilterInput) {
    onCreateMatchup(filter: $filter) {
      id
      team1_hc
      team1_oc
      team1_dc
      team2_hc
      team2_oc
      team2_dc
      turnover_dif
      team1_score
      team2_score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMatchup = /* GraphQL */ `
  subscription OnUpdateMatchup($filter: ModelSubscriptionMatchupFilterInput) {
    onUpdateMatchup(filter: $filter) {
      id
      team1_hc
      team1_oc
      team1_dc
      team2_hc
      team2_oc
      team2_dc
      turnover_dif
      team1_score
      team2_score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMatchup = /* GraphQL */ `
  subscription OnDeleteMatchup($filter: ModelSubscriptionMatchupFilterInput) {
    onDeleteMatchup(filter: $filter) {
      id
      team1_hc
      team1_oc
      team1_dc
      team2_hc
      team2_oc
      team2_dc
      turnover_dif
      team1_score
      team2_score
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCoachingTree = /* GraphQL */ `
  subscription OnCreateCoachingTree(
    $filter: ModelSubscriptionCoachingTreeFilterInput
  ) {
    onCreateCoachingTree(filter: $filter) {
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
export const onUpdateCoachingTree = /* GraphQL */ `
  subscription OnUpdateCoachingTree(
    $filter: ModelSubscriptionCoachingTreeFilterInput
  ) {
    onUpdateCoachingTree(filter: $filter) {
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
export const onDeleteCoachingTree = /* GraphQL */ `
  subscription OnDeleteCoachingTree(
    $filter: ModelSubscriptionCoachingTreeFilterInput
  ) {
    onDeleteCoachingTree(filter: $filter) {
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
