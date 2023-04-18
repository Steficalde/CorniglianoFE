
export default function Message({ message = "", issuer = true }) {
  const messageStyler = issuer
    ? {
        background: '#b3e899',
        borderRadius: ' 5px 0 5px 5px',
        textAlign: 'right',
      }
    : {
        background: '#ffffff',
        borderRadius: ' 0 5px 5px 5px',
        textAlign: 'left',
      }
  const triangleStyle = !issuer
    ? {
        left: '-8px',
        borderRight: `8px solid ${messageStyler.background}`,
      }
    : {
        right: '-8px',
        borderLeft: `8px solid ${messageStyler.background}`,
      }
  const direction = issuer ? 'flex-row-reverse' : null
  const float = issuer ? ' justify-end ' : ' justify-start '
  return (
    <div className={'  w-full flex' + float}>
      <div
        className={'flex w-fit max-w-[80%] gap-2  items-center m-2 px-4 py-2 ' + direction}
        style={{ ...messageStyler, position: 'relative' }}
      >
        <div className="absolute top-0 " style={{ borderBottom: '10px solid transparent', ...triangleStyle }} />
        <p className="text-[16px]">{message}</p>
      </div>
    </div>
  )
}
