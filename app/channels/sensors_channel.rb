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
end
