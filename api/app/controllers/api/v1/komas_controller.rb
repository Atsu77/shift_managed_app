class Api::V1::KomasController < ApplicationController
  before_action :require_user_logged_in, only: %i[create put]

  def index
    @komas = params[:teacher_id] ? Koma.where(teacher_id: params[:teacher_id]) : Koma.all
    @komas = @komas.order(date: :desc)

    render 'index.json.jb'
  end

  def create
    koma = current_user.komas.build(koma_params)
    if koma.save
      render json: { message: 'コマを登録しました' }
    else
      render json: { message: koma.errors.full_messages.join('、') }, status: :bad_request
    end
  end

  def update
    koma = Koma.find_by(id: params[:id])

    if koma.update(koma_params)
      render json: { message: 'コマを変更しました' }
    else
      render json: { message: koma.errors.full_messages.join('、') }, status: :bad_request
    end
  end

  def destroy
    koma = Koma.find(params[:id])
    date_format = koma.date.strftime('%Y年 %m月 %d日')

    return unless koma.teacher == current_user || koma.student == current_user

    koma.destroy

    render json: { message: "#{date_format}の#{koma.koma}コマを削除しました" }
  end

  private

  def koma_params
    params.require(:koma).permit(:date, :koma, :subject_id)
  end
end
