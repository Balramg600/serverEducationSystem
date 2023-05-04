let express=require('express');
let app=express();
app.use(express.json());
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD'
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
const port= process.env.PORT || 2411;
app.listen(port, ()=>console.log(`Node app listening on port ${port}!`));

customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
  courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
  faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
  classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
  students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];


  app.post("/login", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log(req.body);

    var cust = customers.find(function(item) {
      return item.email === email && item.password === password;
    });
    console.log(cust);
    var custRec= {
        name:cust.name,
      email: cust.email,
      role: cust.role
    }
    res.send(custRec);
  });

  app.post("/register", function(req, res) {
    const cust = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    customers.unshift(cust);
    var customerRes= {
      name: req.body.name,
      email:req.body.email,
      role: req.body.role,
    }
    res.send(customerRes);
  });

  app.get('/getStudentNames', (req, res)=>{
    let stNames=students.map(n=>n.name);
    console.log(stNames);
    res.send(stNames)
  })

  app.get('/getFacultyNames', (req, res)=>{
    let faNames=faculties.map(n=>n.name);
    console.log(faNames);
    res.send(faNames)
  })

  app.get('/getCourses', (req, res)=>{
    res.send(courses);
  })

  app.get('/getStudents', (req, res)=>{
    let page=+req.query.page;
    let course=req.query.course;
    let courses=course?course.split(','):'';
    let stRes=courses?students.filter(n=>{
        for(let i=0;i<courses.length;i++){
            if(n.courses.includes(courses[i])) return n;
        }
    }):students;
    // console.log(stRes)
    let result=pagination(stRes, page);
    // res.send(result);
    res.json({
        page: parseInt(req.query.page),
        items: result,
        totalItems: result.length,
        totalNum:stRes.length
      })
  })

  app.get('/getFaculties', (req, res)=>{
    let page=+req.query.page;
    let course=req.query.course;
    let courses=course?course.split(','):'';
    let stRes=courses?faculties.filter(n=>{
        for(let i=0;i<courses.length;i++){
            if(n.courses.includes(courses[i])) return n;
        }
    }):faculties;
    // console.log(stRes)
    let result=pagination(stRes, page);
    // res.send(result);
    res.json({
        page: parseInt(req.query.page),
        items: result,
        totalItems: result.length,
        totalNum:stRes.length
      })
  })
  app.get('/coursesName', (req, res)=>{
    let courseName=courses.map(n=>n.name);
    res.send(courseName);
  })

  app.put('/putCourse', (req, res)=>{
    index=courses.findIndex(n=>n.courseId==req.body.courseId);
    courses[index]=req.body;
    for(let i=0;i<students.length;i++){
      if(req.body.students.includes(students[i].name)){
        let ind=students[i].courses.findIndex(n=>n==req.body.name)
        if(ind<0)students[i].courses.push(req.body.name);
      }
    }
    for(let i=0;i<faculties.length;i++){
      if(req.body.faculty.includes(faculties[i].name)){
        let ind=faculties[i].courses.findIndex(n=>n==req.body.name)
        if(ind<0)faculties[i].courses.push(req.body.name);
      }
    }
    res.send(req.body);
  })
//////////////////////////////////////////////////////////////////////////
  app.get('/getStudentDetails/:name',(req, res)=>{
    let name=req.params.name;
    let student=students.find(n=>n.name==name);
    let st={id:student.id, name:student.name, dob:student.dob, gender:student.gender, about:student.about};
    res.send(st);
  })

  app.post('/postStudentDetails', (req, res)=>{
    let maxid=students.reduce((acc, curr)=>curr.id>acc?curr.id:acc, 0);
    let student=req.body;
    student.id=maxid+1;
    student.courses=[];
    students.push(student);
    res.send(student);
  })

  // app.get('/getStudentClass/:name',(req, res)=>{
  //   let name=req.params.name;
  //   let student=students.find(n=>n.name==name);
  //   let st={id:student.id, name:student.name, dob:student.dob, gender:student.gender, about:student.about};
  //   res.send(st);
  // })

  app.get('/getStudentClass/:name', (req, res)=>{
    let name=req.params.name;
    let student=students.find(n=>n.name==name);
    let classSt=classes.filter(n=>student.courses.includes(n.course));
    res.send(classSt);
  })

  app.get('/getStudentCourse/:name', (req, res)=>{
    let name=req.params.name;
    let student=students.find(n=>n.name==name);
    let courseSt=courses.filter(n=>student.courses.includes(n.name));
    let courseList=courseSt.map(n=>({courseId:n.courseId ,name:n.name, code:n.code, description:n.description}))
    res.send(courseList);
  })

  ///////////////////////////////////////////////////////////////////////////////

  app.get('/getFacultyCourse/:name', (req, res)=>{
    let name=req.params.name;
    let faculty=faculties.find(n=>n.name==name);
    let courseSt=courses.filter(n=>faculty.courses.includes(n.name));
    let courseList=courseSt.map(n=>({courseId:n.courseId ,name:n.name, code:n.code, description:n.description}))
    // console.log(name);
    res.send(courseList);
  })
  app.get('/facultyCoursesByName/:name', (req, res)=>{
    let name=req.params.name;
    let faculty=faculties.find(n=>n.name==name);
    res.send(faculty.courses);
  })

  app.post('/postClass', (req, res)=>{
    let className=req.body;
    let maxid=classes.reduce((acc, curr)=>curr.classId>acc?curr.classId:acc, 0);
    className.classId=maxid+1;
    classes.push(className);
    // console.log(classes);
    res.send(className);
  })

  app.put('/postClass/:classId', (req, res)=>{
    let classId=req.params.classId;
    let schedClass=classes.find(n=>n.classId==classId);
    let sClass=req.body;
    schedClass.course=sClass.course;
    schedClass.time=sClass.time;
    schedClass.endTime=sClass.endTime;
    schedClass.topic=sClass.topic;
    res.send(schedClass);
  })

  app.get(`/getFacultyClass/:facultyName`, (req, res)=>{
    let facultyName=req.params.facultyName;
    let faculty=faculties.find(n=>n.name==facultyName);
    let classFa=classes.filter(n=>faculty.courses.includes(n.course));
    res.send(classFa);
  })

  app.get('/getclassById/:classId', (req, res)=>{
    let classId=req.params.classId;
    let classFa=classes.find(n=>n.classId==classId);
    res.send(classFa);
  })

  function pagination(obj, page) {
    const postCount = obj.length;
    var resArr = obj;
    resArr = resArr.slice(page * 3 - 3, page * 3);
    return resArr;
  }