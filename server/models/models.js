const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Corp = sequelize.define('corp', {
    corp_num: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    stars: {type: DataTypes.INTEGER},
    floors: {type: DataTypes.INTEGER},
    rooms_total: {type: DataTypes.INTEGER},
    daily_cleaning: {type: DataTypes.BOOLEAN},
    dry_cleaning: {type: DataTypes.BOOLEAN},
    laundry: {type: DataTypes.BOOLEAN},
    bars: {type: DataTypes.BOOLEAN},
    restaurant: {type: DataTypes.BOOLEAN},
    canteen: {type: DataTypes.BOOLEAN},
    billiards: {type: DataTypes.BOOLEAN},
    sauna: {type: DataTypes.BOOLEAN},
    pool: {type: DataTypes.BOOLEAN},
    tennis: {type: DataTypes.BOOLEAN}
})

const Room = sequelize.define('room', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.DOUBLE},
    number: {type: DataTypes.INTEGER},
    rooms_suite: {type: DataTypes.INTEGER},
    rooms: {type: DataTypes.INTEGER},
    floor: {type: DataTypes.INTEGER},
    grade: {type: DataTypes.INTEGER},
    maintenance_const: {type: DataTypes.DOUBLE}
})

const Company = sequelize.define('comp', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    unique_discount: {type: DataTypes.INTEGER},
    phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    bank_account: {type: DataTypes.INTEGER}
})

const Booking = sequelize.define('booking', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    num_of_people: {type: DataTypes.INTEGER},
    booking_date: {type: DataTypes.DATE},
    income_date: {type: DataTypes.DATE},
    outcome_date: {type: DataTypes.DATE},
    prepayment: {type: DataTypes.BOOLEAN},
    booking_num: {type: DataTypes.INTEGER}
})

const Guest = sequelize.define('guest', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    birth_date: {type: DataTypes.DATE}
})

const Reviews = sequelize.define('reviews', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const FinOperations = sequelize.define('fin_operations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE},
    sun: {type: DataTypes.INTEGER}
})

const IncomeLiving = sequelize.define('income_living', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    income_date: {type: DataTypes.DATE},
    outcome_date: {type: DataTypes.DATE},
})

const Complaints = sequelize.define('complaints', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE}
})

Room.hasOne(Corp)

Reviews.hasOne(Room)
Reviews.hasOne(Guest)
Reviews.hasOne(Company)

Booking.hasOne(Room)
Booking.hasOne(Company)
Booking.hasOne(Guest)

IncomeLiving.hasOne(Guest)
IncomeLiving.hasOne(Room)
IncomeLiving.hasOne(Company)

Complaints.hasOne(Guest)
Complaints.hasOne(Company)

FinOperations.hasOne(Guest)
FinOperations.hasOne(Company)

module.exports = {
    Room,
    Complaints,
    Corp,
    Company,
    Reviews,
    IncomeLiving,
    FinOperations,
    Booking,
    Guest
}