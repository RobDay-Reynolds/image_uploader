class User < ActiveRecord::Base
    has_many :images, :class_name => 'Image'
end
