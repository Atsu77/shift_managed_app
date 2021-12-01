module LoginSupport
  def sign_in(user, login_type='teacher')
    params = {session: {
      email: user.email,
      password: 'password',
      login_type: login_type
    }}.to_json
    headers = { 'Content-Type' => 'application/json' }

    post '/api/v1/sessions', headers: headers, params: params
  end
end

RSpec.configure do |config|
  config.include LoginSupport
end