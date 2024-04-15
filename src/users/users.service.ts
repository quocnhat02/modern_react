import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Nhat 1',
      email: 'nhat1@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Nhat 2',
      email: 'nhat2@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Nhat 3',
      email: 'nhat3@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Nhat 4',
      email: 'nhat4@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'Nhat 5',
      email: 'nhat5@gmail.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    let newUser = {
      id: 1,
      ...createUserDto,
    };

    if (usersByHighestId) {
      newUser = {
        id: usersByHighestId[0].id + 1,
        ...createUserDto,
      };
    }

    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
