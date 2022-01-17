Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create] do 
      resources :memberships, only: [:index]
    end

    resources :servers, only: [:index, :create, :update, :destroy, :show] do
      resources :channels, only: [:index]
    end

    resources :channels, only: [:update, :create, :destroy] do
      resources :messages, except: [:edit, :new, :show] 
    end

    resources :conversations, except: [:edit, :new, :update] do
      resources :direct_messages, only: [:index, :create, :update, :destroy]
    end

    resources :memberships, only: [:create, :destroy]
  end
  root to: "static_pages#root"
  mount ActionCable.server, at: '/cable'
end
