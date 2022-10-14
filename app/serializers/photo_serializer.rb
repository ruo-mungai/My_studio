class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :category, :created_at, :like ,:comments

  has_many :comments
end
