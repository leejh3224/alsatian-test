import { Entity, PrimaryGeneratedColumn, Column, createConnection, BaseEntity } from 'typeorm'

@Entity()
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    location!: string

    @Column()
    area1!: string

    @Column()
    area2!: string

    @Column()
    createdAt!: Date

    @Column()
    updatedAt!: Date

    @Column()
    deletedAt!: Date
}

export const createDB = async () => {
    return createConnection({
        type: "sqlite",
        database: ":memory:",
        entities: [Company],
        synchronize: true,
        logging: process.env.NODE_ENV !== 'test',
    })
}