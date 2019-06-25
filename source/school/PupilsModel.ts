import { IPupilSchema } from "./schemes/pupil";
export class PupilsModel {
  public pupils: Map<string, IPupilSchema>;
  constructor() {
    this.pupils = new Map();
  }
  public async add(pupil: IPupilSchema) {
    const id = () => Math.random().toString(36).substr(2, 9);
    const privateID = id();
    this.pupils.set(privateID, pupil);
    return privateID;
  }
  public async read(id: string): Promise<IPupilSchema> {
    if (!this.pupils.get(id)) {
      throw new TypeError("Can\'t read");
    } else { return this.pupils.get(id) as IPupilSchema; }
  }

  public async update(currentID: string, obj: IPupilSchema) {
    if (this.pupils.get(currentID) === void 0) {
      throw new TypeError("Can\'t Update");
    } else {
      const current = this.pupils.get(currentID);
      this.pupils.set(currentID, { ...current, ...obj });
    }
    return currentID;
  }
  public async remove(id: string) {
    if (this.pupils.get(id) === void 0) {
      throw new TypeError("Invalid Id");
    } else {
      this.pupils.delete(id);
      return (this.pupils.delete(id));
    }
  }
}
