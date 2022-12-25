import React from "react";
// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { addHackathon } from "../api";
import { useNavigate } from "react-router-dom";
import useHttp from "../use-http";

function Create() {
  const [title, setTitle] = React.useState("");
  const [shortDescription, setShortDescription] = React.useState("");
  const [details, setDetails] = React.useState("");
  const navigate = useNavigate();

  const titleChangeHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const shortDescriptionChangeHandler = (event) => {
    event.preventDefault();

    setShortDescription(event.target.value);
  };
  const detailsChangeHandler = (event) => {
    event.preventDefault();

    setDetails(event.target.value);
  };

  // const { sendRequest, status } = useHttp(addHackathon);

  // const history = useHistory();

  // React.useEffect(() => {
  //   if (status === "completed") {
  //     navigate("/");
  //   }
  // }, [status, navigate]);

  // let hackathonData = {
  //   title: title,
  //   shortDescription: shortDescription,
  //   details: details,
  // };

  const addHackathonHandler = async (event) => {
    event.preventDefault();
    const hackathonData = {
      title: title,
      shortDescription: shortDescription,
      details: details,
    };
    const response = await fetch(
      `https://devflares-project-5-default-rtdb.firebaseio.com/hackathon.json`,
      {
        method: "POST",
        body: JSON.stringify(hackathonData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Could not create quote.");
    }
    navigate("/");
    setDetails("");
    setTitle("");
    setShortDescription("");
    return null;
  };

  return (
    <>
      <h1>Create Hackathon</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-textarea-1"
            label="Title"
            placeholder="Enter Title Of Hackathon"
            multiline
            onChange={titleChangeHandler}
          />
          <TextField
            id="outlined-textarea"
            label="Short Description"
            placeholder="Enter Short Description"
            multiline
            onChange={shortDescriptionChangeHandler}
          />
          <TextField
            id="outlined-multiline-static"
            label="Details"
            placeholder="Enter Details Of Hackathon"
            multiline
            rows={4}
            onChange={detailsChangeHandler}
            //   defaultValue="Default Value"
          />
        </div>
        <Button variant="outlined" type="submit" onClick={addHackathonHandler}>
          Create Hackathon
        </Button>
      </Box>
    </>
  );
}

export default Create;
