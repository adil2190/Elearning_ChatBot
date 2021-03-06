import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import demo from "../Assets/form_background.jpg";

export default function DashboardCard({ onClicked, data }) {
  return (
    <Card
      onClick={onClicked}
      sx={{ maxWidth: 345 }}
      style={{
        boxShadow: "0px 2px 15px #00000066",
        minHeight: "280px",
        cursor: "pointer",
      }}
    >
      <CardMedia component="img" height="140" image={demo} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`BSSE ${data.fallSpring} ${new Date().getFullYear()}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${data.courseCode} ${data.courseName}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
