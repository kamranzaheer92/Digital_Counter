import React from "react";

export default function Prayertime({ time }) {
  return <h2>Time for {time ? "Fajr" : "Esha"} Prayer </h2>;
}
