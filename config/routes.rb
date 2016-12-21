Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get "users/sign_up", :to => "devise/sessions#new", :as => :sign_up
    get 'users/edit' => 'devise/sessions#new', :as => 'edit_user_registration'
  end

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  resources :contacts

  get "/" => "home#index"
end
