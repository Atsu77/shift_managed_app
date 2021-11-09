class Api::V1::TeachersController < ApplicationController
  before_action :require_user_logged_in, only: %i[update]
  before_action :ensure_normal_user, only: %i[update]

  def show
    @teacher = Teacher.find(params[:id])

    render 'show.json.jb'
  end

  def create
    @teacher = Teacher.new(new_teacher_params)

    if @teacher.save
      session[:user_id] = @teacher.id

      render 'show.json.jb'
    else
      render_errors(@teacher)
    end
  end

  def update
    teacher = Teacher.find(params[:id])

    raise id unless teacher == current_user

    if teacher.update(edit_teacher_params)
      render json: { message: 'ユーザー情報を変更しました' }
    else
      render json: { message: teacher.errors.full_messages.join(', ') }, status: :bad_request
    end
  end

  def guest_sign_in
    teacher = Teacher.guest
    if login(teacher.email, teacher.password)
      render json: { message: '講師のゲストユーザーとしてログインしました' }
    else
      render json: { message: 'ログインに失敗しました' }, status: :bad_request
    end
  end

  private

  def new_teacher_params
    params.require(:teacher).permit(:name, :email, :password, :password_confirmation)
  end

  def edit_teacher_params
    params.require(:teacher).permit(:name, :email, :gender, :image, :comment)
  end

  def ensure_normal_user
    if current_user.email == 'guest@example.com'
      render json: {message: 'ゲストユーザーではユーザー情報の変更は出来ません'}, status: :forbidden
    end
  end
end
