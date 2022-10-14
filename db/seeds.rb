# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
  Photo.create!( name: "Karura forest", url: "https://www.pexels.com/photo/black-hanging-bridge-surrounded-by-green-forest-trees-775201/" ,category: "forest")

  Comment.create!(description: "great", photo_id: 1)