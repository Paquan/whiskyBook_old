import React from 'react';
import {Table} from 'reactstrap';

const getRating = ratingIndex => {
  let parsedRating = '';
  for (let index = 0; index < ratingIndex; index++) {
    parsedRating += '*';
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

export const TastingsTable = ({ whiskies }) => (
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Whisky</th>
        <th>Art</th>
        <th>Alter</th>
        <th>Herkunft</th>
        <th>Vol.</th>
        <th colSpan="2">Reifung</th>
        <th>Extras</th>
        <th>Tag der Probe</th>
        <th>Bewertung</th>
      </tr>
    </thead>
    <tbody>
      {whiskies.map(whisky => (
        <tr key={whisky.number}>
          <td>{whisky.number}</td>
          <td>
            <div>{whisky.disillery}</div>
            <div>{whisky.name}</div>
          </td>
          <td>{whisky.kind}</td>
          <td>{whisky.age} Jahre</td>
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
            <div>Collored: {whisky.extras.caskStrength ? 'true' : 'false'}</div>
            <div>
              Chill-Filtration: {whisky.extras.caskStrength ? 'true' : 'false'}
            </div>
            <div>
              Cask Strength: {whisky.extras.caskStrength ? 'true' : 'false'}
            </div>
            <div>
              Single Cask: {whisky.extras.caskStrength ? 'true' : 'false'}
            </div>
          </td>
          <td>{getDate(whisky.dateOfTasting)}</td>
          <td>{getRating(whisky.rating)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);