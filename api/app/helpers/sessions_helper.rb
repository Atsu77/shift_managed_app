module SessionsHelper
  def current_user
    @current_user ||= Teacher.find_by(id: session[:user_id])
    @current_user ||= Student.find_by(id: session[:user_id])
  end

  def logged_in?
    current_user ? true : false
  end
end