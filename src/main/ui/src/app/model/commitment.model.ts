export interface ICommitment {
  id?: number;
  title?: string;
  startDate?: Date;
  endDate?: Date;
  associationName?: string;
  associationLink?: string;
  description?: string;
}

export class Commitment implements ICommitment {
  constructor(
    public id?: number,
    public title?: string,
    public startDate?: Date,
    public endDate?: Date,
    public associationName?: string,
    public associationLink?: string,
    public description?: string
  ) {}

  deserialize(input: any): this {
    input.id ? (this.id = input.id) : (this.id = null);
    input.title ? (this.title = input.title) : (this.title = null);
    input.startDate ? (this.startDate = input.startDate) : (this.startDate = null);
    input.endDate ? (this.endDate = input.endDate) : (this.endDate = null);
    input.associationName ? (this.associationName = input.associationName) : (this.associationName = null);
    input.associationLink ? (this.associationLink = input.associationLink) : (this.associationLink = null);
    input.description ? (this.description = input.description) : (this.description = null);
    return this;
  }
}
