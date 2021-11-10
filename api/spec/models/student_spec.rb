require 'rails_helper'

RSpec.describe Student, type: :model do
  let(:student) { FactoryBot.create(:student) }
  let(:other_student) { FactoryBot.create(:student) }

  describe 'ユーザー登録できる場合' do
    it '新規登録できること' do
      expect(student).to be_valid
    end
  end

  describe 'ユーザー名を検証する場合' do
    it 'ユーザー名がないと無効な状態であること' do
      student.name = nil
      student.valid?
      expect(student.errors[:name]).to include('を入力してください')
    end

    it 'ユーザー名が50文字なら有効な状態であること' do
      student.name = 'a' * 50
      student.valid?
      expect(student).to be_valid
    end

    it 'ユーザー名が50文字超なら無効な状態であること' do
      student.name = 'a' * 51
      student.valid?
      expect(student.errors[:name]).to include('は50文字以内で入力してください')
    end
  end

  describe 'メールアドレスを検証する場合' do
    it 'メールアドレスが無いと無効な状態であること' do
      student.email = nil
      student.valid?
      expect(student.errors[:email]).to include('を入力してください')
    end

    it '重複したメールアドレスなら無効な状態であること' do
      FactoryBot.build(:student, email: 'tester@example.com')
      student.email = 'tester@example.com'
      student.valid?
      expect(student.errors[:email]).to include('はすでに存在します')
    end

    it 'メールアドレスに@が含まれていないなら無効な状態であること' do
      student.email = 'testerexample.com'
      student.valid?
      expect(student.errors[:email]).to include('は不正な値です')
    end

    it 'メールアドレスが保存される前に小文字に変換されること' do
      student_2 = FactoryBot.build(:student, email: 'TESTER_2@example.com')
      student_2.save
      expect(student_2.email).to eq 'tester_2@example.com'
    end
  end

  describe 'パスワードを検証する場合' do
    it 'パスワードと確認用パスワードが一致していないと無効であること' do
      student.password = 'password'
      student.password_confirmation = 'invalid_password'
      student.valid?
      expect(student.errors[:password_confirmation]).to include('とPasswordの入力が一致しません')
    end

    it 'パスワードが6文字未満なら無効な状態であること' do
      student.password = student.password_confirmation = 'a' * 5
      student.valid?
      expect(student.errors[:password]).to include('は6文字以上で入力してください')
    end
  end
end
