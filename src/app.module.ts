import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { config } from 'orm.config';
import { TweetModule } from './tweet/tweet.module';
import { FollowersOfuserModule } from './followers-ofuser/followers-ofuser.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      context: ({ req }) => ({ headers: req.headers }),

      autoSchemaFile: 'Schema.gql',
    }),
    TypeOrmModule.forRoot(config),
    UserModule,
    TweetModule,
    FollowersOfuserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
