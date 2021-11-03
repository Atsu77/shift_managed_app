class Api::V1::KomasController < ApplicationController
  before_action :require_user_logged_in, only: %i(create)
  
  def create
    koma = current_user.komas.build(koma_params)
    if koma.save
      render json: {message: 'シフトを登録しました'}
    else 
      render json: {message: koma.errors.full_messages.join('、')}, status: :bad_request
    end
  end

  private
  def koma_params
    params.require(:koma).permit(:date, :koma, :subject_id)
  end
end