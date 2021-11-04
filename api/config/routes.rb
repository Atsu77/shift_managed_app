Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :teachers, only: %i(create update show) do
        resources :komas, only: %i(index create update show delete)
      end
      resources :students, only: %i(create update show)
      
      resource :sessions, only: %i(show create destroy) do
        post 'test_user', on: :collection
      end
    end
  end
end
