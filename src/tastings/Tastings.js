import React from "react";
import { Page } from "../shared/Page";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const whiskies = [
  {
    number: 1,
    disillery: "Glenmorangie",
    name: "Quinta Ruban",
    age: 12,
    kind: "SM",
    heritage: {
      country: "SC",
      area: "HIGH",
    },
    extras: {
      colored: true,
      chillFiltered: false,
      singleCask: false,
      caskStrength: false,
    },
    vol: 46,
    dateOfTasting: 1534000000000,
    marturation: [
      {
        cask: "BOURBON",
        heritageOfCask: "USA",
        specifictionOfContent: null,
        duration: 10,
      },
    ],
    finish: [
      {
        cask: "PORT",
        heritageOfCask: null,
        specifictionOfContent: null,
        duration: 2,
      },
    ],
    rating: 6,
  },
  {
    number: 2,
    disillery: "Glenmorangie",
    name: "Quinta Ruban",
    age: 12,
    kind: "SM",
    heritage: {
      country: "SC",
      area: "HIGH",
    },
    extras: {
      colored: true,
      chillFiltered: false,
      singleCask: false,
      caskStrength: false,
    },
    vol: 46,
    dateOfTasting: 1534000000000,
    marturation: [
      {
        cask: "BOURBON",
        heritageOfCask: "USA",
        specifictionOfContent: null,
        duration: 10,
      },
    ],
    finish: [
      {
        cask: "PORT",
        heritageOfCask: null,
        specifictionOfContent: null,
        duration: 13,
      },
    ],
    rating: 6,
  },
];

const getRating = ratingIndex => {
  let parsedRating = "";
  for (let index = 0; index < ratingIndex; index++) {
    parsedRating += "*";
  }
  return <span>{parsedRating}</span>;
};

const getDuration = month => {
  let durationString;
  if (month > 11) {
    durationString = `${Math.floor(month / 12).toString()} J.`;
    month = month % 12;
    if (month === 0) {
      return durationString;
    }
  }
  durationString
    ? (durationString += `, ${month} Mon.`)
    : (durationString = `${month} Mon.`);
  return durationString;
};

const getDate = timeStamp => {
  const date = new Date(timeStamp);
  return date.toLocaleDateString();
};

const TastingsTable = ({ whiskies }) => (
  <Table>
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
      {whiskies.map(whisky => (
        <tr key={whisky.number}>
          <th>{whisky.number}</th>
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
                  <div>{getDuration(stage.duration)}</div>
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
          <td>{getDate(whisky.dateOfTasting)}</td>
          <td>{getRating(whisky.rating)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export class Tastings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addWhiskyModal: false,
      whiskies: [],
    };

    this.toggleAddWhiskyModal = this.toggleAddWhiskyModal.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({ whiskies });
  }

  toggleAddWhiskyModal() {
    this.setState({
      addWhiskyModal: !this.state.addWhiskyModal,
    });
  }

  render() {
    return (
      <Page>
        <Button color="primary" onClick={this.toggleAddWhiskyModal}>
          Add Whisky
        </Button>
        <Modal
          isOpen={this.state.addWhiskyModal}
          toggle={this.toggleAddWhiskyModal}
        >
          <ModalHeader toggle={this.toggleAddWhiskyModal}>
            Modal title
          </ModalHeader>
          <ModalBody>Test Modal</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleAddWhiskyModal}>
              Do Something
            </Button>
            <Button color="secondary" onClick={this.toggleAddWhiskyModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {this.state.whiskies.length && (
          <TastingsTable whiskies={this.state.whiskies} />
        )}
      </Page>
    );
  }
}
