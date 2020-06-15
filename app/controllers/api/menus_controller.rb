class Api::MenusController < ApplicationController

def index 
render json: Menu.all
end

def create
    Menu = Menu.new(Menu_params)
    if menu.save
        render json: menu
    else
        render json: {errors: menu.errors}, status: :unprocessable_entity
    end
end

private

def menu_params
    params.require(:menu).permit(:name)

end


end
