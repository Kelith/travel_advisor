import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./MapStyles";

function Map( { setCoords, setBounds, coords, places, setChildClicked}) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCr-eq9BpMKlBc5FoPgAaVPfmUqUitDRJ8" }}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        defaultZoom={8}
        center={{ lat: -34.397, lng: 150.644 }}
        zoom={isDesktop ? 8 : 10}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          zoomControlOptions: {
            position: "right",
          },
        }}
        onChange={(e) => {
          setCoords({lat: e.center.lat, lng: e.center.lng});
          setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="subtitle2" gutterBottom className={classes.typography}>
                    {place.name}
                  </Typography>
                    <img 
                      src={place.photos ? place.photo.images.large.url : 'https://www.ariston-ts.it/resources/img/restaurant.jpg'}
                      alt={place.name}
                      className={classes.pointer}
                    />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              ) 
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
