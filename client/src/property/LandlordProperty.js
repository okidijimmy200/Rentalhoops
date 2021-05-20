import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import auth from "./../auth/auth-helper";
import { listByLandlord } from "./../property/api-property";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

// styling the component

export default function LandlordProperty({ slides }) {
  const classes = useStyles();
  const [property, setProperty] = useState([]);
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  //fetch the list property API
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listByLandlord(
      {
        userId: jwt.user._id,
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data.error) {
        setRedirectToSignin(true);
      } else {
        setProperty(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line
  }, [jwt.user._id]);

  const nextSlide = () => {
    //  console.log('event.currentTarget.dataset.id', event.currentTarget.dataset.id);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  if (redirectToSignin) {
    return <Redirect to="/login/" />;
  }
  return (
    <>
      <Paper style={{ boxShadow: "0 0 0 0" }}>
        <Typography>Your Properties</Typography>
        <Grid container spacing={4} className={classes.gridRoot}>
          {property.map((property, i) => {
            return <Grid item xs={12} sm={12} md={6} key={i}></Grid>;
          })}
        </Grid>
      </Paper>
    </>
  );
}
