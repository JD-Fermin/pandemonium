# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
    username: "SuperMegaChap",
    email: "iheartmechs@xyz.com",
    password: "password"
)

User.create(
    username: "Pisces",
    email: "pisces@email.com",
    password: "password"
)

User.create(
    username: "UltimateSenpai",
    email: "xyzz@sstr.com",
    password: "password"
)

Server.create(
    name: "Da Cultured Chaps",
    description: "place of cultured gentlechaps",
    owner_id: 3
)

Membership.create(
    user_id: 3,
    server_id: 1
)

Server.create(
    name: "Students of Schale",
    description: "sensei simps",
    owner_id: 2
)

Membership.create(
    user_id: 2,
    server_id: 2
)

Channel.create(
    name: "general",
    server_id: 1
)

Channel.create(
    name: "nerdery",
    description: "Place for the geeks",
    server_id: 1
)

Channel.create(
    name: "nunnery",
    description: "Place for the devouts",
    server_id: 1
)

Membership.create(
    user_id: 1,
    server_id: 1
)

Channel.create(
    name: "general",
    server_id: 2
)