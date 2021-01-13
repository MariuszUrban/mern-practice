import React from "react";

import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Mario",
      image:
        "https://cdn.vox-cdn.com/thumbor/Yt1avchDkHqEqJuhYZ3YjKF3kFc=/0x0:1700x960/1200x675/filters:focal(714x344:986x616)/cdn.vox-cdn.com/uploads/chorus_image/image/57514059/mario.0.jpg",
      places: 10,
    },
  ];

  return <UsersList items={USERS} />;
}
