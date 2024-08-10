import React from 'react';

const Keypoints = () => {
  return (
    <div className="h-1/2 w-full bg-amber-100 flex flex-wrap justify-center items-center">
      <div className="m-8 flex flex-col items-center">
        <div className="h-72 w-72 rounded-full bg-lime-950 flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-amber-200 text-xl">Vertical Farming</h2>
          <h5 className="text-amber-300">
            A method of growing crops in vertically stacked layers, using less land and water.
          </h5>
        </div>
      </div>
      <div className="m-8 flex flex-col items-center">
        <div className="h-72 w-72 rounded-full bg-lime-950 flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-amber-200 text-xl">Drip Irrigation</h2>
          <h5 className="text-amber-300">
            Smart irrigation systems that optimize water use based on soil moisture and weather forecasts.
          </h5>
        </div>
      </div>
      <div className="m-8 flex flex-col items-center">
        <div className="h-72 w-72 rounded-full bg-lime-950 flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-amber-200 text-xl">Crop Recommender</h2>
          <h5 className="text-amber-300">
            A machine learning model that predicts crop diseases early, allowing for timely intervention.
          </h5>
        </div>
      </div>
      <div className="m-8 flex flex-col items-center">
        <div className="h-72 w-72 rounded-full bg-lime-950 flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-amber-200 text-xl">Crop Disease Predictor</h2>
          <h5 className="text-amber-300">
            A machine learning model that predicts crop diseases early, allowing for timely intervention.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Keypoints;
