require 'rails_helper'

RSpec.describe "Api::V1::Subjects", type: :request do
  let(:headers) { {'Content-Type' => 'application/json' }}
  let(:teacher) { create(:teacher) }

  before do
    sign_in teacher
  end

  describe "POST /api/v1/teachers/:teacher_id/subjects" do
    context '正常なパラメータの場合' do
      it '担当科目が登録できること' do
        params = {
          subject_teachers: {
            subject_id: [1, 2, 3]
          }
        }.to_json

        post "/api/v1/teachers/#{teacher.id}/subjects",
        headers: headers,
        params: params

        expect(response).to have_http_status :ok
      end
    end
  end
end
