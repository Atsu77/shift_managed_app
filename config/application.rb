require_relative 'boot'

require 'rails'
# Pick the frameworks you want:
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
require 'active_storage/engine'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_view/railtie'
require 'action_cable/engine'
# require "sprockets/railtie"
require 'rails/test_unit/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Myapp
  class Application < Rails::Application
    config.load_defaults 5.2

    # 不要なファイルを作成しないように設定
    config.generators do |g|
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
      g.skip_routes true
      g.test_framework false
    end

    # Rspecの初期設定
    config.generators do |g|
      g.test_framework :rspec,
                       view_specs: false,
                       helper_specs: false,
                       routing_specs: false
    end

    # 日本語ファイルの読み込み
    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local
    config.i18n.default_locale = :ja
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]

    config.api_only = true
    config.middleware.use ActionDispatch::Flash

    # Cookie storeを有効にする
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.middleware.use ActionDispatch::ContentSecurityPolicy::Middleware

    # postgresqlのidを1から振り直すファイルのパスを読み込む
    config.paths.add 'lib', eager_load: true
  end
end
