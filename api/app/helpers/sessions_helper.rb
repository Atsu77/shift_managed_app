module SessionsHelper
  def current_user
    @current_user ||= User.find_by(id: session[:teacher_id])
  end

  def logged_in?
    current_user ? true : false
  end
end