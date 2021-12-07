module SessionsHelper
  def current_user
    @current_user = session[:login_type] == 'teacher' ?
                    Teacher.find_by(id: session[:user_id])
                    :
                    Student.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def login(email, password, loginType='teacher')
    @user = loginType == 'teacher' ? 
                      Teacher.find_by(email: email)
                      : 
                      Student.find_by(email: email)

    return false unless @user&.authenticate(password)

    session[:user_id] = @user.id
    session[:login_type] = loginType
    true
  end
end
