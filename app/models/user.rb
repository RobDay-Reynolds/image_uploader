class User < ActiveRecord::Base
    has_many :image, :class_name => 'Image'
end
