class Api::V1::SessionsController < ApplicationController

  def create
    email = sign_in_params[:email].downcase
    password = sign_in_params[:password]
    loginType = sign_in_params[:login_type]
    if login(email, password, loginType)
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
    user = params[:is_teacher] ? Teacher.guest : Student.guest
    login_type = params[:is_teacher] ? 'teacher' : 'student'

    if login(user.email, user.password, login_type)
      render json: { message: '講師のゲストユーザーとしてログインしました' }
    else
      render json: { message: 'ログインに失敗しました' }, status: :bad_request
    end
  end

  private
  def sign_in_params
    params.require(:session).permit(:email, :password, :login_type)
  end

end
