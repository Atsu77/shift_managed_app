# 環境別にファイルを読み込む
load(Rails.root.join("db", "seeds", "#{Rails.env.downcase}.rb"))