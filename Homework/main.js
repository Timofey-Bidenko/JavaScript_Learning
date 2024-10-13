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

function Group(studensToGroup) {
    this.students = {}
    studensToGroup.forEach(student => {
        this.students[getStudentId(student)] = student
    })
}

const groupProto = {
    addStudent_s(studentsToAdd) {
        studentsToAdd.forEach(student => {
            this.students[getStudentId(student)] = student
        })
    },
    removeStudent_s(studentsToRemove) {
        studentsToRemove.array.forEach(student => {
            delete this.students[getStudentId(student)]
        })
    },
    getStudentsRankingByGradesInCourse(courseName) {
        const toSort = []
        for (const studentId in this.students) {
            toSort.push(this.students[studentId])
        }
        const sorted = toSort.sort((st1, st2) => st2.getAverageGrade(courseName) - st1.getAverageGrade(courseName))
        return sorted.map(student => [getStudentId(student), student.getAverageGrade(courseName), student])
    },
    getStudentsRankingByAttendance() {},
}

Group.prototype = groupProto



// // Create a new student instance
// const student1 = new Student('John', 'Doe', 2002, 'Math')

// // Add some grades and attendances
// student1.addGrade(90, 'Math')
// student1.addGrade(85, 'Math')
// student1.addAttendance(true, 'Math')
// student1.addAttendance(false, 'Math')
// student1.addAttendance(true, 'Math')

// // Check average grade and attendance
// console.log('Average Grade in Math:', student1.getAverageGrade('Math')) // Should print the average of 90 and 85
// console.log('Average Attendance in Math:', student1.getAverageAttendance('Math')) // Should print attendance ratio

// // Add a new course
// student1.addCourse('History')
// student1.addGrade(75, 'History')
// student1.addAttendance(true, 'History')
// student1.addAttendance(true, 'History')

// // Check the student's overall information
// console.log(student1.getAllInformation())

// // Replace a course
// /*student1.replaceCourse('Math', 'Physics')
// console.log('After replacing Math with Physics:', student1.getAllInformation())*/

// // Remove a course
// student1.removeCourse('History')
// console.log('After removing History:', student1.getAllInformation())

// const student2 = new Student('Jane', 'Doe', 2002, 'Math')
// student2.addGrade(50, "Math")

// const student3 = new Student("Andriy", "Kovbasov", 1999, "Math")
// student3.addGrade(73, "Math")
// student3.addGrade(37, "Math")
// student3.addGrade(77, "Math")
// student3.addGrade(33, "Math")

// const mathGroup = new Group([student1, student2, student3])
// console.log(mathGroup)
// console.log(mathGroup.getStudentsRankingByGradesInCourse("Math"))