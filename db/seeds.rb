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

User.create(
    username: "SuperIdol",
    email: "rebase@teras.com",
    password: "123456"
)

User.create(
    username: "AmongUs",
    email: "red9@email.com",
    password: "123456"
)

User.create(
    username: "MakoNugget",
    email: "mcnugget12@gmail.com",
    password: "123456"
)

User.create(
    username: "theWok",
    email: "dwaynej@yahoo.com",
    password: "123456"
)

User.create(
    username: "tokaiteio69",
    email: "teio69@yahoo.com",
    password: "123456"
)

User.create(
    username: "danyelho",
    email: "danyel777777@yahoo.com",
    password: "123456"
)

User.create(
    username: "Miyako1443",
    email: "ok@yahoo.com",
    password: "123456"
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

Membership.create(
    user_id: 3,
    server_id: 2
)

Membership.create(
    user_id: 5,
    server_id: 2
)

Membership.create(
    user_id: 2,
    server_id: 1
)

Membership.create(
    user_id: 10,
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

# 3
Server.create(
    name: "Jabee",
    description: "chickenlicious delish",
    owner_id: 9
)

Membership.create(
    user_id: 9,
    server_id: 3
)

Channel.create(
    name: "general",
    server_id: 3
)

#4

Server.create(
    name: "Coffee Lovers Club",
    description: "Gathering of the coffee aficionados",
    owner_id: 6
)

Membership.create(
    user_id: 6,
    server_id: 4
)

Channel.create(
    name: "general",
    server_id: 4
)

#5

Server.create(
    name: "Masters of Chaldea",
    description: "Respite for the wandering saviours",
    owner_id: 7
)

Membership.create(
    user_id: 7,
    server_id: 5
)

Channel.create(
    name: "general",
    server_id: 5
)

#6

Server.create(
    name: "Admirals of the Sea",
    description: "For the people that dare oppose Neptune",
    owner_id: 10
)

Membership.create(
    user_id: 10,
    server_id: 6
)

Channel.create(
    name: "general",
    server_id: 6
)

#7
Server.create(
    name: "Horse Racers",
    description: "derby bois lets go",
    owner_id: 7
)

Membership.create(
    user_id: 7,
    server_id: 7
)

Channel.create(
    name: "general",
    server_id: 7
)

#8

Server.create(
    name: "Oripathy Research Circle",
    description: "A research circle for studying Oripathy",
    owner_id: 1
)

Membership.create(
    user_id: 1,
    server_id: 8
)

Channel.create(
    name: "general",
    server_id: 8
)

#9

Server.create(
    name: "Captain of the Rails",
    description: "For those who brave the frontier",
    owner_id: 3
)

Membership.create(
    user_id: 3,
    server_id: 9
)

Channel.create(
    name: "general",
    server_id: 9
)

#10

Server.create(
    name: "Pilots of Giant Steel",
    description: "the future is here",
    owner_id: 4
)

Membership.create(
    user_id: 4,
    server_id: 10
)

Channel.create(
    name: "general",
    server_id: 10
)

#11

Server.create(
    name: "Sauce life",
    description: "daily dose of sauce",
    owner_id: 3
)

Membership.create(
    user_id: 3,
    server_id: 11
)

Channel.create(
    name: "general",
    server_id: 11
)

#12

Server.create(
    name: "Captain of the Rails",
    description: "For those who brave the frontier",
    owner_id: 1
)

Membership.create(
    user_id: 1,
    server_id: 12
)

Channel.create(
    name: "general",
    server_id: 12
)



