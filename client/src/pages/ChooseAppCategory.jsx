import React from "react";
import SparkLine from "../components/Charts/SparkLine";
import './ChooseAppCategory.css'

export default function ChooseAppCategory() {
  return (
    <div className="appcategorydiv">
      <SparkLine person="mother"/>
      <SparkLine person="child"/>
    </div>
  );
}
