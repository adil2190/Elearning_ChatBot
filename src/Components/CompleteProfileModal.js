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
} from "@material-ui/core";

export default function CompleteProfileModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(props.click);
  };

  const handleClose = () => {
    setOpen(false);
    props.parentCallback(false);
  };

  const handleSubmit = () => {
    props.onSubmit();
    // props.onChange("");
    props.parentCallback(false);
  };

  return (
    <div>
      <Dialog
        onback
        maxWidth="md"
        PaperProps={{ style: { minWidth: "350px" } }}
        open={props.click}
        onClose={(e, r) => {
          if (r !== "backdropClick") {
            handleClose();
          }
        }}
      >
        <DialogTitle className="dashboard-heading">{props.title}</DialogTitle>
        <DialogContent style={{ minHeight: "350px" }}>
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
            <Grid item md={6} lg={6} sm={11} xs={11}>
              <TextField
                margin="dense"
                id="name"
                // value={props.value}
                // onChange={(e) => props.onChange(e.target.value)}
                label="Semester"
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
