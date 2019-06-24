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
        const id =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var privateID = id();
        var pupils = this.pupils;
        let group : group_schema = 
        {
            privateID,
            room ,
            level ,
            pupils
        }
        this.groups.set(privateID, group );
        return privateID; 
    }

    async addPupil(groupID :string, pupilID : string)
    {
        this.pupils.set(groupID,pupilID);
        var pupils = [...this.pupils];
        var room = this.groups.get(groupID).room;
        var level = this.groups.get(groupID).level;
        let group : group_schema= {
            groupID,
            room ,
            level ,
            pupils
        };
        let oldData : group_schema = this.groups.get(groupID);
        this.groups.set(groupID,{...oldData, ...group});
        return (`Added ${pupilID} to ${groupID}`)
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

    async update (currentID : string ,obj : any)
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

    
    readAll()
    {
 
        var groups = [...this.groups]
        return (groups);
    }

}
