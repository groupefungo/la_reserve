class Brewery < ActiveRecord::Base
  acts_as_list :column => :order
  has_attached_file :image
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]
end
