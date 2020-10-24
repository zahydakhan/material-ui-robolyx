import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import animationData from "../animations/landingpage/main_ani_landingpage.json";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";

import ServicesBlock from "../components/ui/ServicesBlock";
import ServicesDetailBlock from "../components/ui/ServicesDetailBlock";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "60em",
    minWidth: "50em",
    marginTop: "2em",
    marginLeft: "5%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
      minWidth: "21em",
    },
  },
  book: {
    ...theme.typography.demo,
    backgroundColor: "#01B4CD",
    color: "white",
    borderRadius: 40,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "2em",
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1.5em",
    },
  },
  heroContainer: {
    backgroundColor: theme.palette.common.grey,
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*--------------Hero Block------------*/}
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          direction="row"
          className={classes.heroContainer}
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing Digital Revolution <br /> In Procurement
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.book} variant="contained">
                  {" "}
                  Book Demo
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill="red" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <ServicesBlock />
      <ServicesDetailBlock />
    </Grid>
  );
}
