import { Deserializable } from './deserializable.model';
export class Account implements Deserializable {
  public id: number;
  public username: string;
  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
    Object.assign(this, input);
    return this;
  }
}
