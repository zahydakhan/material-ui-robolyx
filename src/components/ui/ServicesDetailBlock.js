import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import services from "../../animations/servicesAnimation/36203-services-scroll-animation.json";

import contractIcon from "../../assets/contract.svg";
import spendAnalysisIcon from "../../assets/spend-analysis.svg";
import savingLifecycle from "../../assets/saving-lifecycle.svg";
import forecasting from "../../assets/forecasting.svg";
import procurementIcon from "../../assets/procurement.svg";

const useStyles = makeStyles((theme) => ({
  servicesDetailContainer: {
    backgroundColor: theme.palette.common.darkGrey,
    paddingLeft: "6em",
    marginRight: 0,
  },
  servicesLottie: {
    maxWidth: "29em",
    minWidth: "25em",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
      minWidth: "21em",
    },
  },
}));

export default function ServicesDetailBlock() {
  const classes = useStyles();

  const defaultOptionsServices = {
    loop: true,
    autoplay: true,
    animationData: services,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
      <Grid item>
        {/*--------------Services Detail block -------------*/}
        <Grid container className={classes.servicesDetailContainer}>
          <Grid item lg={8} md={6}>
            {/*--------------1st -------------*/}
            <Grid
              container
              spacing={8}
              direction="column"
              styles={{ paddingTop: "20em" }}
            >
              <Grid item style={{ marginTop: "5em" }}>
                <Typography variant="h4">
                  Get more out of your procurement analytics
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Some subtitle
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={8}>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <img
                          style={{ height: "60px" }}
                          alt="contract management icon"
                          src={contractIcon}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">
                          Contract Management
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          Get more value out of your contract lifecycle by
                          combining spend{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <img
                          style={{ height: "60px" }}
                          alt="contract management icon"
                          src={spendAnalysisIcon}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">Spend Analysis</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          Get more value out of your contract lifecycle by
                          combining spend{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <img
                          style={{ height: "60px" }}
                          alt="contract management icon"
                          src={savingLifecycle}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">Savings Lifecycle</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          Get more value out of your contract lifecycle by
                          combining spend{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <img
                          style={{ height: "60px" }}
                          alt="forecasting icon"
                          src={forecasting}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">Spend Forecasting</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          Get more value out of your contract lifecycle by
                          combining spend{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <img
                          style={{ height: "60px" }}
                          alt="procurement icon"
                          src={procurementIcon}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">
                          Procurement Benchmarking
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          Get more value out of your contract lifecycle by
                          combining spend{" "}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Grid container direction="column">
                      <Grid item>
                        <img
                          style={{ height: "60px" }}
                          alt="contract management icon"
                          src={contractIcon}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6">
                          Contract Management
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          Get more value out of your contract lifecycle by
                          combining spend{" "}
                        </Typography>
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
                width={"65%"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
