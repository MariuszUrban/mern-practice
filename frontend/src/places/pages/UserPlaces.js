import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "one of the highest buildings",
    imageUrl:
      "https://archello.s3.eu-central-1.amazonaws.com/images/2018/06/29/Burj-Khalifa.1530286094.553.jpg",
    address:
      "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
    location: {
      lat: 25.197197,
      lng: 55.2721877,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "one of the highest buildings",
    imageUrl:
      "https://archello.s3.eu-central-1.amazonaws.com/images/2018/06/29/Burj-Khalifa.1530286094.553.jpg",
    address:
      "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
    location: {
      lat: 25.197197,
      lng: 55.2721877,
    },
    creator: "u2",
  },
];

export default function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
}
