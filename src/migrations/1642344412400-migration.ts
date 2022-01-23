import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1642344412400 implements MigrationInterface {
  name = 'migration1642344412400';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "boards" ("id" character varying NOT NULL, "title" character varying NOT NULL, "columns" json, CONSTRAINT "PK_606923b0b068ef262dfdcd18f44" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" character varying NOT NULL, "title" character varying NOT NULL, "order" integer, "description" character varying NOT NULL, "userId" character varying, "boardId" character varying, "columnId" character varying, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" character varying NOT NULL, "name" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `INSERT INTO "user"  VALUES ('8926485','admin', 'admin', 'admin')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "tasks"`);
    await queryRunner.query(`DROP TABLE "boards"`);
  }
}
