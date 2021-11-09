class Api::V1::SessionsController < ApplicationController

  def create
    email = params[:session][:email].downcase
    password = params[:session][:password]
    if login(email, password)
      render 'show.json.jb'
    else
      render json: {message: 'Login failed'}, status: :bad_request
    end
  end

  def destroy
    session[:user_id] = nil

    render json: {message: 'Logged out successfully'}
  end

  def test_user
    @user = Teacher.find_by(email: 'tester@example.com')

    session[:user_id] = @user.id

    render 'show.json.jb'
  end

end
