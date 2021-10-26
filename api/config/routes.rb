Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :teachers, only: %i(create update show)
      resources :students, only: %i(create update show)
      
      resource :sessions, only: %i(show create destroy) do
        post 'test_user', on: :collection
      end
    end
  end
end
