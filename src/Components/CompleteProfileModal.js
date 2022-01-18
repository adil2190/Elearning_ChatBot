import * as React from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { getSubCollection } from "../Services/firestoreService";
import { collectionNames } from "../Constants/firebaseCollections";

export default function CompleteProfileModal(props) {
  const [open, setOpen] = React.useState(false);
  const [semester, setSemester] = React.useState("");
  const [courseData, setCourseData] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(props.click);
  };

  const handleClose = () => {
    setOpen(false);
    props.parentCallback(false);
  };

  const handleSubmit = () => {
    props.onSubmit();
    // console.log(semester);
    // props.onChange("");
    props.parentCallback(false);
  };

  const getCourses = async (id) => {
    try {
      const courses = await getSubCollection(
        collectionNames.courses,
        id,
        "courses"
      );
      console.log(courses);
      setCourseData(courses);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Dialog
        onback
        maxWidth="md"
        PaperProps={{ style: { minWidth: "420px" } }}
        open={props.click}
        onClose={(e, r) => {
          if (r !== "backdropClick") {
            handleClose();
          }
        }}
      >
        <DialogTitle className="dashboard-heading">{props.title}</DialogTitle>
        <DialogContent style={{ minHeight: "420px" }}>
          <Grid container spacing={6}>
            <Grid item md={6} lg={6} sm={11} xs={11}>
              <TextField
                margin="dense"
                id="name"
                // value={props.value}
                // onChange={(e) => props.onChange(e.target.value)}
                label={"First Name"}
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item md={6} lg={6} sm={11} xs={11}>
              <TextField
                margin="dense"
                id="name"
                // value={props.value}
                // onChange={(e) => props.onChange(e.target.value)}
                label="Last Name"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item md={6} lg={6} sm={11} xs={11}>
              <TextField
                margin="dense"
                id="name"
                // value={props.value}
                // onChange={(e) => props.onChange(e.target.value)}
                label="Technology"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item md={6} lg={6} sm={11} xs={11}>
              <TextField
                margin="dense"
                id="name"
                // value={props.value}
                // onChange={(e) => props.onChange(e.target.value)}
                label="Roll Number"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid
              style={{ marginTop: "6px" }}
              item
              md={6}
              lg={6}
              sm={11}
              xs={11}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Diet"
                  name="semester"
                  value={semester?.semester}
                  onChange={(e) => {
                    setSemester(e.target.value);
                    getCourses(e.target.value.selfId);
                  }}
                >
                  {props.data.map((item) => (
                    <MenuItem value={item}>{item.semester}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {courseData.map((item) => (
                <p>{item.courseName}</p>
              ))}
            </Grid>
            <Grid item md={6} lg={6} sm={11} xs={11}>
              <TextField
                margin="dense"
                id="name"
                // value={props.value}
                // onChange={(e) => props.onChange(e.target.value)}
                label="Phone Number"
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ marginRight: "20px", marginBottom: "10px" }}
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Complete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
