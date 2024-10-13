let studentsEverCreated = 0 // DO NOT MODIFY MANUALLY (let the code do it) NEVER MODIFY IT MANUALLY

function Student(firstName, lastName, birthYear, courseName) {
    if (typeof(firstName) !== "string" || !firstName) return Object.create(null);
    if (typeof(lastName) !== "string" || !lastName) return Object.create(null);
    if (typeof(birthYear) !== "number" || !isFinite(birthYear) || !birthYear) return Object.create(null);
    if (typeof(courseName) !== "string" || !courseName) return Object.create(null);

    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.studentId = studentsEverCreated++
    this.courses = {
        [courseName]: {
            grades: [],
            attendances: [],
        }
    }
}

const studentProto = {
    isInCourse(courseName) {
        return courseName in this.courses
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    addGrade(grade, course) { // number aka grade + course name that the student is currently in are expected
        if (this.isInCourse(course) && typeof(grade) === "number" && isFinite(grade)) {
            this.courses[course].grades.push(grade)
        } else {
            console.error(`${this.getFullName()} is not in ${course} course OR the given grade is not a finite number.`)
        }
    },
    changeGrade(newGrade, course, lessonNumber) {
        if (this.isInCourse(course) && typeof(newGrade) === "number" && isFinite(newGrade)) {
            if (this.courses[course].grades.length > lessonNumber - 1) {
                this.courses[course].grades[lessonNumber - 1] = newGrade
            } else {
                console.error(`Lesson #${lessonNumber} was never assigned before in grades, can not change.`)
            }
        } else {
            console.error(`${this.getFullName()} is not in ${course} course OR the given grade is not a finite number.`)
        }
    },
    addAttendance(attendance, course) { // boolean aka attendance + course name that the student is currently in are expected
        if (this.isInCourse(course) && typeof(attendance) === "boolean") {
            this.courses[course].attendances.push(attendance)
        } else {
            console.error(`${this.getFullName()} is not in ${course} course OR the given attendance is not a true/false.`)
        }
    },
    changeAttendance(newAttendance, course, lessonNumber) { // lesson number is like in real life, where we count lists from 1, not 0
        if (this.isInCourse(course) && typeof(newAttendance) === "boolean") {
            if (this.courses[course].attendances.length > lessonNumber - 1) {
                this.courses[course].attendances[lessonNumber - 1] = newAttendance
            } else {
                console.error(`Lesson #${lessonNumber} was never assigned before in attendances, can not change.`)
            }
        } else {
            console.error(`${this.getFullName()} is not in ${course} course OR the given attendance is not a true/false.`)
        }
    },
    getAverageGrade(course) { // course name that the student is currently in is expected
        if (this.isInCourse(course)) {
            return this.courses[course].grades.length > 0 ? this.courses[course].grades.reduce((totalGrade, currentGrade) => totalGrade + currentGrade, 0) / this.courses[course].grades.length : 0
        } else {
            console.error(`${this.getFullName()} is not in ${course} course, returning average grade of -1.`)
            return -1
        }
    },
    getAverageAttendance(course) { // course name that the student is currently in is expected
        if (this.isInCourse(course)) {
            return this.courses[course].attendances.length > 0 ? `${parseInt(this.getCompletedLessonsAmount(course) / this.courses[course].attendances.length * 100)}%` : "0%"
        } else {
            console.error(`${this.getFullName()} is not in ${course} course, returning average attendance of -100%.`)
            return "-100%"
        }
    },
    getCompletedLessonsAmount(course) { // course name that the student is currently in is expected
        if (this.isInCourse(course)) {
            return this.courses[course].attendances.length > 0 ? this.courses[course].attendances.reduce((totalAttendance, currentAttendance) => totalAttendance + (currentAttendance ? 1 : 0), 0) : 0
        } else {
            return 0
        }
    },
    replaceCourse(currentCourse, newCourse) { // course name that the student is currently in + new course name as string are expected
        if (this.isInCourse(currentCourse)) {
            this.removeCourse(currentCourse)
            this.addCourse(newCourse)
        } else {
            console.error(`${this.getFullName()} is not in ${currentCourse} course, can not replace with ${newCourse}.`)
        }
    },
    addCourse(courseName) { // course name that the student is currently in is expected
        if (!this.isInCourse(courseName)) {
            this.courses[courseName] = {
                grades: [],
                attendances: [],
            }
        } else {
            console.error(`${this.getFullName()} is already in a course named "${courseName}", can not create again.`)
        }
    },
    removeCourse(courseName) { // course name that the student is currently in is expected
        if (this.isInCourse(courseName)) {
            console.warn(`Removing course ${courseName} for ${this.getFullName()}. This deletes all grades and attendance data related to this course.`)
            delete this.courses[courseName]
        } else {
            console.error(`${this.getFullName()} is already not in a course named "${courseName}", can not remove what doesnt exist.`)
        }
    },
    getAllInformation() {
        const result = {
            ["Student full name"]: this.getFullName(),
            ["Student birth year"]: this.birthYear,
            ["StudentId"]: this.studentId,
            ["Students current courses"]: {}
        }

        for (const cName in this.courses) {
            result["Students current courses"][cName] = {
                Grades: this.courses[cName].grades,
                Attendance: this.courses[cName].attendances,
                ["Average grade"]: this.getAverageGrade(cName),
                ["Average attendance"]: this.getAverageAttendance(cName),
                ["Completed lessons amount"]: this.getCompletedLessonsAmount(cName)
            }
        }

        return result
    },
}

Student.prototype = studentProto

function getStudentId(student) {
    return student.studentId
}

function isStudent(student) {
    return student instanceof Student
}

function Group(studentsToGroup) { // array of student class instances is expected
    this.studentList = {}
    if (Array.isArray(studentsToGroup) && studentsToGroup.length > 0) {
        studentsToGroup.forEach(student => {
            if (isStudent(student)) {
                this.studentList[getStudentId(student)] = student
            } else {
                console.error(`Given student: ${student}; Is not a Student Class Instance`)
            }
        })
    }
}

const groupProto = {
    addStudent_s(studentsToAdd) { // array of student class instances is expected
        if (!Array.isArray(studentsToAdd) || studentsToAdd.length < 1) return;

        studentsToAdd.forEach(student => {
            if (isStudent(student)) {
                if (getStudentId(student) in this.studentList) {
                    console.warn(`${student.getFullName()} studentId matches with ${this.studentList[getStudentId(student)].getFullName()} studentId (studentId: ${getStudentId(student)}).
                    Did not add ${student.getFullName()}, student might already be in there.`)
                } else {
                    this.studentList[getStudentId(student)] = student
                }
            } else {
                console.error(`Given student: ${student}; Is not a Student Class Instance`)
            }
        })
    },
    removeStudent_s(studentsToRemove) { // array of student class instances is expected
        if (!Array.isArray(studentsToRemove) || studentsToRemove.length < 1) return;

        studentsToRemove.forEach(student => {
            if (getStudentId(student) in this.studentList) {
                delete this.studentList[getStudentId(student)]
            }
        })
    },
    getStudentsRankingByGradesInCourse(courseName) { // name of the course where all students of the group have at least one grade is expected
        return Object.values(this.studentList)
        .sort((st1, st2) => parseFloat(st2.getAverageGrade(courseName)) - parseFloat(st1.getAverageGrade(courseName)))
        .map(student => [student.getFullName(), student.getAverageGrade(courseName)])
    },
    getStudentsRankingByAttendanceInCourse(courseName) { // name of the course where all students of the group have at least one attendance is expected
        return Object.values(this.studentList)
        .sort((st1, st2) => parseFloat(st2.getAverageAttendance(courseName)) - parseFloat(st1.getAverageAttendance(courseName)))
        .map(student => [student.getFullName(), student.getAverageAttendance(courseName)])
    },
}

Group.prototype = groupProto


// TESTING //
// Create students with valid inputs
const student1 = new Student("John", "Doe", 2000, "Math")
const student2 = new Student("Jane", "Doe", 2001, "Physics")
const student3 = new Student("Bob", "Smith", 2002, "Chemistry")

// Stress Testing ⤵️⤵️⤵️
// // 1. Try adding a grade to an invalid course (should not exist)
// console.log("1. Adding grade to invalid course:")
// student1.addGrade(95, "History") // History doesn't exist

// // 2. Get ranking by grades where some students have no grades for a course
// console.log("2. Ranking students by grades (missing grades in Math):")
// const group = new Group([student1, student2, student3])
// console.log(group.getStudentsRankingByGradesInCourse("Math")) // No grades yet

// // 3. Try changing attendance for a non-existent lesson number
// console.log("3. Changing attendance for invalid lesson number:")
// student1.addAttendance(true, "Math")
// student1.changeAttendance(false, "Math", 3) // No 3rd lesson exists

// // 4. Try adding the same student multiple times to a group
// console.log("4. Adding duplicate students:")
// group.addStudent_s([student1, student1]) // Should not allow duplicates
// console.log(group)

// // 5. Directly modify `studentsEverCreated` and create another student
// console.log("5. Modify global studentsEverCreated:")
// studentsEverCreated = 999 // Shouldn't be allowed
// const student4 = new Student("Alice", "Johnson", 2003, "Biology")
// console.log("student4.studentId:", student4.studentId) // Should print 999
// console.warn("studentsEverCreated variable should not be modified like this, modified here for testing purposes");

// // 6. Try sorting attendance when some students have no attendance in a course
// console.log("6. Ranking students by attendance (missing attendances in Physics):")
// student2.addAttendance(true, "Physics")
// console.log(group.getStudentsRankingByAttendanceInCourse("Physics"))

// // 7. Test incomplete student creation with invalid inputs
// console.log("7. Creating incomplete student:")
// const student5 = new Student("", "Johnson", 2004, "Math") // Invalid first name
// console.log(student5) // Should not create a valid student
// // the "return Object.create(null)" prevents the incomplete student from accesing Student prototype 
// console.log(student5.getAllInformation())