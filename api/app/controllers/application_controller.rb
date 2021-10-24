class ApplicationController < ActionController::API
  include SessionsHelper

  def require_user_logged_in
    return if logged_in?

    head :forbidden
  end
end
