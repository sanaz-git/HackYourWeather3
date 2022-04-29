import React from 'react';

const Weather = ({ info }) => {
  function handleDelete() {
    // props.setAllInfo(prev => prev.filter(info => info.id != props.id))
  }
  return (
    <div className="allInfo">
      <ul>
        <li>
          <button onClick={handleDelete} info={info}>
            Delete
          </button>
          <h2>
            {info.name},{info.sys.country}
          </h2>
          <h3>{info.weather[0].main}</h3>
          <p className="des">{info.weather[0].description}</p>
          <p>temp_min: {Math.round(info.main.temp_min - 273)} &#8451;</p>
          <p>temp_max: {Math.round(info.main.temp_max - 273)} &#8451;</p>
          <p>
            lon: {info.coord.lon.toFixed(2)} , lat:
            {info.coord.lat.toFixed(2)}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Weather;
