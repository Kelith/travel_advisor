import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./MapStyles";

function Map( { setCoords, setBounds, coords}) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCr-eq9BpMKlBc5FoPgAaVPfmUqUitDRJ8" }}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        defaultZoom={8}
        center={{ lat: -34.397, lng: 150.644 }}
        zoom={isMobile ? 8 : 10}
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
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
