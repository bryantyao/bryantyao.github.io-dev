import React from "react";
import Section from "./Section.jsx";

export function FadeInSection(props) {
  const { component:Component , ...other } = props;

  return (
    <Section
      onEntering="opacity-0"
      onEnter="animated fadeIn"
      onLeave="opacity-1"
      {...other}
    >
      <Component/>
    </Section>
  );
}

