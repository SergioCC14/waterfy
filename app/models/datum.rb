class Datum
  include Mongoid::Document
  belongs_to :sensor
  field :measure, type: Float
end
