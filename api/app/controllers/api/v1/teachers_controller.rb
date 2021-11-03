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

  private
  def new_teacher_params
    params.require(:teacher).permit(:name, :email, :password, :password_confirmation)
  end
end