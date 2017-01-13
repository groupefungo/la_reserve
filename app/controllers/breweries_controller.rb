class BreweriesController < ApplicationController
  before_action :load_breweries, only: [:index,:sort]

  def sort
    if !params[:brewery].nil?
      params[:brewery].each_with_index do |id,index|
        Brewery.find(id).update(order: index+1)
      end
    end
  end

  private
  def load_breweries
    @breweries = Brewery.order(:order)
  end
end