export interface teacher_schema {
    teacherid ? : string;
    name ?: {
      first ? : String,
      last ? : String
    },
    image ? : String,
    dateOfBirth ? : String,
    emails ? : 
      {
        email ?: String,
        primary ?: Boolean
      }[],
    phones ? : 
      {
        phone ? : String,
        primary ? : Boolean
      }[],
    sex ? : String,
    subjects ? : 
      {
        subject ? : String
      }[],
    description ?: String,
  }
  
  
  