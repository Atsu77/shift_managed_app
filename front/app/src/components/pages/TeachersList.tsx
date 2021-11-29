/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TeacherIndex } from "../../urls";
import { TeacherType } from "../../redux/users/types";

const TeachersList = () => {

  const [teacherList, setTeacherList] = useState<Array<TeacherType>>([])

  useEffect(() => {
    axios.get(TeacherIndex)
    .then((res) => setTeacherList(res.data.teachers))
    .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      {teacherList.map((teacher) => (
        <ul key={teacher.id}>
          <li style={{color:" #fff"}}>{teacher.id}</li>
          <li style={{color:" #fff"}}>{teacher.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default TeachersList;
