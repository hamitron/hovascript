class User < ActiveRecord::Base

has_many :entries

has_secure_password

validates_presence_of :name, :email
validates_uniqueness_of :email
end
