class Api::V1::TeachersController < ApplicationController
before_action :require_user_logged_in, only: %i(update)

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
      render json: {message: 'ユーザー情報を変更しました'}
    else
      render json: {message: teacher.errors.full_messages.join(', ')}, status: :bad_request
    end
  end

  private
  def new_teacher_params
    params.require(:teacher).permit(:name, :email, :password, :password_confirmation)
  end

  def edit_teacher_params
    params.require(:teacher).permit(:name, :email, :gender, :image, :comment)
  end
end