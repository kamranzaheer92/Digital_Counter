import React from "react";

export default function Prayertime({ time }) {
  return <h1>Time for {time ? "Fajr" : "Esha"} Prayer </h1>;
}
