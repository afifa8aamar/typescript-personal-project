// import {GradebooksModel} from "./school/GradebooksModel";
// import {GroupsModel} from "./school/GroupsModel";
// import {LMSModel} from "./school/LMSModel";
// import {PupilsModel} from "./school/PupilsModel";
// import {SubjectsModel} from "./school/SubjectsModel";
// import {TeachersModel} from "./school/TeachersModel";
// import { teacher_schema } from "./school/schemes/teacher";
// import { pupil_schema } from "./school/schemes/pupil";
// import { subject_schema } from "./school/schemes/subject";

// (async() =>{

// var teacherObj : teacher_schema = 
// {
//     name: {
//       first: 'Pitter',
//       last: "Black"
//     },
//     image: "image",
//     dateOfBirth: "19-12-1965",
//     emails: [
//       {
//         email: "Pitter.black@gmail.com",
//         primary: true
//       }
//     ],
//     phones: [
//       {
//         phone: "+65489563254",
//         primary: true
//       }
//     ],
//     sex: "male", 
//     subjects: [
//       {
//         subject: "Math"
//       }
//     ],
//     description: "A Good teacher",
//   };

//   var teacherObj1 : teacher_schema = 
// {
//     "name": {
//       "first": 'Lisa',
//       "last": "White"
//     },
//     "image": "image",
//     "dateOfBirth": "20-8-1996", 
//     "emails": [
//       {
//         "email": "Lisa.white@gmail.com",
//         "primary": true
//       }
//     ],
//     "sex": "female"
//   };

// var obj : teacher_schema = {
//   "name": {
//     "first": 'Changed',
//     "last": "To this"
//   },
// }


// const teacher = new TeachersModel();
// var teacherid = await teacher.add(teacherObj);
// await teacher.update(teacherid,obj)
// await teacher.read(teacherid)
// var teacherid = await teacher.add(teacherObj);
// result = await teacher.read(teacherid);
// var update = await teacher.update(teacherid, teacherObj1);
// result = await teacher.read(teacherid);
// var deletedteacher = await teacher.remove(teacherid);





// var pupil1 : pupil_schema =  {
//     name: {
//       first: "Pitter",
//       last: "Black"
//     },
//     image: "string",
//     dateOfBirth: "string",
//     phones: [
//       {
//         phone: "string",
//         primary: true
//       }
//     ],
//     sex: 'male', 
//     description: "A Good pupil",
//   }

//   var pupil2 = {
//     "name": {
//       "first": "Changed",
//       "last": "To this"
//     },
//     "image": "string",
//     "dateOfBirth": "string",
//     "phones": [
//       {
//         "phone": "string",
//         "primary": true
//       }
//     ],
//     "sex": 'male', 
//     "description": "A Good pupil",
//   }

// const pupils = new PupilsModel();
// var pupilid = await pupils.add(pupil1);
// var result  : teacher_schema = await pupils.read(pupilid);
// var update =await pupils.update(pupilid, pupil2);
// result =await pupils.read(pupilid);
// var deletedpupils =await pupils.remove(pupilid);





// let history = new SubjectsModel({
//     title: 'History',
//     lessons: 24,
//     description: 'Some text'
// });


// var historyid = history.id

// const lms = new LMSModel();
// //await lms.remove(history);
// await lms.add(history);
// await lms.verify(history);
// await lms.readAll();





// const room = 236;
// const groups = new GroupsModel();
// const groupid = await groups.add(room);
// var groupInfo = await groups.read(groupid);
// await groups.addPupil(groupid, pupil1);
// await groups.addPupil(groupid, pupil2);
// var groupInfo = await groups.read(groupid);
// await groups.update(groupid, {room: 237})
// await groups.read(groupid)
// await groups.readAll()





// const pupilId = pupilid;
// const teacherId = teacherid;
// const gradebooks = new GradebooksModel(groups, teacher, lms);

// const level = 1;
// const gradebookId = await gradebooks.add(level, groupid);

// await gradebooks.clear();
// const teacherrecord = new TeachersModel();
// var teacheridrecord = await teacher.add(teacherObj);
// const record = {
//   pupilId: pupilId,
//   teacherId: teacheridrecord,
//   subjectId: history.id,
//   lesson: 1,
//   mark: 9
// };

// //let recordOut = await gradebooks.addRecord(gradebookId, record);
// const oliver = await gradebooks.read(gradebookId, pupilid);
// const students = gradebooks.readAll(gradebookId); 


// })();