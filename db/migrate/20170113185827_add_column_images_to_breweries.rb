class AddColumnImagesToBreweries < ActiveRecord::Migration
  def change
    add_column :breweries, :image_file_name, :string
    add_column :breweries, :image_content_type, :string
    add_column :breweries, :image_file_size, :integer
    add_column :breweries, :image_updated_at, :datetime
  end
end
