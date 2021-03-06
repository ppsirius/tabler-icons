import * as React from "react";

function IconH4({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-h-4" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={3} y1={5} x2={3} y2={19} /><line x1={3} y1={12} x2={12} y2={12} /><line x1={12} y1={5} x2={12} y2={19} /><path d="M20 19v-10l-5 8h7" /></svg>;
}

export default IconH4;