class Datum
  include Mongoid::Document
  include Mongoid::Timestamps
  belongs_to :sensor
  field :measure, type: Float
end
