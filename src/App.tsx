import React, {useState} from 'react';
import './App.css';
import {AppName, Level, Student} from './interface';
import { DisplayData } from "./DisplayData";
import { studentList, coursesList } from "./data";
import { GenericSort } from "./GenericSort";

function App({ name }: AppName) {
    const [student, setStudent] = useState<Student | null>(null);
    const [list, setList] = useState(studentList);

    const addStudent = () => {
        setStudent({
            name: "Chandler",
            surname: "Bing",
            age: 32,
            level: Level.Undergraduate,
        })
    }
    const sortData = () => {
        GenericSort(studentList, "age")
        setList([...studentList])
    }

    return (
        <div className="App">
            <h1>{name}</h1>
            <p><b>{student?.name} {student?.surname}</b></p>
            {
                student?.level === Level.Undergraduate &&
                <p><b>Age: {student.age}</b></p>
            }
            <button onClick={addStudent}>Add Student</button>
            <br />
            <button onClick={sortData}>Sort Data</button>
            <h3>List of students</h3>
            <DisplayData items={list}/>
            <h3>List of courses</h3>
            <DisplayData items={coursesList}/>
        </div>
    );
}
export default App;