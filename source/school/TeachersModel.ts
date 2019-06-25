import {teacher_schema} from './schemes/teacher';
export class TeachersModel {
  teachers: Map<string, teacher_schema>;
    constructor(){
        this.teachers = new Map();
    }

    async add (teacher: teacher_schema )
    {
      var privateID = '_' + Math.random().toString(36).substr(2, 9);
      this.teachers.set(privateID, teacher);
      return privateID;
    }
    async read (id : string):Promise<teacher_schema>
    {
      if (!this.teachers.get(id))
          throw new TypeError("Invalid ID")
      else {
          var teacher:teacher_schema = this.teachers.get(id);
          return teacher ; 
      }
    }
    clear ()
    {
      this.teachers.clear();
    }
    async remove(id : string)
    {
        if ( this.teachers.get(id) == void 0)
          throw new TypeError('Can\'t Update');
        else
          return this.teachers.delete(id) ;

    }

    async update (currentID : string, obj : teacher_schema  )
    {
      if ( this.teachers.get(currentID) == void 0)
        throw new TypeError('Can\'t Update');
      else{
        let current = this.teachers.get(currentID);
        this.teachers.set(currentID,{...current, ...obj});
      }
        return currentID;
    }


}
