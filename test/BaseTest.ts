import { Setup, Teardown } from "alsatian"
import { createConnection, getConnection } from "typeorm"
import { Company } from "../src/db"
import { app } from "../src/app"
import request from "supertest"

export abstract class BaseTest {
    protected app = request(app)
    protected abstract async createFixtures(): Promise<any>

    @Setup
    public async baseTestSetup() {
        return createConnection({
            type: "sqlite",
            database: ":memory:",
            entities: [Company],
            synchronize: true,
            logging: false,
        })
    }

    @Teardown
    public async baseTestTeardown() {
        const con = getConnection()
        return con.close()
    }
}