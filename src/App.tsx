import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";
import "./App.css";


function App() {
  return(
    <>
      <NavBar />
      <Container sx={{marginY:6}}>
      <Grid container spacing={2}>
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
      </Grid>
    </Container>
    </>
  );
}

export default App
