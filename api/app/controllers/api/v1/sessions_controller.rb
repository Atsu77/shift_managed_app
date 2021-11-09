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

  def guest_sign_in
    binding.pry
    user = params[:is_teacher] ? Teacher.guest : Student.guest

    if login(user.email, user.password)
      render json: { message: '講師のゲストユーザーとしてログインしました' }
    else
      render json: { message: 'ログインに失敗しました' }, status: :bad_request
    end
  end

end
