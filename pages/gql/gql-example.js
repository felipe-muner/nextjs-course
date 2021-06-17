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

export default function GQLExample({ user }) {
  console.log('dentro', user)
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

export async function getStaticProps() {
  const data = await getUserData();
  console.log(data);
  return {
    props: {
      user: data.user,
    },
  };
}
