Rails.application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  resources :contacts

  resources :breweries, path: 'la-reserve/' do
    get :sort, on: :collection
    collection {post :sort}
  end

  get "/" => "home#index"
end
