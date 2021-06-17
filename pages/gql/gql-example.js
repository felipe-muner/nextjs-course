import { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import ClientOnly from "../../components/ClientOnly";
import Github from "../../components/graphql/Github";
import CLeague from "../../components/graphql/CLeague";
import Countries from "../../components/graphql/Countries";
import Spacex from "../../components/graphql/Spacex";
import { getUserData } from "../../graphql-client/github";

{
  /* <Tab label="Countries" {...a11yProps(0)} />
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
} */
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(0);

  useEffect(() => {
    switch (value) {
      case "github":
        return getUserData(setUser);
      // case "champions":
      //   return ''
      // case "spacex":
      //   return ''
      // case "countries":
      //   return ''
    }
    // setUser(userdata.data);
  }, [value]);

  const handleChange = (val) => {
    setValue(val);
  };

  const setView = () => {
    switch (value) {
      case "github":
        return <Github user={user} />;
      case "champions":
        return <CLeague />;
      case "spacex":
        return <Spacex />;
      case "countries":
        return <Countries />;
    }
  };

  return (
    <div>
      <Box>
        <Grid container>
          <Button variant="contained" onClick={() => handleChange("github")}>
            Github
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChange("champions")}
            color="primary"
          >
            Champions League
          </Button>
          <Button
            variant="contained"
            onClick={() => handleChange("spacex")}
            color="secondary"
          >
            SpaceX
          </Button>
          <Button variant="contained" onClick={() => handleChange("countries")}>
            countries
          </Button>
        </Grid>
      </Box>
      <Box>
        <Grid>
          <ClientOnly>{setView()}</ClientOnly>
        </Grid>
      </Box>
    </div>
  );
}

// export async function getStaticProps() {
//   return{
//     props:{
//       felipe: 10
//     }
//   }
// }

// export async function getStaticProps() {
// const httpLink = createHttpLink({
//   uri: "https://api.github.com/graphql",
// });
// const authLink = setContext((_, { headers }) => {
//   console.log(headers);
//   const token = process.env.TOKEN_GITHUB;
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
// const { data } = await client.query({
//   query: gql`
//     {
//       user(login: "felipe-muner") {
//         id
//         name
//         avatarUrl
//         createdAt
//         contributionsCollection {
//           totalCommitContributions
//           totalIssueContributions
//           totalPullRequestContributions
//           totalPullRequestReviewContributions
//           contributionCalendar {
//             totalContributions
//             weeks {
//               contributionDays {
//                 contributionCount
//                 weekday
//                 date
//               }
//             }
//           }
//         }
//       }
//     }
//   `,
// });
// console.log(data);
// return {
//   props: {
//     user: data.user,
//   },
// };
// }
