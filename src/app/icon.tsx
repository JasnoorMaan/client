import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: `${size.height}px`,
          width: `${size.width}px`,
          backgroundColor: "white",
          borderRadius: "12px 0 12px 0",
        }}
      />
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
