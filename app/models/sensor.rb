class Sensor
  include Mongoid::Document
  include Mongoid::Timestamps

  field :type, type: String
  field :measure, type: Float
end
