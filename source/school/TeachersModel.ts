import {ITeacherScheme} from "./schemes/teacher";
export class TeachersModel {
  public teachers: Map<string, ITeacherScheme>;
    constructor() {
        this.teachers = new Map();
    }

    public async add(teacher: ITeacherScheme ) {
      const privateID =  Math.random().toString(36).substr(2, 9);
      this.teachers.set(privateID, teacher);
      return privateID;
    }
    public async read(id: string): Promise<ITeacherScheme> {
      if (!this.teachers.get(id)) {
        throw new TypeError("Invalid ID");
      } else {
          const teacher: ITeacherScheme = this.teachers.get(id) as ITeacherScheme;
          return teacher ;
      }
    }
    public clear() {
      this.teachers.clear();
    }
    public async remove(id: string) {
        if ( this.teachers.get(id) === void 0) {
          throw new TypeError("Can\'t Update");
        } else { return this.teachers.delete(id); }
    }

    public async update(currentID: string, obj: ITeacherScheme ) {
      if ( this.teachers.get(currentID) === void 0) {
        throw new TypeError("Can\'t Update");
      } else {
        const current = this.teachers.get(currentID);
        this.teachers.set(currentID, {...current, ...obj});
      }
      return currentID;
    }
}
