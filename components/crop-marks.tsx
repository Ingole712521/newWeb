export function CropMarks() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
      <span className="crop crop-tl" />
      <span className="crop crop-tr" />
      <span className="crop crop-bl" />
      <span className="crop crop-br" />
      <span className="crosshair crosshair-tl" />
      <span className="crosshair crosshair-br" />
      <span className="grid-line grid-v" />
      <span className="grid-line grid-h" />
    </div>
  )
}
