import React, { useState } from "react";
import CourseDetailTable from "../Components/CourseDetailTable";
import { Grid, CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { collectionNames } from "../Constants/firebaseCollections";
import {
  getFinals,
  getMids,
  getSessionals,
  getSingleDoc,
  getSubCollectionDoc,
} from "../Services/firestoreService";

function CourseDetail(props) {
  const { courseId } = useParams();
  const [sessionalLoader, setSessionalLoader] = useState(true);
  const [assignmentsData, setAssignmentsData] = useState([]);
  const [quizzesData, setQuizzesData] = useState([]);
  const [finalsData, setFinalsData] = useState([]);
  const [midsData, setMidsData] = useState([]);
  const [courseDetails, setCourseDetails] = useState({});
  const getCourseDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const course = await getSubCollectionDoc(
        collectionNames.students,
        userId,
        "courses",
        courseId
      );
      setCourseDetails(course);
    } catch (err) {
      console.log(err);
    }
  };

  const getSessionalMarkings = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const marks = await getSessionals(
        collectionNames.students,
        userId,
        courseId
      );
      const assignments = marks.filter((item) => item.type == "Assignments");
      const quizzes = marks.filter((item) => item.type == "Quizzes");
      setQuizzesData(quizzes);
      setAssignmentsData(assignments);
      // console.log(assignments);
      // console.log(quizzes);
    } catch (err) {
      console.log(err);
    } finally {
      setSessionalLoader(false);
    }
  };

  const getFinalsMarkings = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const marks = await getFinals(collectionNames.students, userId, courseId);
      setFinalsData(marks);
      // console.log(marks);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const getMidsMarkings = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const marks = await getMids(collectionNames.students, userId, courseId);
      setMidsData(marks);
      // console.log(marks);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    getSessionalMarkings();
    getFinalsMarkings();
    getMidsMarkings();
    getCourseDetails();
  }, []);

  return (
    <div>
      {sessionalLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <CircularProgress size={30} />
        </div>
      ) : (
        <div>
          <h1 className="course-detail-heading">{courseDetails.courseName}</h1>

          <Grid style={{ marginLeft: "20px" }} container spacing={6}>
            <Grid item xs={12} lg={6} md={6}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="course-detail-sub-heading">
                  Course Code: {courseDetails.courseCode}{" "}
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid style={{ marginLeft: "20px" }} container spacing={6}>
            <Grid item xs={12} lg={6} md={6}>
              <CourseDetailTable title={"Quizzes"} data={quizzesData} />
              <CourseDetailTable title={"Assignments"} data={assignmentsData} />
              <CourseDetailTable title={"Mid Term"} data={midsData} />
              <CourseDetailTable title={"Finals"} data={finalsData} />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
