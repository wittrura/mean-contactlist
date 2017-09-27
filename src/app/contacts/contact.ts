export class Contact {
  _id?: string; // left optional because this is created automatically by Mongo
  name: string;
  email: string;
  phone: {
    mobile: string;
    work: string;
  };
}
