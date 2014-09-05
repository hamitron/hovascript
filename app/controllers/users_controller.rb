class UsersController < ApplicationController


	def index
    @users = User.all
  end


  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to new_session_path
    end
  end

  def show
  end

  def edit
  end
  def update
  end

  def destroy
    User.find(params[:id]).destroy
    redirect_to entries_path
  end







private
  def user_params
    params.require(:user).permit(:name, :type, :email, :password, :password_confirmation)
  end


end
