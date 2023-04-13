import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography,Box, Rating } from "@mui/material";
import {AccessTime} from "@mui/icons-material";


interface Props{

}
const TourCard:React.FC<Props> = (props) => {
  return (
    <>
      <Grid item xs={3} >
        <Paper elevation={5} >
          <img className="card__img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8Pd9I6uDIaBjeMtZDCCEoAHaE8%26pid%3DApi&f=1&ipt=02f5491d1beae90eb2e65d2f8081d2b277b6401328618504c0f7978df5935d8b&ipo=images" alt="" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h1">Immense into the falls</Typography>
            <Box sx={
              {
                display:"flex",
                alignItems:"center",
                marginTop:3,
              }
            }>
                <AccessTime sx={{width:12.5}} />
                <Typography variant="body1" component="p" marginLeft={0.5}>
                  5 hours
                </Typography>
            </Box>
            <Box sx={
              {
                display:"flex",
                alignItems:"center",
              } 
              }>
                  <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly  />
                  <Typography variant="subtitle2" component={"p"} marginRight={0.5}>
                    4.5
                  </Typography>
                  <Typography variant="body2" component="p" marginLeft={1.5}>
                      (655 reviews)
                  </Typography>
                  
            </Box>
            <Typography variant="h6" component={"h3"} marginTop={0}>
              From C $147
            </Typography>
          </Box >
        </Paper>
      </Grid>
    </>
  )
};

export default TourCard;


