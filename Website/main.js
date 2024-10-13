function Student(firstName, lastName, birthYear, courseName) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.courses = {
        [courseName]: {
            grades: [],
            attendances: [],
        }
    }
}

const studentProto = {
    addGrade(grade, course) {
        this.courses[course].grades.push(grade)
    },
    addAttendance(attendance, course) {
        this.courses[course].attendances.push(attendance)
    },
    getAverageGrade(course) {
        console.log(course, this.courses[course])
        return this.courses[course].grades.length === 1 ? this.courses[course].grades[0] : this.courses[course].grades.reduce((totalGrade, currentGrade) => totalGrade + currentGrade, 0) / this.courses[course].grades.length
    },
    getAverageAttendance(course) {
        return `${parseInt(this.getCompletedLessonsList(course) / this.courses[course].attendances.length * 100)}%`
    },
    getCompletedLessonsList(course) {
        return this.courses[course].attendances.reduce((totalAttendance, currentAttendance) => totalAttendance + (currentAttendance ? 1 : 0), 0)
    },
    replaceCourse(currentCourse, newCourse) {
        this.removeCourse(currentCourse)
        this.addCourse(newCourse)
    },
    addCourse(courseName) {
        this.courses[courseName] = {
            grades: [],
            attendances: [],
        }
    },
    removeCourse(courseName) {
        delete this.courses[courseName]
    },
    getAllInformation() {
        const result = {
            ["Student full name"]: `${this.firstName} ${this.lastName}`,
            ["Student birth year"]: this.birthYear,
            ["Students current courses"]: {
                
            }
        }

        for (const cName in this.courses) {
            result["Students current courses"][cName] = {
                Grades: this.courses[cName].grades,
                Attendance: this.courses[cName].attendances,
                ["Average grade"]: this.getAverageGrade(cName),
                ["Average attendance"]: this.getAverageAttendance(cName),
                ["Completed lessons amount"]: this.getCompletedLessonsList(cName)
            }
        }

        return result
    },
}

Student.prototype = studentProto

function getStudentId(student) {
    return `${student.firstName}-${student.lastName}-${student.birthYear}`
}

function Group(groupName, studensToGroup) {
    this.students = {}
    studensToGroup.forEach(student => {
        this.students[getStudentId(student)] = student
    })
}



const addGroupBtn = document.getElementById("addGroupButton")
const manageGroup = document.getElementById("manageGroup")

addGroupBtn.addEventListener("click", function() {
    console.log("Creating new group");
    manageGroup.classList.remove("none")
})