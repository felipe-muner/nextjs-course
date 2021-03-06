import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "../../styles/graphql.module.css";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";

import { gql } from "@apollo/client";
import client from "../../constants/apollo-client";

const useStyles = makeStyles((theme) => ({
  felipe: {
    marginTop: 5,
  },
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
}));

export default function GqlServerSide({ countries }) {
  console.log(countries);
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>GraphQL Examples</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className={styles.title}>Getting GraphQL</h3>
      <div className={styles.grid}>
        {countries.map((country) => (
          <div key={country.code.toString()} className={styles.card}>
            <Box>
              <p>
                {country.emoji} - {country.code}
              </p>
            </Box>
            <Box>
              <h3 className={classes.felipe}>{country.name}</h3>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              bgcolor="background.paper"
            >
              <Box p={2} bgcolor="grey.300">
                <Grid container direction="row" alignItems="center" m={3}>
                  <PhoneIcon />{" "}
                  <p style={{ marginLeft: "10px" }}>{country.phone}</p>
                </Grid>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              m={1}
              p={1}
              bgcolor="background.paper"
            >
              <Box p={1} bgcolor="grey.300" >
                Item 1
              </Box>
              <Box p={1} bgcolor="grey.300" >
                Item 2
              </Box>
              <Box p={1} bgcolor="grey.300" >
                Item 3
              </Box>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const {
    data: { countries },
  } = await client.query({
    query: gql`
      query Countries {
        countries {
          name
          code
          capital
          emoji
          phone
          currency
          continent {
            name
          }
          states {
            name
          }
          languages {
            name
            code
          }
        }
      }
    `,
  });

  return {
    props: {
      countries: countries.slice(0, 4),
    },
  };
}
