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
    async read (id : string)
    {
      if (!this.teachers.get(id))
          throw new TypeError("Invalid ID")
      else {
          var teacher = this.teachers.get(id);
          var obj = { id , ...teacher }
          return obj ; 
      }
    }
    async remove(id : string)
    {
        if ( this.teachers.get(id) == void 0)
          throw new TypeError('Can\'t Update');
        else
          return this.teachers.delete(id) ;

    }

    async update (currentID : string, obj : any )
    {
        if ( this.teachers.get(currentID) == void 0)
          throw new TypeError('Can\'t Update');
        else
        {
          let current = this.teachers.get(currentID);
          for ( var i  = 0 ; i < Object.keys(obj).length; i++)
          {
            if(Array.isArray(obj[Object.keys(obj)[i]]))
            {
              for (let i = 0 ; i < obj[Object.keys(obj)[i]].length ; i++)
              {
                this.update(currentID , obj[Object.keys(obj)[i]])
              }
            }
            if (typeof obj[Object.keys(obj)[i]] == 'object')
            {
              this.update(currentID , obj[Object.keys(obj)[i]])
            }
            if (Object.keys(obj)[i] == Object.keys(current)[i])
            {
              this.teachers.set(currentID,{...current, ...obj});
            }
          }
          return currentID;
        }
    }


}
