export interface IProject {
  id?: number;
  title?: string;
  code?: string;
}

export class Project implements IProject {
  constructor(public id?: number, public title?: string, public code?: string) {}
}
