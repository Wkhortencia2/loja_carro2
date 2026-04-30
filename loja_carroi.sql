create database loja_carro;
use loja_carro;
create table carros (
id int auto_increment primary key,
titulo varchar(100),
preco decimal(9, 2),
descricao text,
marca varchar(50),
modelo varchar(50),
kilometragem int,
data_compra date,
cambio varchar(20)
);

insert into carros (titulo, preco, descricao, marca, modelo, kilometragem, data_compra, cambio) values
('Vendo Gol' , 15000.00,
'Carro em bom estado de conservação' ,
'Volkswagem' , 'Gol' , 250000, 2013-12-12,
'Manual');

select * from carros;

insert into carros (titulo, preco, descricao, marca, modelo, kilometragem, data_compra, cambio) values
('Vendo celta' , 12000.00,
'Carro em bom estado de conservação' ,
'Chevrolet' , 'Celta' , 190000, 2013-12-12,
'Manual');

