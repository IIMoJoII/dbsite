const {Client} = require('pg')
require('dotenv').config();

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'hostelCRM'
})

client.connect()


/*client.query(`SELECT * FROM rooms`, (err, res) => {
    if(!err) {
        console.log('rows: ', res.rows)
    } else {
        console.log(err.message)
    }

    client.end()
})*/

client.query(`CREATE TABLE corp (
            corp_num serial,
            stars int not null,
            floors int not null,
            rooms_total int not null,
            rooms_per_floor int not null,
            daily_cleaning boolean not null,
            dry_cleaning boolean not null,
            laundry boolean not null,
            bars boolean not null,
            restaurant boolean not null,
            canteen boolean not null,
            billiards boolean not null,
            sauna boolean not null,
            pool boolean not null,
            tennis boolean not null,
            check (stars >= 1 and stars <= 5 and rooms_total > 0 and rooms_per_floor > 0)
)`)


client.query(`INSERT INTO corp (
                  stars, 
                  floors, 
                  rooms_total, 
                  rooms_per_floor, 
                  daily_cleaning, 
                  dry_cleaning, 
                  laundry, 
                  bars, 
                  restaurant, 
                  canteen, 
                  billiards, 
                  sauna, 
                  pool, 
                  tennis) VALUES (
                                  1, 
                                  12, 
                                  120, 
                                  10, 
                                  true, 
                                  true, 
                                  true, 
                                  true, 
                                  true, 
                                  true, 
                                  true, 
                                  true, 
                                  true, 
                                  true)`)

client.query(`CREATE TABLE room (
            id serial,
            price real not null,
            number int not null,
            room_suite int not null,
            rooms int not null,
            floor int not null,
            grade real,
            foreign key (corp_num) references corp(corp_num),
            overhead_costs real not null,
            check(price > 0 and number > 0 and room_suite > 0 and rooms > 0 and grade >= 1 and grade <= 5 and overhead_costs > 0)
)`)

client.query(`CREATE TABLE comp (
            comp_id char(6) primary,
            name varchar(100) not null,
            description varchar(1000),
            unique_discount int not null,
            phone char(11) not null,
            email varchar(40) not null,
            bank_account char(20) not null
)`)

client.query(`CREATE TABLE booking (
            id serial,
            foreign key (room_id) references room(id),
            num_of_people int not null,
            booking_date date not null,
            booking_person char(6) not null,
            arrival_date date not null,
            departure_date date not null,
            prepayment real not null,
            num_of_book int not null,
            check (num_of_people > 0 and arrival_date <= booking_date and departure_date > arrival_date and prepayment > 0 and num_of_book > 0)
)`)

client.query(`CREATE TABLE guest (
            id char(6) primary,
            name varchar(100) not null,
            phone varchar(11) not null,
            email varchar(100),
            born_date date not null
)`)

client.query(`CREATE TABLE feedback_list (
            num_of_feedback serial,
            foreign key (guest_id) references guest(id),
            grade int not null,
            foreign key (room_id) references room(id),
            feedback_daily_cleaning varchar (1000),
            feedback_dry_cleaning varchar (1000),
            feedback_laundry varchar (1000),
            feedback_bars varchar (1000),
            feedback_restaurant varchar (1000),
            feedback_canteen varchar (1000),
            feedback_billiards varchar (1000),
            feedback_sauna varchar (1000),
            feedback_pool varchar (1000),
            feedback_tennis varchar (1000),
            feedback_room_decs varchar (1000),
            satis_daily_cleaning boolean not null,
            satis_dry_cleaning boolean not null,
            satis_laundry boolean not null,
            satis_bars boolean not null,
            satis_restaurant boolean not null,
            satis_canteen boolean not null,
            satis_billiards boolean not null,
            satis_sauna boolean not null,
            satis_pool boolean not null,
            satis_tennis boolean not null,
            satis_num boolean not null,
            check (grade >= 1 and grade <= 5)
)`)







