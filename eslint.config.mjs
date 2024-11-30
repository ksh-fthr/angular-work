// @ts-check
import eslint from '@eslint/js';
import angular from 'angular-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        files: ['**/*.ts'],
        ignores: ['dist', 'node_modules', '.angular/**'],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...angular.configs.tsRecommended,
            eslintPluginPrettierRecommended,
            eslintConfigPrettier,
        ],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off', // typescript の any を許容する
            '@typescript-eslint/no-unused-vars': 'off', // 未使用の変数に対するエラーは抑止する
            '@angular-eslint/no-empty-lifecycle-method': 'off', // 空メソッドを許容する
            'no-prototype-builtins': 'off',
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    indent: 4,
                    singleQuote: true,
                    trailingComma: 'es5',
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
        rules: {
            '@angular-eslint/template/label-has-associated-control': 'off', // ラベル要素がフォーム要素に関連付けられていることを許容する
            '@angular-eslint/template/alt-text': 'off', // 代替テキストの強制を抑止する
            '@angular-eslint/template/elements-content': 'off', // タグ内にコンテンツがあることを保証する
            '@angular-eslint/template/interactive-supports-focus': 'off', // フォーカス可能性であることを保証する
            '@angular-eslint/template/click-events-have-key-events': 'off', // クリックイベントは keyup, keydown, keypress のどれかを保証する
        },
    }
);
