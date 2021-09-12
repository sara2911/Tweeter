
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateUserInput {
    name?: Nullable<string>;
    email: string;
}

export interface CreateTweetInput {
    tweet: string;
    userId: number;
}

export interface FollowersOfuser {
    id: number;
    idUserFollow: number;
    User: User;
    userId: number;
}

export interface Tweet {
    id: number;
    tweet: string;
    User: User;
    userId: number;
}

export interface User {
    id: number;
    name?: Nullable<string>;
    email: string;
    tweets?: Nullable<Tweet[]>;
    followersOfuser?: Nullable<FollowersOfuser[]>;
}

export interface IQuery {
    sayHello(): string | Promise<string>;
    findAllUser(): User[] | Promise<User[]>;
    findOneUser(id: number): User | Promise<User>;
    AllfollowerOfUser(idUserFollow: number): FollowersOfuser[] | Promise<FollowersOfuser[]>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    login(email: string): string | Promise<string>;
    createTweet(createTweetInput: CreateTweetInput): Tweet | Promise<Tweet>;
}

type Nullable<T> = T | null;
