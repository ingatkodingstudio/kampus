import { Module } from "@nestjs/common";
import typeOrmModule from "./database.config";

@Module({
    imports: [typeOrmModule]
})
export class DatabaseModule {}