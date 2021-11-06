require 'rails_helper'

RSpec.describe 'Api::V1::Teachers', type: :request do
  describe 'GET /api/v1/teachers/:id' do
    let(:teacher) { create(:teacher) }

    it 'スキーマ通りであること' do
      get "/api/v1/teachers/#{teacher.id}"
      expect(response).to have_http_status :ok
    end
  end

  describe 'POST /api/v1/teachers' do
    let(:valid_params){{
      name: 'Test account',
      email: 'tester@example.com',
      password: 'password',
      password_confirmation: 'password',
    }}

    context 'パラメータが正常な場合' do
      it 'スキーマ定義とAPIの挙動が同じであること' do
        post '/api/v1/teachers', params: {teacher: valid_params}.to_json,
        headers: {'Content-Type' => 'application/json'}
        expect(response).to have_http_status :ok
      end
    end

    context 'パラメータが不正な場合' do
      let(:invalid_params){ valid_params.merge(
        password: 'valid',
        password_confirmation: 'invalid'
      ) }

      it 'スキーマの定義とAPIの挙動が同じであること' do
        post '/api/v1/teachers', params: {teacher: invalid_params}.to_json,
        headers: {'Content-Type' => 'application/json'}
        expect(response).to have_http_status :bad_request
      end
    end
  end

  describe 'PUT /api/v1/teachers/:id' do
    let(:teacher) {create(:teacher)} 

    before do
      sign_in teacher
    end

    it 'リクエストが成功すること' do
      params = { teacher: {
        name: 'test',
        image: Rack::Test::UploadedFile.new('spec/images/test_normal_image.jpg', 'image/jpeg'),
        gender: 'male'
      }}
      put "/api/v1/teachers/#{teacher.id}", params: params,
      headers: {'Content-Type' => 'application/json'}
      expect(response).to have_http_status :ok
    end
  end
end
