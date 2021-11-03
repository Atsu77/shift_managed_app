require 'rails_helper'

RSpec.describe "KomaTeacherApis", type: :request do
  before do
    subjects = ['国語', '社会', '数学', '理科', '英語']
    subjects.each do |s|
      Subject.create(title: s)
    end
  end

  describe 'POST /api/v1/teachers/:teacher_id/komas' do
    let(:teacher) {create(:teacher)} 
    let(:headers) { {'Content-Type' => 'multipart/form-data'} }

    before do
      sign_in teacher
    end
    
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
          date: Date.today + 1,
          koma: 'E',
          subject_id: 1
        }
      }
      post "/api/v1/teachers/#{teacher.id}/komas", headers: headers, params: params
      expect(response).to have_http_status :bad_request
    end

  end
end
