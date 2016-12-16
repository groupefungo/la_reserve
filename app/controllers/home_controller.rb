class HomeController < ApplicationController
  def index
    @promo_one = Promotion.first
    @promo_two = Promotion.last
  end
end