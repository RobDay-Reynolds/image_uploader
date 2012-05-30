class Image < ActiveRecord::Base
    belongs_to :user, :class_name => 'User'
    has_attached_file :picture
end
