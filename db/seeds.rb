# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sensors = [
  { type: 'accelerometer', udoo_id: '1' },
  { type: 'gyroscope',     udoo_id: '2' },
  { type: 'magnetometer',  udoo_id: '3' },
  { type: 'horizontal',    udoo_id: '4' },
  { type: 'horizontal',    udoo_id: '5' },
  { type: 'horizontal',    udoo_id: '6' }
]
sensors.each do |sensor|
  Sensor.find_or_create_by(type: sensor[:type], udoo_id: sensor[:udoo_id])
end