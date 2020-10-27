import { Deserializable } from './deserializable.model';
import { Message } from './message.model';
import { User } from './user.model';

export class Chatroom implements Deserializable{
   public id: number;
   public name: string;
   public owner: User;
   public messages: Message[];

   deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
    Object.assign(this, input);

    this.owner = input.owner.map(owner => new User().deserialize(owner));
    this.messages = input.messages.map(message => new Message().deserialize(message));

    return this;
  }
}
