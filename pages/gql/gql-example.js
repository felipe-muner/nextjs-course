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
import { getCountries } from "../../graphql-client/countries";
import { getSpacex } from "../../graphql-client/spacex";

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
      padding: theme.spacing(4),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));

export default function GQLExample({ user, countries, spacex }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

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
        return <Spacex spacex={spacex} />;
      case "countries":
        return <Countries countries={countries} />;
    }
  };

  return (
    <Grid item container xs={12} md={12} lg={6}>
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
    </Grid>
  );
}

export async function getStaticProps() {
  const github = await getUserData();
  const countries = await getCountries();
  const spacex = await getSpacex();

  return {
    props: {
      user: github.user,
      countries,
      spacex,
    },
  };
}
