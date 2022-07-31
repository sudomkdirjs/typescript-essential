interface Contact1 {
  id: number;
  name: ContactName1;
  birthDate?: Date;
  status: ContactStatus;
}

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new",
}

let primaryContact1: Contact1 = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
  status: ContactStatus.Active,
};

type ContactName1 = string;
