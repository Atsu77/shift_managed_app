module SessionsHelper
  def current_user
    @current_user ||= Teacher.find_by(id: session[:user_id])
    @current_user ||= Student.find_by(id: session[:user_id])
    return @current_user
  end

  def logged_in?
    !!current_user
  end

  def login(email, password)
    @user ||= Teacher.find_by(email: email)
    @user ||= Student.find_by(email: email)

    return false unless @user&.authenticate(password)

    session[:user_id] = @user.id
    true
  end

end