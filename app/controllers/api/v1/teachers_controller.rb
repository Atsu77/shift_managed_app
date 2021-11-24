class Api::V1::TeachersController < ApplicationController
  #protect_from_forgery
  before_action :require_user_logged_in, only: %i[show update]
  before_action :ensure_normal_user, only: %i[update]

  def index
    @teachers = Teacher.all

    render 'index.json.jb'
  end

  def show
    @teacher = Teacher.find(params[:id])

    render 'show.json.jb'
  end

  def create
    binding.pry
    @teacher = Teacher.new(new_teacher_params)
    
    if @teacher.save
      session[:user_id] = @teacher.id
      binding.pry
      
      render 'show.json.jb'
    else
      render_errors(@teacher)
      binding.pry
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
