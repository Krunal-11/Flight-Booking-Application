import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchPage() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#001e3c" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            AirIndia
          </Typography>
          <Button color="inherit">Log in</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundColor: "#001e3c",
          padding: 3,
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Millions of cheap flights. One simple search.
        </Typography>

        <Box
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginBottom: 3 }}
        >
          <Box item xs={12} sm={3}>
            <TextField
              fullWidth
              label="From"
              variant="outlined"
              defaultValue="Indira Gandhi International"
              componentsProps={{
                sx: {
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                },
              }}
            />
          </Box>

          <Box item xs={12} sm={3}>
            <TextField
              fullWidth
              label="To"
              variant="outlined"
              defaultValue="Rajiv Gandhi International"
              componentsProps={{
                sx: {
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                },
              }}
            />
          </Box>

          <Box item xs={12} sm={2}>
            <TextField
              fullWidth
              type="date"
              label="Depart"
              componentsLabelProps={{ shrink: true }}
              defaultValue="2024-09-26"
              componentsProps={{
                min: new Date().toISOString().split("T")[0],
              }}
              sx={{
                "& input": {
                  backgroundColor: "white",
                },
              }}
            />
          </Box>

          <Box item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Travellers"
              variant="outlined"
              type="number"
              defaultValue="1"
              componentsProps={{
                sx: {
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                },
              }}
            />
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default SearchPage;
