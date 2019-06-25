import {pupil_schema} from './schemes/pupil';
export class PupilsModel {
  pupils: Map<string, pupil_schema>;
    constructor(){
        this.pupils = new Map();
    }
    async add (pupil : pupil_schema)
    {
      const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
      var privateID = id();
      this.pupils.set(privateID, pupil);
      return privateID;
    }
    async read (id : string) : Promise<pupil_schema>
    {
      if (!this.pupils.get(id))
          throw new TypeError('Can\'t read')
      else return this.pupils.get(id);
    }

    async update (currentID:string , obj : pupil_schema)
    {
      if ( this.pupils.get(currentID) == void 0)
        throw new TypeError('Can\'t Update');
      else
      {
        let current = this.pupils.get(currentID);
        this.pupils.set(currentID,{...current, ...obj});
      }
        return currentID
    }


    async remove(id : string)
    {
      if ( this.pupils.get(id) == void 0)
        throw new TypeError('Invalid Id');
      else
      {
          this.pupils.delete(id) ;
        return (this.pupils.delete(id) )
      }
    }
}


