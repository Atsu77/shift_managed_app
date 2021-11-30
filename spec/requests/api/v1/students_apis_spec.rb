require 'rails_helper'

RSpec.describe 'Api::V1::Students', type: :request do
  describe 'GET /api/v1/students/:id' do
    let(:student) { create(:student) }

    it 'スキーマ通りであること' do
      get "/api/v1/students/#{student.id}"
      expect(response).to have_http_status :ok
    end
  end

  describe 'POST /api/v1/students' do
    let(:valid_params) do
      {
        name: 'Test account',
        email: 'sample_testuser@example.com',
        password: 'password',
        password_confirmation: 'password'
      }
    end
    
    context 'パラメータが正常な場合' do
      it 'スキーマ定義とAPIの挙動が同じであること' do
        post '/api/v1/students', params: { student: valid_params }.to_json,
        headers: { 'Content-Type' => 'application/json' }
        expect(response).to have_http_status :ok
      end
    end
    
    context 'パラメータが不正な場合' do
      let(:invalid_params) do
        valid_params.merge(
          password: 'valid',
          password_confirmation: 'invalid'
        )
      end
      
      it 'スキーマの定義とAPIの挙動が同じであること' do
        post '/api/v1/students', params: { student: invalid_params }.to_json,
        headers: { 'Content-Type' => 'application/json' }
        expect(response).to have_http_status :bad_request
      end
    end
  end
end
