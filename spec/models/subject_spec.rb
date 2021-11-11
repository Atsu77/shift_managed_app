require 'rails_helper'

RSpec.describe Subject, type: :model do
  let(:subject) {Subject.create(title: '国語')}

  describe '科目名を登録できる場合' do
    it '新規登録できること' do
      subject = Subject.new(title: 'プログラミング')
      expect(subject).to be_valid
    end
  end

  describe '科目名を検証する場合' do
    it '科目名が無いと無効な状態であること' do
      subject.title = nil
      subject.valid?
      expect(subject.errors[:title]).to include('を入力してください')
    end

    it '科目名が50文字なら有効な状態であること' do
      subject.title = 'a' * 50
      subject.valid?
      expect(subject).to be_valid include('は50文字以内で入力して下さい')
    end

    it '科目名の重複があると無効な状態であること' do
      Subject.create(title: '国語')
      subject.valid?
      expect(subject.errors[:title]).to include('はすでに存在します')
    end
  end

end
