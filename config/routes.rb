Rails.application.routes.draw do
  root 'messages#index'
  get 'messages/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
