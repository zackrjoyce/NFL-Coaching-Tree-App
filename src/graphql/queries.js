/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoachTree = /* GraphQL */ `
  query GetCoachTree($id: ID!) {
    getCoachTree(id: $id) {
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
export const getMatchup = /* GraphQL */ `
  query GetMatchup($id: ID!) {
    getMatchup(id: $id) {
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
export const listMatchups = /* GraphQL */ `
  query ListMatchups(
    $filter: ModelMatchupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCoachingTree = /* GraphQL */ `
  query GetCoachingTree($id: ID!) {
    getCoachingTree(id: $id) {
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
export const listCoachingTrees = /* GraphQL */ `
  query ListCoachingTrees(
    $filter: ModelCoachingTreeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoachingTrees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        hc
        oc
        dc
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
