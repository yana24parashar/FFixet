import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  dheeraj,
  etisha,
  geeta,
  male2,
  male,
  riddhima,
} from "../assets";
import { consultants, diet, yoga } from "../assets/index";

const exercisesData = [
  {
    id: 1,
    title: "High Knees",
    category: "Hamstrings, Quads, & Calves",
    photo: exercise1,
    description:
      "Stand with your feet hip-width apart. Lift one knee to your chest then switch to your other knee. Continue the movement, alternating legs at a running pace, ensuring your feet are lined-up directly below your knees. This aerobic exercise is called High knees and it targets your abdominal walls, hamstrings, quads, and calves.",
    icon: "🌬️", // Icon representing relaxation
  },
  {
    id: 2,
    title: "Burpees",
    category: "Chest, Legs, & Abs",
    photo: exercise2,
    description:
      "Drop into a squat with your hands underneath your shoulders. Kick your feet behind you so your legs are fully extended and you’re in a raised plank position. Jump your feet back towards your hands and then jump into the air with your arms above you.",
    icon: "🌬️", // Icon representing relaxation
  },
  {
    id: 3,
    title: "Star Jump",
    category: "Glutes, Hamstrings, & Quads",
    photo: exercise3,
    description:
      "Jumping is one of the best aerobic exercises you can find. You can do several types of jumps such as star-jumps, where you jump your arms and legs out into a star shape, and tuck jumps, where you jump your knees up towards your chest. Land softly, with your knees slightly bent.",
    icon: "🌬️", // Icon representing relaxation
  },
  {
    id: 4,
    title: "Mountain Climbers",
    category: "Triceps, Glutes, & Abs",
    photo: exercise4,
    description:
      "Start in a plank position, with your arms under your shoulders, your legs extended and core braced. Bring one knee towards your chest, then return it and repeat on the other leg. Keep alternating. For a fat-burning workout at home, continue repeating these mountain climbers until you get tired.",
    icon: "🌬️", // Icon representing relaxation
  },
  {
    id: 5,
    title: "Plank",
    category: "Abdominal Wall",
    photo: exercise5,
    description:
      "Place your hands directly under your shoulders, with your arms straight and elbows soft. Extend your legs backwards so they’re straight, push the ground away, brace your core, and ensure your back is flat and you’re in a straight line. When completing ab workouts at home, hold this plank position for at least 40 seconds.",
    icon: "🌬️", // Icon representing relaxation
  },
  {
    id: 6,
    title: "Tricep Dips",
    category: "Triceps, Pecs, & Back",
    photo: exercise6,
    description:
      "Use a stable chair and place your hands directly behind your bottom, shoulder-width apart, facing towards you. Slide forward just far enough that you clear the chair, then lower yourself until your elbows are bent between 45 and 90 degrees. Slowly push yourself back up to complete one tricep dip. Aim for three sets of 8-10 repetitions.",
    icon: "🌬️", // Icon representing relaxation
  },
  // Add more exercises...
];

const consultdata = [
  {
    name: "Dr. Rakesh Johri",
    img: dheeraj,
    speciality: "Psychatrist",
    Contact: "180-987-980",
  },
  {
    name: "Dr. Etisha Garg",
    img: etisha,
    speciality: "Pediatrition",
    Contact: "180-987-980",
  },
  {
    name: "Dr. Geeta Bhalla",
    img: geeta,
    speciality: "Dietition",
    Contact: "180-987-980",
  },
  {
    name: "Dr. Riddhima Pandit",
    img: riddhima,
    speciality: "Psychatrist",
    Contact: "180-987-980",
  },
  {
    name: "Dr. Naresh Aggarwal",
    img: male,
    speciality: "Nutritionist",
    Contact: "180-987-980",
  },
  {
    name: "Dr. Dheeraj ",
    img: male2,
    speciality: "Heart Surgeon",
    Contact: "180-987-980",
  },
];

const services = [
  {
    title: "Exercises",
    icon: yoga,
    link: "/ExercisePage",
  },
  {
    title: "Consultants",
    icon: consultants,
    link: "/consult",
  },
  {
    title: "Activity Tracker",
    icon: diet,
    link: "/consult",
  },
];

const testimonials = [
  {
    testimonial:
      "I've struggled with anxiety for years, but Fixitt gave me the tools and community I needed to start healing. Forever grateful!",
    name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Fixitt helped me navigate through some of the toughest times in my life. The resources and support provided here are invaluable. Highly recommend!",
    name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've struggled with anxiety for years, but Fixitt gave me the tools and community I needed to start healing. Forever grateful!",
    name: "Lisa Wang",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { exercisesData, consultdata, services, testimonials };
