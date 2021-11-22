/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Teacher } from "../../redux/teachers/types";
import { TeacherIndex } from "../../urls";

const TeachersList = () => {

  const [teacherList, setTeacherList] = useState<Array<Teacher>>([])

  useEffect(() => {
    axios.get(TeacherIndex)
    .then((res) => setTeacherList(res.data.teachers))
    .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      {teacherList.map((teacher) => (
        <ul key={teacher.id}>
          <li>{teacher.id}</li>
          <li>{teacher.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default TeachersList;
