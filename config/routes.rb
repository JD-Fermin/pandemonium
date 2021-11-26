Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resources :messages, except: [:edit, :new]
    resource :session, only: [:create, :destroy]
  end
  root to: "static_pages#root"
  mount ActionCable.server, at: './cable'
end
