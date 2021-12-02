class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      # redirect_to user_url(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: ['User not found.'], status: 404
    end
  end

  def index
    if params[:server_id]
      @server = Server.find_by(id: params[:server_id])
      @users = @server.members
    else
      @users = User.all
    end
    render :index
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
