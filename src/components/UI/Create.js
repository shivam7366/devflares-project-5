import React from "react";
// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Create() {
  const [value, setValue] = React.useState("Controlled");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };

  return (
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
        />
        <TextField
          id="outlined-textarea"
          label="Short Description"
          placeholder="Enter Short Description"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Details"
          placeholder="Enter Details Of Hackathon"
          multiline
          rows={4}
          //   defaultValue="Default Value"
        />
      </div>
    </Box>
  );
}

export default Create;
