class Api::V1::StuentsController < ApplicationController
  before_action :require_user_logged_in, only: %i[update]

  def show
    @student = Student.find(params[:id])

    render 'show.json.jb'
  end

  def create
    @student = student.new(new_student_params)

    if @student.save
      session[:user_id] = @student.id

      render 'show.json.jb'
    else
      render_errors(@student)
    end
  end

  def new_student_params
    params.require(:student).permit(:name, :email, :password, :password_confirmation)
  end
end
