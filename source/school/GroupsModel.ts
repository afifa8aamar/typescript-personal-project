import {IGroupSchema} from "./schemes/groups";
import {IPupilSchema} from "./schemes/pupil";
export class GroupsModel {
    public groups: Map<string, IGroupSchema>;
    public pupils: Map<string, IPupilSchema>;
    constructor() {
        this.groups = new Map();
        this.pupils = new Map();
    }
    public async add(room: number, level = 1) {
        const privateID =  () =>  Math.random().toString(36).substr(2, 9);
        const id = privateID();
        const pupils = this.pupils;
        const group: IGroupSchema = {
            id ,
            level ,
            pupils ,
            room ,
        };
        this.groups.set(id, group );
        return id;
    }
    public async addPupil(groupID: string, pupil: IPupilSchema) {
        this.pupils.set(groupID , pupil );
        const pupils = this.pupils;
        let room: number | undefined ;
        let level ;
        const tmpGroup = this.groups.get(groupID) ;
        if (tmpGroup) {
            room = tmpGroup.room as number;
            level = tmpGroup.level as number;
        }
        const group: IGroupSchema = {
            id : groupID,
            level ,
            pupils ,
            room ,
        };
        const oldData: IGroupSchema = this.groups.get(groupID) as IGroupSchema;
        this.groups.set(groupID, {...oldData, ...group});
        return (`Added ${pupil.pupilid} to ${groupID}`);
    }
    public async removePupil(groupID: string, pupilID: string) {
        if (typeof this.groups.get(groupID) === "undefined" ) {
            return `Invalid group id ${groupID}`;
        } else { return this.groups.delete(pupilID); }
    }
    public async read(groupID: string ) {
        const tmpGroup = this.groups.get(groupID);
        if (tmpGroup) {
            const room =  tmpGroup.room as number;
            const group = {
                groupID, room,
            };
            return(group);
        } else { throw new TypeError("Invalid ID"); }
    }
    public async update(currentID: string, obj: IGroupSchema) {
        if ( this.groups.get(currentID) === void 0) {
            throw new TypeError("Can\'t Update");
        } else {
            const current = this.groups.get(currentID);
            this.groups.set(currentID, {...current, ...obj});
            return (currentID);
        }
    }
    public clear() {
        this.groups.clear();
    }
    public readAll() {
        const groups = [this.groups];
        return (groups);
    }

}
