class Sensor
  include Mongoid::Document
  include Mongoid::Timestamps
  
  field :type, type: String
  field :udoo_id, type: String
  field :id, type: String
  has_many :datums

end
