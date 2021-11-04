module SessionsHelper
  def current_user
    @current_user ||= Teacher.find_by(id: session[:user_id])
    @current_user ||= Student.find_by(id: session[:user_id])
    return @current_user
  end

  def logged_in?
    !!current_user
  end

end