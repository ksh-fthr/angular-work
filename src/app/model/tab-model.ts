export class TabModel {
  private _name: string;
  private _contents: any;
  private _current: boolean;

  /**
   * コンストラクタ
   *
   * @param {string} _name タブ名
   * @param {*} _contents コンテンツ( 実態はコンポーネントそのもの )
   * @param {boolean} _current 現在表示中か否かを示すフラグ
   * @memberof TabModel
   */
  constructor(_name: string, _contents: any, _current: boolean) {
    this._name = _name;
    this._contents = _contents;
    this._current = _current;
  }

  // 以降のブロックは setter/getter
  // 今回の実装ではプロパティに対してセット/ゲットするだけの単純なもの

  public set name(_name: string) {
    this._name = _name;
  }

  public get name(): string {
    return this._name;
  }

  public set contents(_contents: any) {
    this._contents = _contents;
  }

  public get contents(): any {
    return this._contents;
  }

  public set current(_current: boolean) {
    this._current = _current;
  }

  public get current(): boolean {
    return this._current;
  }
}
