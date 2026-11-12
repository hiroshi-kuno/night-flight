import londonImageUrl from '@/assets/locations/london/ISS073-E-659216.jpeg'

// 画像を追加したらここに登録する。importしたURLにはViteの公開パスが反映される。
export const LOCATIONS = {
  london: {
    name: 'London',
    imageUrl: londonImageUrl,
    imageId: 'ISS073-E-659216',
  },
}

// 初期表示するロケーションのキー。
export const DEFAULT_LOCATION_ID = 'london'
