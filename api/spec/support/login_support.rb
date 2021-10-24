module LoginSupport
  def sign_in(user)
    params = {session: {
      email: user.email,
      password: user.password
    }}.to_json
    headers = { 'Content-Type' => 'application/json' }

    post '/api/v1/sessions', headers: headers, params: params
  end

end

RSpec.configure do |config|
  config.include LoginSupport
end