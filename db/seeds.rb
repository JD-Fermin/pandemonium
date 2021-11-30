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

Channel.create(
    name: "general"
)

Channel.create(
    name: "nerdery",
    description: "Place for the geeks"
)

Channel.create(
    name: "nunnery",
    description: "Place for the devouts"
)