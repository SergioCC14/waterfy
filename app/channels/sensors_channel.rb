# app/channels/sensor_channel.rb
class SensorsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "broadcast_sensors"
  end

  def unsubscribed
    # current_user.disappear
  end

  def appear(data)
    # current_user.appear on: data['appearing_on']
  end

  def away
    # current_user.away
  end

  def fake_move(data)

    leftMeassure = data['left']
    rightMeassure = data['right']
    xDegrees = data['xDegrees']

    json_data = [ {
       id: Sensor.where({type: 'horizontal', direction: 'left'}).first.id,
       type: 'horizontal',
       direction: 'left',
       udoo_id: 4,
       meassure: leftMeassure
     },
     {
       id: Sensor.where({type: 'horizontal', direction: 'right'}).first.id,
       type: 'horizontal',
       direction: 'right',
       udoo_id: 4,
       meassure: rightMeassure
     },
     {
       id: Sensor.where({type: 'accelerometer-x'}).first.id,
       type: 'accelerometer-x',
       meassure: xDegrees
     }
    ]

    ActionCable.server.broadcast "broadcast_sensors", json_data.to_json
  end

end
