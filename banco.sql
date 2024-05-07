create database infopet;

use infopet;

create table user(
id int not null auto_increment primary key,
login varchar(25) not null,
senha varchar(30) not null
);

insert into user(login,senha) values("adm","adm123");

select * from user;