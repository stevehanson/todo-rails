class HomeController < ApplicationController
  
  respond_to :html, :json
  
  def index
    respond_with(@items = Item.all)
  end

end
