import {group_schema} from './schemes/groups';
import {pupil_schema} from './schemes/pupil';
export class GroupsModel {
    groups: Map<string, group_schema>;
    pupils: Map<string, pupil_schema>;
    constructor(){
        this.groups = new Map();
        this.pupils = new Map();
    }
    async add (room : number, level =1)
    {
        const privateID =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var id = privateID();
        var pupils = this.pupils;
        let group : group_schema = 
        {
            id ,
            room ,
            level ,
            pupils
        }
        this.groups.set(id, group );
        return id; 
    }

    async addPupil(groupID :string, pupil : pupil_schema)
    {
        this.pupils.set(groupID , pupil );
        var pupils = this.pupils;
        var room = this.groups.get(groupID).room;
        var level = this.groups.get(groupID).level;
        let group : group_schema = {
            id : groupID,
            room ,
            level ,
            pupils 
        };
        let oldData : group_schema = this.groups.get(groupID);
        this.groups.set(groupID,{...oldData, ...group});
        return (`Added ${pupil.pupilid} to ${groupID}`)
    }
    async removePupil(groupID:string , pupilID : string)
    {
        if (typeof this.groups.get(groupID) == 'undefined' )
            return `Invalid group id ${groupID}`
        else return this.groups.delete(pupilID);
    }
    async read (groupID : string )
    {
        if (typeof this.groups.get(groupID) !== 'undefined')
        {
            var room =  this.groups.get(groupID).room;
            var group = {
                groupID, room
            }
            return(group);

        }
        else throw new TypeError('Invalid ID');
    }

    async update (currentID : string ,obj : group_schema)
    {
        if ( this.groups.get(currentID) == void 0)
        {
            throw new TypeError('Can\'t Update');
        }
        else
        {
            let current = this.groups.get(currentID);
            this.groups.set(currentID,{...current, ...obj});
            return (currentID)
        }
    }

    clear ()
    {
        this.groups.clear();
    }
    
    readAll()
    {
 
        var groups = [...this.groups]
        return (groups);
    }

}
