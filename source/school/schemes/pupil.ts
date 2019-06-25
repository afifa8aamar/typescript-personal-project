export interface IPupilSchema {
    pupilid ?: string;
    name ?: {
      first ?: string;
      last ?: string;
    };
    image ?: string;
    dateOfBirth ?: string;
    phones ?: Array<
      {
        phone ?: string;
        primary: boolean;
      }>;
    sex ?: string;
    description ?: string;
  }
