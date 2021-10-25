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
    @teacher = Teacher.find_by(email: 'tester@example.com')

    session[:user_id] = @teacher.id

    render 'show.json.jb'
  end

  private

  def login(email, password)
    @teacher = Teacher.find_by(email: email)
    return false unless @teacher&.authenticate(password)

    session[:user_id] = @teacher.id
    true
  end
end
