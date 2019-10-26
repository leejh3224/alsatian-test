import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import { Company } from "../db";
import { Transaction, TransactionManager, EntityManager } from "typeorm";

@Controller()
export class UserController {

    @Get("/users")
    async getAll() {
        const company = new Company()
        company.name = 'hi'
        company.location = 'dddd'
        company.area1 = '11111'
        company.area2 = '22222'
        company.createdAt = new Date()
        company.updatedAt = new Date()
        company.deletedAt = new Date()
        await Company.save(company)
        return Company.find()
    }

    @Transaction()
    @Get("/users/:id")
    async getOne(
      @Param("id") id: number,
      @TransactionManager() manager?: EntityManager
    ) {
      const company = new Company()
      company.name = 'hi'
      company.location = 'dddd'
      company.area1 = '11111'
      company.area2 = '22222'
      company.createdAt = new Date()
      company.updatedAt = new Date()
      company.deletedAt = new Date()
      await manager!.getRepository(Company).save(company)
      return "This action returns user #" + id;
    }

    @Post("/users")
    post(@Body() user: any) {
       return "Saving user...";
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
       return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
       return "Removing user...";
    }
}