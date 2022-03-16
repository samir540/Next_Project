import React from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    key: "m1",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg",
    title: "First meetup",
    address: "Baku",
  },
  {
    id: "m2",
    key: "m2",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg",
    title: "Second meetup",
    address: "Ankara",
  },
  {
    id: "m3",
    key: "m3",
    image:
      "https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg",
    title: "Third meetup",
    address: "Kiyev",
  },
];

function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_DATA} />
    </>
  );
}

export default HomePage;
