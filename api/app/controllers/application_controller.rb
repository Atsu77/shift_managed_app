# セッションを使うためApplicationController::APIを継承していない
class ApplicationController < ActionController::Base
  include SessionsHelper

  def require_user_logged_in
    return if logged_in?

    head :forbidden
  end

  def render_errors(object)
    render json: {
      errors: object.errors.full_messages.join('、')
    }, status: :bad_request
  end
end

