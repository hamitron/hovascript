class SessionsController < ApplicationController

  def new
    @user = User.new
    @is_login = true
  end

  def create
    u = User.find_by(email: params[:user][:email])

    #make sure we found a user, then make sure their password matches
    if u && u.authenticate(params[:user][:password])
      session[:user_id] = u.id.to_s
      redirect_to projects_path
    else
      redirect_to new_session_path
    end
  end

  def destroy
    reset_session
    redirect_to root_path
  end
end
