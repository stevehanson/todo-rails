class Item < ActiveRecord::Base
  attr_accessible :description, :priority, :title
end
