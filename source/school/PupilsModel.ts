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
    async read (id : string)
    {
      if (!this.pupils.get(id))
          throw new TypeError('Can\'t read')
      else {
          var pupils = this.pupils.get(id);
          var obj = { id , ...pupils }
          return (obj);
      }
    }

    async update (currentID:string , obj : any)
    {
      if ( this.pupils.get(currentID) == void 0)
        throw new TypeError('Can\'t Update');
      else
      {
        let current = this.pupils.get(currentID);
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
            this.pupils.set(currentID,{...current, ...obj});
          }
        }
        return currentID
      }
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


