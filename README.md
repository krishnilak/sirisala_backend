# sirisala_backend


-------------------------------------
START
-------------------------------------

npm init
npm install cors mysql express --save
node start server.js


-------------------------------------
SQL SCRIPTS 
-------------------------------------

drop database sirisala;

create database sirisala;
use sirisala;

create table items (
item_id int primary key not null auto_increment,
item_name varchar(50),
item_desc varchar(225),
item_price varchar(20), 
item_quantity int, 
includes varchar(100), 
item_image_url varchar(200)
);

create table user(
user_id varchar(30) primary key not null 
);

create table cart(
cart_id int primary key not null auto_increment, 
user_id varchar(30),
cart_status varchar(30),
cost varchar(20),
FOREIGN KEY (user_id) references user(user_id)
)

create table cart_item(
cart_item_id int primary key not null auto_increment, 
cart_id int, 
item_id int, 
quantity int,
FOREIGN KEY (cart_id) references cart(cart_id),
FOREIGN KEY (item_id) references items(item_id)
)

insert into items 
(item_name, item_desc, item_price, item_quantity, includes, item_image_url) 
values 
("ITM001", "A new item", "LKR 10000", 3, "-", "");

UPDATE items SET item_image_url = 'https://drive.google.com/drive/folders/18Kl3-0cGPyvIKDnwMaIxz6r0UwpBnpCy' WHERE item_id=4;

select * from items;

update items set item_price = "160" where item_id=1;
update items set item_price = "24400" where item_id=2;
update items set item_price = "3800" where item_id=3;
update items set item_price = "800" where item_id=4;
update items set item_price = "650" where item_id=5;
update items set item_price = "4300" where item_id=6;

update items set item_name = "Apple thread" where item_id=1;
update items set item_name = "Sequince Saree" where item_id=2;
update items set item_name = "Sequince Saree Blouse Material" where item_id=3;
update items set item_name = "Lace Material" where item_id=4;
update items set item_name = "Paper Print Chiffon" where item_id=5;
update items set item_name = "Ready Made Saree Blouse" where item_id=6;

update items set item_desc = "Cotton thread made in Sri Lanka, 500m " where item_id=1;
update items set item_desc = "A Handmade Sequince Saree which makes an elegant you" where item_id=2;
update items set item_desc = "Sequince mesh saree blouse material, 45 inch width" where item_id=3;
update items set item_desc = "Lace Material, 45 inch width, flower design" where item_id=4;
update items set item_desc = "Paper article print Chiffon, 45 inch width, off white colour " where item_id=5;
update items set item_desc = "Ready Made Saree Blouse with Sequince mesh material" where item_id=6;


update items set item_image_url = "https://thumbs2.imgbox.com/a3/0d/0qKR3zW4_t.jpeg" where item_id=1;
update items set item_image_url = "https://thumbs2.imgbox.com/a4/ae/gXjHzr4q_t.jpeg" where item_id=2;
update items set item_image_url = "https://thumbs2.imgbox.com/9d/5b/cNQqllxZ_t.jpeg" where item_id=3;
update items set item_image_url = "https://thumbs2.imgbox.com/ea/94/ys7sQVXv_t.jpeg" where item_id=4;
update items set item_image_url = "https://thumbs2.imgbox.com/f9/13/OLxpImgR_t.jpeg" where item_id=5;
update items set item_image_url = "https://thumbs2.imgbox.com/db/ac/2PL4YO5Z_t.jpeg" where item_id=6;
update items set item_image_url = "https://thumbs2.imgbox.com/d6/ff/nVUO4el4_t.jpeg" where item_id=7;


select * from items;

delete from items where item_id=9 ;
