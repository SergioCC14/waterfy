class SensorsController < ApplicationController
  def index
    render json: Sensor.all.to_json
  end
end
