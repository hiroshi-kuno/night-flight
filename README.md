# Night Flight

ISSの夜景写真を地面に敷き、飛行機の窓から見下ろす景色を描画するアプリ。
React・Three.js・Viteを使用する。

## 開発・ビルド

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

公開パスは `vite.config.js` の `base: '/night-flight/'`、ビルド出力先は `docs/`。
`docs/` は生成物なので、修正はソース側で行ってから再ビルドする。

## ロケーション画像の追加・切り替え

画像は `src/assets/locations/<ロケーションID>/` に配置し、
`src/data/locations.js` でimportして `LOCATIONS` に登録する。
画像URLはViteが公開パスに合わせて生成し、ビルド時に `docs/assets/` に出力する。

```js
import londonImageUrl from '@/assets/locations/london/ISS073-E-659216.jpeg'
import nextImageUrl from '@/assets/locations/next-location/night.jpeg'

export const LOCATIONS = {
  london: {
    name: 'London',
    imageUrl: londonImageUrl,
    imageId: 'ISS073-E-659216',
  },
  'next-location': {
    name: 'Next Location',
    imageUrl: nextImageUrl,
    imageId: 'PHOTO-ID',
  },
}

export const DEFAULT_LOCATION_ID = 'london'
```

初期表示は `DEFAULT_LOCATION_ID` で選ぶ。
`App` の `locationId` プロパティでも選択でき、値を変更すると画像とシーンを作り直す。
タイトル・写真ID・読み込み表示も選択したロケーションに連動する。
