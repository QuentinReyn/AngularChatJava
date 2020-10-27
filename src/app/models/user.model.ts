import { Account } from './account.model';
import { Deserializable } from './deserializable.model';
export class User implements Deserializable {
  public account: Account;
  public currentStatus: string;
  public server: string;

  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
    Object.assign(this, input);

    this.account = input.account.map(account => new Account().deserialize(account));

    return this;
  }
}
