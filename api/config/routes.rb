Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :teachers, only: %i(create update show)
      resource :sessions, only: %i(show create destroy)
    end
  end
end
