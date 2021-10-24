require 'rails_helper'

RSpec.describe Teacher, type: :model do
  let(:teacher) { FactoryBot.create(:teacher) }
  let(:other_teacher) { FactoryBot.create(:teacher) }

  describe 'ユーザー登録できる場合' do
    it '新規登録できること' do
      expect(teacher).to be_valid
    end
  end

  describe 'ユーザー名を検証する場合' do
    it 'ユーザー名がないと無効な状態であること' do
      teacher.name = nil
      teacher.valid?
      expect(teacher.errors[:name]).to include('を入力してください')
    end
    
    it 'ユーザー名が50文字なら有効な状態であること' do
      teacher.name = 'a' * 50
      teacher.valid?
      expect(teacher).to be_valid
    end

    it 'ユーザー名が50文字超なら無効な状態であること' do
      teacher.name = 'a' * 51
      teacher.valid?
      expect(teacher.errors[:name]).to include('は50文字以内で入力してください')
    end
  end

  describe 'メールアドレスを検証する場合' do
    it 'メールアドレスが無いと無効な状態であること' do
      teacher.email = nil
      teacher.valid?
      expect(teacher.errors[:email]).to include('を入力してください')
    end

    it '重複したメールアドレスなら無効な状態であること' do
      FactoryBot.create(:teacher, email: 'tester@example.com')
      teacher.email = 'tester@example.com'
      teacher.valid?
      expect(teacher.errors[:email]).to include('はすでに存在します')
    end

    it 'メールアドレスに@が含まれていないなら無効な状態であること' do
      teacher.email = 'testerexample.com'
      teacher.valid?
      expect(teacher.errors[:email]).to include('は不正な値です')
    end

    it 'メールアドレスが保存される前に小文字に変換されること' do
      teacher.email = 'TESTER@example.com'
      teacher.save
      expect(teacher.email).to eq 'tester@example.com'
    end
  end

  describe 'パスワードを検証する場合' do
    it 'パスワードと確認用パスワードが一致していないと無効であること' do
      teacher.password = 'password'
      teacher.password_confirmation = 'invalid_password'
      teacher.valid?
      expect(teacher.errors[:password_confirmation]).to include('とPasswordの入力が一致しません')
    end

    it 'パスワードが6文字未満なら無効な状態であること' do
      teacher.password = teacher.password_confirmation = 'a' * 5
      teacher.valid?
      expect(teacher.errors[:password]).to include('は6文字以上で入力してください')
    end
  end

end
