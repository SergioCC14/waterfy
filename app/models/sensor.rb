class Sensor
  include Mongoid::Document
  include Mongoid::Timestamps

  field :type, type: String
  has_many :datums
end
