import React from "react";

const ExerciseCard = ({ exercisesData, onClick }) => {
  return (
    <div className="exercise-list">
      {exercisesData.map((exercise) => (
        <div
          key={exercise.id}
          className="ml-10 mr-10 exercise-card violet-gradient {
            background: #804dee;
            background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
            background: -webkit-linear-gradient(
              -90deg,
              #804dee 0%,
              rgba(60, 51, 80, 0) 100%
            );
          } cursor-pointer  "
          onClick={() => onClick(exercise)}
        >
          <div className="exercise-header  className='text-white tracking-wider text-[18px]">
            {/* <span className="category-icon">{exercise.icon}</span> */}
            <h2>{exercise.title}</h2>
          </div>
          <p className="category mt-2 text-secondary text-[#bdbebe] text-[14px]">
            {exercise.category}
          </p>
          <div className="opacity-95">
            <img src={exercise.photo} alt={exercise.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseCard;
