import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import customSoftwareIcon from "../../animations/spenanalytics_landingpage/spend_landing.json";
import analysis from "../../animations/analysis/analysis.json";
import savings from "../../animations/saving/saving.json";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    marginTop: "3em",
    [theme.breakpoints.down("sm")]: {
      padding: "2.5em",
    },
  },
  serviceContainer1: {
    marginTop: "0em",
    backgroundColor: theme.palette.common.darkGrey,
    [theme.breakpoints.down("sm")]: {
      padding: "2.5em",
    },
  },
  serviceContainer2: {
    marginTop: "0em",
    [theme.breakpoints.down("sm")]: {
      padding: "2.5em",
    },
  },
  savingStyles: {
    maxWidth: "29em",
    minWidth: "25em",
    marginTop: "2em",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
      minWidth: "21em",
    },
  },

  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 10,
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

export default function ServicesBlock() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: customSoftwareIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsAnalysis = {
    loop: true,
    autoplay: true,
    animationData: analysis,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsSaving = {
    loop: true,
    autoplay: true,
    animationData: savings,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
      <Grid item>
        {" "}
        {/*--------------Service Block-------------*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
          alignItems="center"
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow width={10} height={10} fill="red" />
            </Button>
          </Grid>
          <Grid item>
            <Grid container className={classes.icon}>
              <Lottie
                options={defaultOptions1}
                height={"100%"}
                width={"100%"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*--------------Saving Tracker-------------*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer1}
          alignItems="center"
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Saving LifeCycle Management</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow width={10} height={10} fill="red" />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "1em" }}>
            <Grid container className={classes.icon}>
              <Lottie
                options={defaultOptionsAnalysis}
                height={"100%"}
                width={"100%"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*--------------Analytics As A Service -------------*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer2}
          alignItems="center"
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Saving LifeCycle Management</Typography>
            <Typography variant="subtitle1">
              Translate spend data into savings opportunities
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Drive more realized savings and financial{" "}
              <span className={classes.specialText}>transparency</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow width={10} height={10} fill="red" />
            </Button>
          </Grid>
          <Grid item>
            <Grid container className={classes.savingStyles}>
              <Lottie
                options={defaultOptionsSaving}
                height={"100%"}
                width={"100%"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
