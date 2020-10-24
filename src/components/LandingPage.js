import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import animationData from "../animations/landingpage/main_ani_landingpage.json";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";


import customSoftwareIcon from "../animations/spenanalytics_landingpage/spend_landing.json";
import analysis from "../animations/analysis/analysis.json";
import savings from "../animations/saving/saving.json";
import services from "../animations/servicesAnimation/36203-services-scroll-animation.json";

import contractIcon from '../assets/contract.svg';

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
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1.5em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
   marginLeft: "2em",
    height: "29em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      height: "100%",
    },
  },
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
  heroContainer: {
    backgroundColor: theme.palette.common.grey,
  },
  container4:  {
    marginTop: "5em",
    paddingLeft: "6em",
    width: "100%",
  },
  servicesLottie: {
    maxWidth: "29em",
    minWidth: "25em",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
      minWidth: "21em",
    }
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

  const defaultOptionsServices = {
    loop: true,
    autoplay: true,
    animationData: services,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        {/*--------------Hero Block------------*/}
        <Grid container justify='flex-end' alignItems='center' direction='row' className={classes.heroContainer}>
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing Digital Revolution <br /> In Procurement
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.book} variant='contained'>
                  {" "}
                  Book Demo
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' className={classes.learnButtonHero}>
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill='red' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*--------------Service Block-------------*/}
        <Grid
          container
          direction='row'
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
          alignItems='center'
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1'>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow width={10} height={10} fill='red' />
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
          direction='row'
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer1}
          alignItems='center'
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant='h4'>Saving LifeCycle Management</Typography>
            <Typography variant='subtitle1'>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow width={10} height={10} fill='red' />
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
          direction='row'
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer2}
          alignItems='center'
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant='h4'>Saving LifeCycle Management</Typography>
            <Typography variant='subtitle1'>
              Translate spend data into savings opportunities
            </Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Drive more realized savings and financial{" "}
              <span className={classes.specialText}>transparency</span>
            </Typography>
            <Button variant='outlined' className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>

              <ButtonArrow width={10} height={10} fill='red' />
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

      <Grid item>
        {/*--------------next block -------------*/}
            <Grid container spacing={6} className={classes.container4} >

              <Grid item lg={8} md={6}>{/*--------------1st -------------*/}
                <Grid container spacing={8} direction="column" styles={{paddingTop: "20em" }}> 
                  <Grid item>
                    <Typography variant='h4'>Get more out of your procurement analytics</Typography>
                    <Typography variant='subtitle1' className={classes.subtitle}>Some subtitle</Typography>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={8}>
                      <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Grid container direction="column"> 
                          <Grid item>
                            <img style={{height: "60px" }} alt="contract management icon" src={contractIcon} />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Contract Management</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2">Get more value out of your contract lifecycle by combining spend </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Grid container direction="column">
                          <Grid item>
                            <img style={{height: "60px" }} alt="contract management icon" src={contractIcon} />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Spend Analysis</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2">Get more value out of your contract lifecycle by combining spend </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Grid container direction="column">
                          <Grid item>
                            <img style={{height: "60px" }} alt="contract management icon" src={contractIcon} />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Savings Lifecycle</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2">Get more value out of your contract lifecycle by combining spend </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Grid container direction="column"> 
                          <Grid item>
                            <img style={{height: "60px" }} alt="contract management icon" src={contractIcon} />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Spend Forecasting</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2">Get more value out of your contract lifecycle by combining spend </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Grid container direction="column">
                          <Grid item>
                            <img style={{height: "60px" }} alt="contract management icon" src={contractIcon} />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Procurement Benchmarking</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2">Get more value out of your contract lifecycle by combining spend </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Grid container direction="column">
                          <Grid item>
                            <img style={{height: "60px" }} alt="contract management icon" src={contractIcon} />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">Contract Management</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2">Get more value out of your contract lifecycle by combining spend </Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                    </Grid>
                  </Grid>
                  
                </Grid>
              </Grid>
              <Grid item lg={4} md={6}>
                <Grid container className={classes.servicesLottie}>
                  <Lottie
                    options={defaultOptionsServices}
                    height={"100%"}
                    width={"80%"}
                  />
                </Grid>
              </Grid>
            </Grid>
      </Grid>



    </Grid>
  );
}
