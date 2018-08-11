import React from "react";
import { Page } from "../shared/Page";

const whiskys = [
  {
    disillery: "Glenmorangie",
    name: "Quinta Ruban",
    age: 12,
    kind: "SM",
    heritage: {
      country: "SC",
      area: "HIGH"
    },
    extras: {
      colored: true,
      chillFiltered: false,
      singleCask: false,
      caskStrength: false
    },
    vol: 46,
    dateOfTasting: 5324134547,
    marturation: [
      {
        cask: "BOURBON",
        heritageOfCask: "USA",
        specifictionOfContent: null,
        duration: 10
      }
    ],
    finish: [
      {
        cask: "PORT",
        heritageOfCask: null,
        specifictionOfContent: null,
        duration: 2
      }
    ],
    rating: 6
  }
];

const Table = ({ whiskys }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Whisky</th>
        <th>Kind</th>
        <th>Age</th>
        <th>Heritage</th>
        <th>Vol.</th>
        <th colSpan="2">Maturation</th>
        <th>Extras</th>
        <th>Date of tasting</th>
        <th>Personal rating</th>
      </tr>
    </thead>
    <tbody>
      {whiskys.map((whisky, index) => (
        <tr key={index}>
          <td>
            <div>{whisky.disillery}</div>
            <div>{whisky.name}</div>
          </td>
          <td>{whisky.kind}</td>
          <td>{whisky.age} Years</td>
          <td>
            <div>{whisky.heritage.country}</div>
            <div>{whisky.heritage.area}</div>
          </td>
          <td>{whisky.vol}%</td>
          <td>
            {whisky.marturation.map((stage, index) => {
              return (
                <React.Fragment key={index}>
                  <div>{stage.cask}</div>
                  <div>{stage.heritageOfCask}</div>
                  <div>{stage.specifictionOfContent}</div>
                  <div>{stage.duration}</div>
                </React.Fragment>
              );
            })}
          </td>
          <td>
            {whisky.finish.map((stage, index) => {
              return (
                <React.Fragment key={index}>
                  <div>{stage.cask}</div>
                  <div>{stage.heritageOfCask}</div>
                  <div>{stage.specifictionOfContent}</div>
                  <div>{stage.duration}</div>
                </React.Fragment>
              );
            })}
          </td>
          <td>
            <div>Collored: {whisky.extras.caskStrength ? "true" : "false"}</div>
            <div>
              Chill-Filtration: {whisky.extras.caskStrength ? "true" : "false"}
            </div>
            <div>
              Cask Strength: {whisky.extras.caskStrength ? "true" : "false"}
            </div>
            <div>
              Single Cask: {whisky.extras.caskStrength ? "true" : "false"}
            </div>
          </td>
          <td>{whisky.dateOfTasting}</td>
          <td>{whisky.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export class Tastings extends React.Component {
  render() {
    return (
      <Page>
        <Table whiskys={whiskys} />
      </Page>
    );
  }
}
