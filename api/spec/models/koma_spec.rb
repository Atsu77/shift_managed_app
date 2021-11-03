require 'rails_helper'

RSpec.describe Koma, type: :model do
  let(:koma) { FactoryBot.create(:koma) }

  describe 'コマを登録できる場合' do
    it '新規登録できること' do
      expect(koma).to be_valid
    end
  end

  describe '日付を検証する場合' do
    it '日付がないと無効な状態であること' do
      koma.date = nil
      koma.valid?
      expect(koma.errors[:date]).to include('日付が入力されてないか、今日より後の日付を入力してください')
    end

    it '登録日が今日より前だと無効な状態であること' do
      koma.date = Date.today - 1
      koma.valid?
      expect(koma.errors[:date]).to include('日付が入力されてないか、今日より後の日付を入力してください')
    end

    it '登録日が今日だと無効な状態であること' do
      koma.date = Date.today
      koma.valid?
      expect(koma.errors[:date]).to include('日付が入力されてないか、今日より後の日付を入力してください')
    end

    it '登録日が今日以降だと有効な状態であること' do
      koma.date = Date.today + 1
      expect(koma).to be_valid
    end
  end

  describe 'コマを検証する場合' do
    it 'コマが登録されてないと無効な状態であること' do
      koma.koma = nil
      koma.valid?
      expect(koma.errors[:koma]).to include('を入力してください')
    end

    it 'コマに S A B C D 以外の文字なら無効な状態であること' do
      koma.koma = 'E'
      koma.valid?
      expect(koma.errors[:koma]).to include('は一覧にありません')
    end

    it 'コマに S が登録されたなら有効な状態であること' do
      koma.koma = 'S'
      expect(koma).to be_valid
    end
  end
end
