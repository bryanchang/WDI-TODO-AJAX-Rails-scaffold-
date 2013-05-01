class RemoveColumnFromTodoItems < ActiveRecord::Migration
  def up
    remove_column :todo_items, :due_at
  end

  def down
    add_column :todo_items, :due_at, :datetime
  end
end
