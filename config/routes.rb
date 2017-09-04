Rails.application.routes.draw do
  root 'static_pages#index'


  namespace :api do
    namespace :v1 do
      resources :cereals, only: [:index, :show]
    end
  end
end
