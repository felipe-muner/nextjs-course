import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  console.log(headers);
  const token = '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';

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export async function getUserData(setData) {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "felipe-muner") {
          id
          name
          avatarUrl
          createdAt
          contributionsCollection {
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  weekday
                  date
                }
              }
            }
          }
        }
      }
    `,
  });
  setData(data)
}
