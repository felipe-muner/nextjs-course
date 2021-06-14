import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import CLeague from "../../components/graphql/CLeague";
import Countries from "../../components/graphql/Countries";
import Spacex from "../../components/graphql/Spacex";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    appbar: {
      alignItems: "center",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3} style={{ marginLeft: "10px" }}>
      <Grid item xs={9}>
        <Box className={classes.root} style={{ marginTop: "20px" }}>
          <AppBar
            className={classes.appbar}
            position="static"
            color="secondary"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              centered
            >
              <Tab label="Countries" {...a11yProps(0)} />
              <Tab label="Champions League" {...a11yProps(1)} />
              <Tab label="Space X" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel
            value={value}
            index={0}
            style={{
              borderLeft: "10px solid #DDD",
              borderBottom: "10px solid #DDD",
              borderRight: "10px solid #DDD",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <Countries />
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            style={{
              borderLeft: "10px solid #DDD",
              borderBottom: "10px solid #DDD",
              borderRight: "10px solid #DDD",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <CLeague />
          </TabPanel>
          <TabPanel
            value={value}
            index={2}
            style={{
              borderLeft: "10px solid #DDD",
              borderBottom: "10px solid #DDD",
              borderRight: "10px solid #DDD",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <Spacex />
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}
