-- Active: 1713276538061@@127.0.0.1@3306@fds
create database infopet;

use infopet;

create table user(
id int not null auto_increment primary key,
login varchar(25) not null,
senha varchar(30) not null
);