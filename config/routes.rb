Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :teachers, only: %i(index create update show) do
        resources :subjects, only: %i(show create update destroy)
        resources :komas, only: %i(index create update destroy)
      end
      
      resources :students, only: %i(create update show) do
        resources :komas, only: %i(index create update destroy)
      end

      resource :sessions, only: %i(show create destroy) do
        post 'test_user', on: :collection
        post 'guest_sign_in', to: 'sessions#guest_sign_in'
      end
    end
  end
end
