export interface ITeacherScheme {
    teacherid ?: string;
    name ?: {
      first ?: string;
      last ?: string;
    };
    image ?: string;
    dateOfBirth ?: string;
    emails ?: Array<
      {
        email ?: string;
        primary ?: boolean;
      }>;
    phones ?: Array<
      {
        phone ?: string;
        primary ?: boolean;
      }>;
    sex ?: string;
    subjects ?: Array<
      {
        subject ?: string;
      }>;
    description ?: string;
  }
