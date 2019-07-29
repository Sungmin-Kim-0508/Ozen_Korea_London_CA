import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { Helmet } from "react-helmet";
import style from "../../../assets/styles/partial/ozen_korea_contact.module.scss";

const Contact = () => {
  const OzenSushiMap = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 42.984453, lng: -81.291405 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 42.984453, lng: -81.291405 }} />
        )}
      </GoogleMap>
    ))
  );

  return (
    <div className={style.container}>
      <Helmet>
        <title>Contact Us | Ozen Korea </title>
      </Helmet>
      {/* <section className={style.section_1} /> */}
      <section className={style.section_2}>
        <div className={style.title}>Contact Us</div>
        <div className={`${style.phone_number} font_roboto`}>
          <i className="fas fa-phone-alt" /> 519-642-2558
        </div>
        <div className={style.location}>
          <div id="googleMap" className={style.googleMap}>
            <OzenSushiMap
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_ob55sWqdb95QE-QTr5haLrCtb5cOWIk&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `400px`, width: `100%` }} />
              }
              mapElement={<div style={{ height: `100%`, width: `100%` }} />}
            />
          </div>
          <div className={style.address}>
            <span className={style.pinpoint_img} />
            <div className="font_roboto">
              <i className="fas fa-map-marker-alt" /> 103-541, Oxford St W,
              London,
            </div>
            <div className="font_roboto">ON N6H 0H9</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
