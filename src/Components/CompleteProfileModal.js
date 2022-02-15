import React, { useState } from "react";

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
import {
  addDocInSubCollection,
  getSubCollection,
  setSingleDocument,
} from "../Services/firestoreService";
import { collectionNames } from "../Constants/firebaseCollections";

export default function CompleteProfileModal(props) {
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const [semester, setSemester] = React.useState("");
  const [courseData, setCourseData] = React.useState([]);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    technology: "",
    rollNumber: "",
    semester: "",
    phone: "",
    isProfileComplete: true,
  });
  const handleClickOpen = () => {
    setOpen(props.click);
  };

  const handleClose = () => {
    setOpen(false);
    props.parentCallback(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const userId = localStorage.getItem("userId");
    // props.onSubmit();
    // console.log(data);
    try {
      await setSingleDocument(collectionNames.students, userId, data);
      for (let item of courseData) {
        // console.log(item);
        await addDocInSubCollection(
          collectionNames.students,
          userId,
          "courses",
          item
        );
      }
      setLoader(false);
      console.log("success");
      props.parentCallback(false);
    } catch (err) {
      setLoader(false);
      console.log(err);
      props.parentCallback(false);
    }
    // props.onChange("");
    // props.parentCallback(false);
  };

  const getCourses = async (id) => {
    try {
      setLoader(true);
      const courses = await getSubCollection(
        collectionNames.courses,
        id,
        "courses"
      );
      console.log(courses);
      setCourseData(courses);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };
  return (
    <div>
      <Dialog
        onback
        maxWidth="md"
        PaperProps={{ style: { minWidth: "320px" } }}
        open={props.click}
        onClose={(e, r) => {
          if (r !== "backdropClick") {
            handleClose();
          }
        }}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle className="dashboard-heading">{props.title}</DialogTitle>
          <DialogContent style={{ minHeight: "420px" }}>
            <Grid container spacing={6}>
              <Grid item md={6} lg={6} sm={11} xs={11}>
                <TextField
                  margin="dense"
                  id="firstName"
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                  required
                  label={"First Name"}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item md={6} lg={6} sm={11} xs={11}>
                <TextField
                  margin="dense"
                  id="lastName"
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  required
                  label="Last Name"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item md={6} lg={6} sm={11} xs={11}>
                <TextField
                  margin="dense"
                  id="technology"
                  value={data.technology}
                  onChange={(e) =>
                    setData({ ...data, technology: e.target.value })
                  }
                  required
                  label="Technology"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item md={6} lg={6} sm={11} xs={11}>
                <TextField
                  margin="dense"
                  id="rollNumber"
                  value={data.rollNumber}
                  onChange={(e) =>
                    setData({ ...data, rollNumber: e.target.value })
                  }
                  required
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
                  <InputLabel id="demo-simple-select-label">
                    Semester
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Diet"
                    required
                    name="semester"
                    value={semester?.semester}
                    onChange={(e) => {
                      setSemester(e.target.value);
                      getCourses(e.target.value.selfId);
                      setData({ ...data, semester: e.target.value.semester });
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
                  id="phone"
                  required
                  type="number"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
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
              type="submit"
              disabled={loader}
            >
              Complete
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
