import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router";

function ViewOne() {
  const params = useParams();
  //   console.log(params);
  let hackathonId = params.id;
  const [loadedHackathon, setLoadedHackathon] = React.useState({});

  async function getSingleHackathon(hackathonId) {
    const response = await fetch(
      `https://devflares-project-5-default-rtdb.firebaseio.com/hackathon/${hackathonId}.json`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not fetch quote.");
    }

    const hackathon = {
      id: hackathonId,
      ...data,
    };
    console.log(hackathon);
    setLoadedHackathon(hackathon);

    // return hackathon;
  }
  React.useEffect(() => {
    getSingleHackathon(hackathonId);
  }, []);
  async function deleteHackathon(hackathonId) {
    const response = await fetch(
      `https://devflares-project-5-default-rtdb.firebaseio.com/hackathon/${hackathonId}.json`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not delete quote.");
    }
    console.log(data);
  }

  return (
    <div>
      <div className="d-flex flex-row justify-content-end mt-3 ">
        <Button variant="outlined" color="primary">
          Update
        </Button>
        <Button variant="outlined" color="error" onClick={deleteHackathon}>
          Delete
        </Button>
      </div>
      <h1>{loadedHackathon?.title}</h1>
      <small>{loadedHackathon.shortDescription}</small>
      <p>{loadedHackathon.details}</p>
    </div>
  );
}

export default ViewOne;
