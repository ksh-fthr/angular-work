#!/usr/bin/env bash
set -e

# ===== スクリプトのあるディレクトリへ移動 =====
cd "$(dirname "$0")"

# ===== nodenv のインストール確認 =====
if ! command -v nodenv >/dev/null 2>&1; then
  echo "nodenv が見つかりません。インストールを開始します..."

  # nodenv インストール
  git clone https://github.com/nodenv/nodenv.git ~/.nodenv
  cd ~/.nodenv && src/configure && make -C src

  # PATH を一時的に通す
  export PATH="$HOME/.nodenv/bin:$PATH"

  # ~/.zshrc に追記して永続化
  if ! grep -q 'nodenv init' "$HOME/.zshrc"; then
    echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> "$HOME/.zshrc"
    echo 'eval "$(nodenv init -)"' >> "$HOME/.zshrc"
    echo "✅ ~/.zshrc に nodenv PATH と初期化を追記しました。再ログインで永続化されます。"
  fi

  # nodenv 初期化
  eval "$(nodenv init -)"

  # node-build プラグインを追加
  mkdir -p "$(nodenv root)"/plugins
  git clone https://github.com/nodenv/node-build.git "$(nodenv root)"/plugins/node-build
else
  echo "nodenv がすでにインストールされています。"
  export PATH="$HOME/.nodenv/bin:$PATH"
  eval "$(nodenv init -)"
fi

# ===== Node.js バージョンの決定 =====
if [ -f ".node-version" ]; then
  NODE_VERSION=$(cat .node-version)
  echo ".node-version に指定されたバージョンを使用します: $NODE_VERSION"
else
  echo ".node-version が存在しないため、現在の node バージョンを取得します..."
  if command -v node >/dev/null 2>&1; then
    NODE_VERSION=$(node --version | sed -E 's/^v([0-9]+\.[0-9]+\.[0-9]+).*/\1/')
    echo "node --version の結果を使用します: $NODE_VERSION"
  else
    echo "node コマンドが見つかりません。先に Node.js をインストールしてください。"
    exit 1
  fi
fi

# ===== Node.js のインストール =====
if ! nodenv versions --bare | grep -q "^${NODE_VERSION}\$"; then
  echo "Node.js $NODE_VERSION をインストールします..."
  nodenv install "$NODE_VERSION"
fi

# ===== nodenv local で .node-version を自動生成 =====
nodenv local "$NODE_VERSION"

# 念のため生成確認、なければ手動で書き込み
if [ ! -f ".node-version" ]; then
  echo "$NODE_VERSION" > .node-version
  echo "⚠️ nodenv local で .node-version が生成されなかったため、直接書き込みました"
fi

nodenv rehash

# ===== npm install =====
echo "依存関係をインストールします..."
npm install

echo "✅ 環境構築が完了しました！"
