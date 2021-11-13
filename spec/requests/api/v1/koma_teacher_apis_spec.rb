require 'rails_helper'

RSpec.describe "Api::V1::Komas", type: :request do
  let(:teacher) {create(:teacher)} 
  let(:headers) { {'Content-Type' => 'multipart/form-data'} }

  before do
    sign_in teacher
  end
  
  describe 'POST /api/v1/teachers/:teacher_id/komas' do
    
    it 'パラメータが正常な場合リクエストが成功すること' do
      params = {
        koma: {
          date: Date.today + 1,
          koma: 'S',
          subject_id: 1
        }
      }
      post "/api/v1/teachers/#{teacher.id}/komas", headers: headers, params: params

      expect(response).to have_http_status :ok
    end

    it 'コマを登録する日付が今日だと登録できないこと' do
      params = {
        koma: {
          date: Date.today,
          koma: 'S',
          subject_id: 1
        }
      }
      post "/api/v1/teachers/#{teacher.id}/komas", headers: headers, params: params
      expect(response).to have_http_status :bad_request
    end

    it 'コマ名が[S, A, B, C, D]だと登録できないこと' do
      params = {
        koma: {
          koma: 'E',
          subject_id: 1
        }
      }
      post "/api/v1/teachers/#{teacher.id}/komas", headers: headers, params: params
      expect(response).to have_http_status :bad_request
    end

    describe 'PUT /api/v1/teachers/:teacher_id/komas/:id' do
      let(:koma) {create(:koma)} 
      
      it 'パラメータが正常な場合リクエストが成功すること' do
        params = {
          koma: {
            date: Date.today + 5,
            koma: 'B',
            subject_id: 7
          }
        }
        put "/api/v1/teachers/#{teacher.id}/komas/#{koma.id}", headers: headers, params: params

        expect(response).to have_http_status :ok
      end
    end

    describe 'GET /api/v1/teachers/:teacher_id/komas' do
      before do
        teacher.komas.create(
          date: Date.today + 1,
          koma: 'S',
          subject_id: 1
        )
      end

      it 'リクエストが成功すること' do
        get "/api/v1/teachers/#{teacher.id}/komas",
        headers: headers
        expect(response). to have_http_status :ok
      end
    end

    describe 'DELETE /api/v1/teachers/:teacher_id/komas/:id' do
      before do
        teacher.komas.create(
          date: Date.today + 1,
          koma: 'S',
          subject_id: 1
        )
      end

      it 'リクエストが成功すること' do
        delete "/api/v1/teachers/#{teacher.id}/komas/#{teacher.komas.first.id}",
        headers: headers
        expect(response). to have_http_status :ok
      end
    end
  end
end
