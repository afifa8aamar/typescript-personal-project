import {IGroupSchema} from './schemes/groups';
import {IPupilSchema} from './schemes/pupil';
export class GroupsModel {
    groups: Map<string, IGroupSchema>;
    pupils: Map<string, IPupilSchema>;
    constructor(){
        this.groups = new Map();
        this.pupils = new Map();
    }
    async add (room : number, level =1)
    {
        const privateID =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        var id = privateID();
        var pupils = this.pupils;
        let group : IGroupSchema = 
        {
            id ,
            room ,
            level ,
            pupils
        }
        this.groups.set(id, group );
        return id; 
    }

    async addPupil(groupID :string, pupil : IPupilSchema)
    {
        this.pupils.set(groupID , pupil );
        var pupils = this.pupils;
        let room : number | undefined , level ;
        let tmpGroup = this.groups.get(groupID) ;
        if (tmpGroup) {
            room = tmpGroup.room as number;
            level = tmpGroup.level as number;
        }
        let group : IGroupSchema = {
            id : groupID,
            room ,
            level ,
            pupils 
        };
        let oldData : IGroupSchema = this.groups.get(groupID);
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

    async update (currentID : string ,obj : IGroupSchema)
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
    
    readAll() {
        const groups = [...this.groups];
        return (groups);
    }

}
