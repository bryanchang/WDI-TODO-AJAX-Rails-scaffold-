class TodoItem < ActiveRecord::Base
  attr_accessible :completed, :deleted, :name
end
