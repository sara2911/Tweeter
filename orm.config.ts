import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'Tweeter',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
