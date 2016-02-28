Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
  # mount ActionCable.server => '/cable'
  resources :sensors, only: [:index, :show] do
    put :data
    put :update_bulk
  end
  root to: 'dashboard#index'

end
