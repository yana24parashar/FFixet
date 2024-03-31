import React, { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import "./ExercisePage.css";
import { exercisesData } from "../constants/index";
// import StarsCanvas from "./StarsCanvas";
//86bd9d

const ExercisePage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <>
      {/* <StarsCanvas /> */}
      <div className="exercise-page">
        <div className="flex items-center pb-20 pt-4 pl-8">
          <div className="border-r-2 border-purple-400 h-full mr-4"></div>
          <h1 className="text-[#E6E8FA] font-black md:text-6xl sm:text-4xl xs:text-3xl text-2xl">
            Mental Health Exercises
          </h1>
        </div>
        <ExerciseCard
          exercisesData={exercisesData}
          onClick={handleExerciseClick}
        />
        {selectedExercise && (
          <div className="modal">
            <div className="modal-content ">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <div className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                <h2>{selectedExercise.title}</h2>
              </div>
              <div className="mt-2 text-secondary text-[#727474] text-[14px]">
                <p>{selectedExercise.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ExercisePage;
