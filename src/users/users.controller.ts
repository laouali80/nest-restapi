import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users') // /users
export class UsersController {
  @Get() // GET /users  or  /users?role=value
  getAllUsers(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get('interns') // GET /users/interns
  getInterns() {
    return [];
  }

  // We must always have routes without parameters before routes with parameters, otherwise the route with parameter will be matched first and the route without parameter will never be reached.

  @Post() // POST /users
  createUser(@Body() user: {}) {
    return user;
  }

  @Get(':id') // GET /users/:id
  getUser(@Param('id') id: string) {
    return `user details for id ${id}`;
  }

  @Patch(':id') // PATCH /users/:id
  updateUser(@Param('id') id: string, @Body() userUpdInfo: {}) {
    return { id, ...userUpdInfo };
  }

  @Delete(':id') // DELETE /users/:id
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
