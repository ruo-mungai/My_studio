class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :category, :created_at, :comments

  has_many :comments
end
