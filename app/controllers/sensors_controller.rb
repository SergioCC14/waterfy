class SensorsController < ApplicationController
  def index
    #bradcast_socket
    render json: Sensor.all, status: 200
  end

  def update_bulk
    begin
      params[:data].each do |data_sensor|
        sensor = Sensor.find_by(udoo_id: data_sensor[:udoo_id])
        sensor.datums << Datum.create(measure: data_sensor[:measure])
      end
    rescue => e
      render json: { message: e.message }.to_json, status: 500
    end
    bradcast_socket
    render json: { message: 'ok' }.to_json, status: 201
  end

  def data
    begin
      sensor = Sensor.find_by(udoo_id: params[:sensor_id])
      sensor.datums << Datum.create(measure: params[:measure])
    rescue => e
      render json: { message: e.message }.to_json, status: 500
    end
    bradcast_socket
    render json: { message: 'ok' }.to_json, status: 201
  end
end

private

def bradcast_socket
  json_data = []
  Sensor.all.each do |sensor|
    datum = sensor.datums.order(created_at: :desc).first
    json_data << { type: sensor.type, id: sensor.id.to_s, measure: datum.measure } if datum
  end
  ActionCable.server.broadcast \
  "broadcast_sensors", json_data.to_json
end
