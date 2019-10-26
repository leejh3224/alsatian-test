import { Test, Setup, Expect } from 'alsatian'
import { Company } from '../../src/db'
import { BaseTest } from '../BaseTest'

export class TestUserGetAll extends BaseTest {
    @Test('get users')
    public async test() {
        const res = await this.app
            .get('/users')

        Expect(res.body.length).toBe(2)
    }

    @Setup
    public async createFixtures() {
        const company = new Company()
        company.name = 'hi'
        company.location = 'dddd'
        company.area1 = '11111'
        company.area2 = '22222'
        company.createdAt = new Date()
        company.updatedAt = new Date()
        company.deletedAt = new Date()
        return Company.save(company)
    }
}