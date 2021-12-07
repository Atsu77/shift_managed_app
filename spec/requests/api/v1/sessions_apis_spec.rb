require 'rails_helper'

RSpec.describe 'Api::V1::Sessions', type: :request do
  let(:headers) { { 'Content-Type' => 'application/json' } }
  describe 'POST /api/v1/sessions' do
    let(:teacher) { create(:teacher) }
    let(:student) { create(:student) }

    context '教師のログインリクエストについて' do
      it 'リクエストが成功すること' do
        params = {
          session: {
            email: teacher.email,
            password: 'password',
            login_type: 'teacher'
          }
        }.to_json
        post '/api/v1/sessions', headers: headers, params: params
        expect(response).to have_http_status :ok
        expect(JSON.parse(response.body)['user']['loginType']).to eq 'Teacher'
      end
    end
    
    context '生徒のログインリクエストについて' do
      it 'リクエストが成功すること' do
        params = {
          session: {
            email: student.email,
            password: 'password',
            login_type: 'student'
          }
        }.to_json
        post '/api/v1/sessions', headers: headers, params: params
        expect(response).to have_http_status :ok
        expect(JSON.parse(response.body)['user']['loginType']).to eq 'Student'
      end
    end

    context 'メールアドレスが不正な場合' do
      it 'リクエストが失敗すること' do
        params = {
          session: {
            email: 'invalid@example.com',
            password: 'password',
            login_type: 'teacher'
          }
        }.to_json
        post '/api/v1/sessions', headers: headers, params: params
        expect(response).to have_http_status :bad_request
      end
    end

    context 'sign_inメソッドの動作を確かめる' do
      it 'リクエストが成功すること' do
        sign_in teacher
        expect(response).to have_http_status :ok
      end
    end
  end

  describe 'DELETE /api/v1/sessions' do
    before do
      user = create(:teacher)
      params = {
        session: {
          email: user.email,
          password: 'password',
          login_type: 'teacher'
        }
      }.to_json
      post '/api/v1/sessions', headers: headers, params: params
    end

    it 'スキーマ通りであること' do
      delete '/api/v1/sessions'

      expect(response).to have_http_status :ok
    end
  end

  describe 'POST /api/v1/sessions/test_user' do
    before do
      create(:teacher, email: 'tester@example.com',
                       password: 'password', password_confirmation: 'password')
    end
  end

  describe 'ゲストログインについて' do
    it '講師用ゲストログインのリクエストが成功すること' do
      params = {
        is_teacher: true
      }.to_json

      post '/api/v1/sessions/guest_sign_in', headers: headers, params: params
      expect(response).to have_http_status :ok
    end

    it '生徒用ゲストログインのリクエストが成功すること' do
      params = {
        is_teacher: false
      }.to_json

      post '/api/v1/sessions/guest_sign_in', headers: headers, params: params
      expect(response).to have_http_status :ok
    end
  end
end
