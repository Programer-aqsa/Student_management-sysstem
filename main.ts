class School {
    name:string;
    students: Student[]=[];
    teachers: Teacher[]=[];

    addStudent(stdObj: Student){
        this.students.push(stdObj)
    }
    addTeacher(teObj: Teacher){
        this.teachers.push(teObj)
    }
    constructor(name:string){
        this.name = name;
    }
}

class Student{
    name:string;
    age:number;
    schoolName:string;
    constructor(name:string,age:number,schoolName:string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}

class Teacher extends Student{}
   

// school
let school1 = new School("Happy place");
let school2 = new School("Sarfaraz");
let school3 = new School("Shama");

//  Student
let s1 = new Student("Samina",16,school1.name)
let s2 = new Student("Sana",15,school2.name)
let s3 = new Student("Saba",14,school3.name)

// Teacher
let t1 = new Teacher("Hina",23,school1.name)
let t2 = new Teacher("Hira",22,school2.name)
let t3 = new Teacher("Faha",24,school3.name)

// Student
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);

// Teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);

// Teacher
console.log(t1);
console.log(t2);
console.log(t3);

// school
console.log(school1);
console.log(school2);
console.log(school3);







