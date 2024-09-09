import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import useFormInput from "./forminput";


const Contact = () => {

  const name = useFormInput('')
  const message = useFormInput('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name.value},Message: ${message.value}`)
    alert("Form submitted");
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: "2rem",
          padding: "2rem",
          maxWidth: 600,
          marginX: "auto",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
              autoComplete="name"
              {...name}   // you can call the componenet here with spread operator
            />
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
              autoComplete="email"
            />
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
              autoComplete="message"
              {...message}    /* The spread operator here is equivalent to value={name.value} onChange={name.onChange} */
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
