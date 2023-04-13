import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm"

const config: TypeOrmModuleOptions = {
    database: 'kampus',
    type: 'sqlite'
}

const typeOrmModule = TypeOrmModule.forRoot(config)

export default typeOrmModule;