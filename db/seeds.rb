# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sensors = [
  { type: 'accelerometer', udoo_id: '1' },
  
  { type: 'gyroscope-x',     udoo_id: '2' },
  { type: 'gyroscope-y',     udoo_id: '3' },
  { type: 'gyroscope-z',     udoo_id: '4' },

  { type: 'magnetometer',  udoo_id: '5' },

  { type: 'horizontal',    udoo_id: '6', direction: 'left' },
  { type: 'horizontal',    udoo_id: '7', direction: 'right' },
]
sensors.each do |sensor|
  s = Sensor.find_or_create_by(udoo_id: sensor[:udoo_id])
  s.type = sensor[:type]
  s.direction = sensor[:direction] if sensor[:direction]
  s.save
end