import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import DashboardCard from "../Components/DashboardCards";
import { Grid, CircularProgress } from "@material-ui/core";
import CompleteProfileModal from "../Components/CompleteProfileModal";
import {
  getAllDocs,
  getSingleDoc,
  getSubCollection,
} from "../Services/firestoreService";
import { collectionNames } from "../Constants/firebaseCollections";
import { useEffect } from "react";
import LibraryCard from "../Components/LibraryCard";

function DashboardDefault(props) {
  const [openModal, setOpenModal] = useState(false);
  const [semesters, setSemesters] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const getData = async () => {
    try {
      setLoader(true);
      const userId = await localStorage.getItem("userId");
      const data = await getAllDocs(collectionNames.courses);
      const user = await getSingleDoc(collectionNames.students, await userId);
      const courses = await getSubCollection(
        collectionNames.students,
        await userId,
        "courses"
      );
      console.log(courses);
      setCourseData(courses);
      if (!user.isProfileComplete) {
        setOpenModal(true);
      }
      setSemesters(data);
      // console.log(data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress size={40} />
        </div>
      ) : (
        <>
          <h1 className="dashboard-heading">DASHBOARD</h1>
          <div className="course-overview-container">
            <div className="course-overview">
              <h2 className="dashboard-section-heading">Course Overview</h2>
              <p
                className="dashboard-view-all"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  history.push({
                    pathname: "/dashboard/mycourses",
                    state: courseData,
                  })
                }
              >
                View all
              </p>
            </div>
            <Grid
              container
              spacing={6}
              style={{ marginBottom: "10px", minHeight: "320px" }}
            >
              {courseData.slice(0, 3).map((item) => (
                <Grid className="grid-item" item md={4} xs={11} lg={3}>
                  <DashboardCard
                    data={item}
                    onClicked={() =>
                      history.push(`/dashboard/coursedetail/${item.selfId}`)
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </div>

          <div className="course-overview-container">
            <div className="course-overview">
              <h2 className="dashboard-section-heading">eLibrary</h2>
              <p className="dashboard-view-all">View all</p>
            </div>
            <Grid container spacing={6} style={{ marginBottom: "10px" }}>
              <Grid className="grid-item" item md={4} xs={11} lg={3}>
                <LibraryCard />
              </Grid>
              <Grid className="grid-item" item md={4} xs={11} lg={3}>
                <LibraryCard />
              </Grid>
              <Grid className="grid-item" item md={4} xs={11} lg={3}>
                <LibraryCard />
              </Grid>
              <Grid className="grid-item" item md={4} xs={11} lg={3}>
                <LibraryCard />
              </Grid>
            </Grid>
          </div>
          {openModal ? (
            <CompleteProfileModal
              click={openModal}
              parentCallback={(val) => setOpenModal(val)}
              onSubmit={() => console.log("submitted")}
              label="Are you sure you want to continue?"
              title="Complete Your Student Profile"
              data={semesters}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

export default DashboardDefault;
