Rails.application.routes.draw do
  resources :users,only: [:create, :show]
  resources :comments, only: [:index, :show, :update, :create, :destroy]
  resources :photos,only: [:index, :show, :update, :create, :destroy]
  patch "/photos/:id/like", to: "photos#increment_likes"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
