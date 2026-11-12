import './Loader.scss'

/**
 * ブロック: loader
 *   修飾子: loader--hidden（シーンの準備ができたら徐々に非表示にする）
 */
export default function Loader({ hidden, children }) {
  return <div className={`loader${hidden ? ' loader--hidden' : ''}`}>{children}</div>
}
