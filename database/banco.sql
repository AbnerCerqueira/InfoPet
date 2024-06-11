create database infopet;

use infopet;

create table user(
    id_user int primary key auto_increment,
    username varchar(100) not null,
    senha varchar(100) not null,
    nomedono varchar(100),
    telefone varchar(100),
    endereco varchar(100),
    cidade varchar(100),
    cep varchar(100)
);

create table pet(
    id_pet int primary key auto_increment,
    diretorio_foto_pet varchar(200),
    nome varchar(100),
    especie varchar(100),
    raca varchar(100),
    cor varchar(100),
    idade varchar(100),
    sexo varchar(100),
    peso varchar(100),
    alergia varchar(100),
    medicamento varchar(100),
    vacina varchar(100),
    id_user int,
    foreign key(id_user) references user(id_user)
);

-- insert de exemplo para usar

insert into user(username, senha) values('abner', '123');

insert into pet(
    diretorio_foto_pet,
    nome,
    especie,
    raca,
    cor,
    idade,
    sexo,
    id_user
    ) values(
    '/img/uploads/lupidoidinho.jpg',
    'Lupi',
    'gato',
    'gato',
    'gato',
    '3',
    'Macho',
    1
);