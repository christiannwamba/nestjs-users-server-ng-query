import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

type user = {
  fullName: string;
  email: string;
  id: string;
};

@Injectable()
export class UsersService {
  users: user[] = [
    {
      fullName: 'sam smith',
      email: 'samsmith@yopmail.com',
      id: '1',
    },
    {
      fullName: 'John Bobo',
      email: 'johnbobo@yopmail.com',
      id: '2',
    },
    {
      fullName: 'Bruce lee',
      email: 'bruucelee@yopmail.com',
      id: '3',
    },
  ];
  create(data: CreateUserDto) {
    this.users.push({
      ...data,
      id: (this.users.length + 1).toString(),
    });
    return true;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((e) => e.id === id);
  }

  remove(id: string) {
    this.users = this.users.filter((e) => e.id !== id);
  }
}
