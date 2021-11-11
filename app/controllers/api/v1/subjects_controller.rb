class Api::V1::SubjectsController < ApplicationController
  before_action :require_user_logged_in

  def create
    subject_ids = params[:subject_teachers][:subject_id]
    subjects = []
    SubjectTeacher.transaction do
      subject_ids.each do |subject_id|
        subject = Subject.find(subject_id)
        subject.teachers << current_user
      end
      SubjectTeacher.import subjects, validate: true
    end

    render json: { message: '担当科目を登録しました' }
  rescue 
    render json: {message: '担当科目の登録がうまくいきません'}, status: :bad_request
  end

  private

  def subject_params
    params.require(:subject_teachers).permit(subject_id: [])
  end
end
