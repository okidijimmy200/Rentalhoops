import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

const Property = ({ property }) => {
  const classes = useStyles();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const prevSlide = () => {
    let currentIndex = activeImageIndex;
    if (currentIndex > 0) {
      setActiveImageIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    let currentIndex = activeImageIndex;
    if (currentIndex < property.images.length) {
      setActiveImageIndex(currentIndex + 1);
    }
  };

  return (
    <Paper className={classes.paper} component="div">
      <Card className={classes.card}>
        {property.images.map((slide, index) => {
          const isActive = activeImageIndex === index;
          if (!isActive) {
            return null;
          }

          return (
            <div key={slide.id} style={{ width: "100%", margin: "0 auto" }}>
              <img className={classes.media} alt="pic" src={slide.url} />
            </div>
          );
        })}
        <Button
          component="div"
          className={classes.arrowLeft}
          disableRipple
          onClick={prevSlide}
        >
          <div className={classes.arrowWrap}>
            <svg
              viewBox="0 0 18 18"
              role="img"
              alt="pic"
              aria-label="Previous"
              focusable="false"
              style={{
                display: "block ",
                fill: "rgb(255, 255, 255)",
                height: "24px",
                width: "24px",
              }}
            >
              <path
                fillRule="evenodd"
                d="M13.703 16.293a1 1 0 1 1-1.415 1.414l-7.995-8a1 1 0 0 1 0-1.414l7.995-8a1 1 0 1 1 1.415 1.414L6.413 9l7.29 7.293z"
              ></path>{" "}
            </svg>
          </div>
        </Button>
        <Button
          className={classes.arrowRight}
          disableRipple
          onClick={nextSlide}
          data-id={property._id}
        >
          <div className={classes.arrowWrap}>
            <svg
              viewBox="0 0 18 18"
              role="img"
              alt="pic"
              aria-label="Next"
              focusable="false"
              style={{
                display: "block",
                fill: " rgb(255, 255, 255) ",
                height: "24px",
                width: "24px",
              }}
            >
              <path
                fillRule="evenodd"
                d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z"
              ></path>
            </svg>
          </div>
        </Button>
        <CardContent className={classes.Text}>
          <div className={classes.data}>
            <div className={classes.location}>
              <Typography component="p">
                <span className={classes.neighbourhood}>
                  {" "}
                  {property.name} {property.regionCategory}
                </span>
              </Typography>
              <Typography className={classes.hood}>
                {property.location}
              </Typography>
            </div>
            <div className={classes.listInfo}>
              <Typography className={classes.price}>
                Shs. {property.price}
              </Typography>
              <Typography component="div" className={classes.summary}>
                {property.bedRooms} BD {property.bathRooms} BA{" "}
                {property.familyNumber} FAMILY
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Property;
