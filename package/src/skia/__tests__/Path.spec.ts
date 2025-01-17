/* eslint-disable max-len */
import { interpolatePaths } from "../../animation/functions/interpolatePaths";
import { processResult } from "../../__tests__/setup";
import { FillType } from "../types";
import type { SkPath } from "../types/Path/Path";
import type { Skia } from "../types/Skia";

import { setupSkia } from "./setup";

const roundtrip = (Skia: Skia, path: SkPath) =>
  Skia.Path.MakeFromCmds(path.toCmds())!;

describe("Path", () => {
  it("React logo", () => {
    const { surface, canvas, Skia } = setupSkia();
    const svg1 =
      "M150.817 113.884C150.817 126.485 140.602 136.701 128 136.701C115.398 136.701 105.183 126.485 105.183 113.884C105.183 101.282 115.398 91.0663 128 91.0663C140.602 91.0663 150.817 101.282 150.817 113.884Z";
    const svg2 =
      "M128 191.877C104.213 216.339 80.8869 228.058 66.7826 219.915C52.6783 211.772 51.1647 185.712 60.4559 152.88C27.3773 144.511 5.56522 130.17 5.56522 113.884C5.56522 97.5975 27.3773 83.2565 60.4559 74.8871C51.1647 42.0555 52.6783 15.9952 66.7826 7.85209C80.8869 -0.291009 104.213 11.4283 128 35.8905C151.787 11.4283 175.113 -0.291018 189.217 7.85208C203.322 15.9952 204.835 42.0555 195.544 74.8871C228.623 83.2565 250.435 97.5975 250.435 113.884C250.435 130.17 228.623 144.511 195.544 152.88C204.835 185.712 203.322 211.772 189.217 219.915C175.113 228.058 151.787 216.339 128 191.877ZM71.7826 211.255C69.497 209.936 67.0111 206.926 65.6137 200.393C64.2166 193.861 64.1969 184.917 65.9598 173.914C66.9004 168.042 68.3234 161.739 70.2187 155.109C79.9755 157.106 90.5237 158.614 101.637 159.545C108.001 168.704 114.58 177.085 121.189 184.536C116.395 189.493 111.647 193.877 107.033 197.627C98.385 204.655 90.6292 209.111 84.2739 211.167C77.9172 213.223 74.0682 212.575 71.7826 211.255ZM185.781 72.6589C187.677 66.0285 189.1 59.7251 190.04 53.8539C191.803 42.8506 191.783 33.9062 190.386 27.3744C188.989 20.8411 186.503 17.8319 184.217 16.5123C181.932 15.1928 178.083 14.5444 171.726 16.6009C165.371 18.6569 157.615 23.112 148.967 30.1404C144.353 33.8906 139.605 38.2747 134.811 43.2312C141.42 50.6819 147.999 59.0631 154.363 68.2223C165.476 69.1534 176.025 70.6611 185.781 72.6589ZM121.189 43.2312C116.395 38.2747 111.647 33.8906 107.033 30.1404C98.385 23.112 90.6292 18.6569 84.2739 16.6009C77.9172 14.5445 74.0682 15.1928 71.7826 16.5123C69.497 17.8319 67.0111 20.8411 65.6137 27.3744C64.2166 33.9062 64.1969 42.8506 65.9598 53.8539C66.9004 59.7251 68.3234 66.0286 70.2187 72.6589C79.9755 70.6611 90.5237 69.1534 101.637 68.2223C108.001 59.0631 114.58 50.682 121.189 43.2312ZM114.51 67.4164C118.965 61.3763 123.485 55.7626 128 50.6258C132.515 55.7626 137.035 61.3763 141.49 67.4164C137.06 67.231 132.559 67.1359 128 67.1359C123.441 67.1359 118.94 67.231 114.51 67.4164ZM94.503 78.9676C87.0448 79.8054 79.9231 80.9132 73.2171 82.2548C75.4082 88.7331 78.0097 95.4546 81.0133 102.333C83.0676 98.4035 85.2357 94.4581 87.5152 90.5098C89.7947 86.5615 92.1276 82.7112 94.503 78.9676ZM86.3696 113.884C89.3439 107.821 92.6143 101.678 96.1754 95.5098C99.7366 89.3416 103.422 83.4378 107.185 77.8307C113.922 77.3752 120.878 77.1359 128 77.1359C135.122 77.1359 142.078 77.3752 148.815 77.8307C152.578 83.4378 156.263 89.3416 159.825 95.5098C163.386 101.678 166.656 107.821 169.63 113.884C166.656 119.946 163.386 126.089 159.825 132.258C156.263 138.426 152.578 144.33 148.815 149.937C142.078 150.392 135.122 150.632 128 150.632C120.878 150.632 113.922 150.392 107.185 149.937C103.422 144.33 99.7366 138.426 96.1754 132.258C92.6143 126.089 89.3439 119.946 86.3696 113.884ZM75.2747 113.884C70.5243 103.793 66.5558 93.9046 63.4076 84.4561C56.7179 86.1298 50.5474 88.0492 44.9926 90.1702C34.5819 94.1452 26.8457 98.6344 21.8875 103.11C16.9283 107.587 15.5652 111.245 15.5652 113.884C15.5652 116.523 16.9283 120.18 21.8875 124.657C26.8457 129.133 34.5819 133.622 44.9926 137.597C50.5474 139.718 56.7179 141.638 63.4076 143.311C66.5558 133.863 70.5243 123.974 75.2747 113.884ZM73.2171 145.513C75.4082 139.034 78.0097 132.313 81.0133 125.435C83.0676 129.364 85.2357 133.309 87.5152 137.258C89.7947 141.206 92.1276 145.056 94.503 148.8C87.0448 147.962 79.9231 146.854 73.2171 145.513ZM154.363 159.545C165.476 158.614 176.024 157.106 185.781 155.109C187.677 161.739 189.1 168.042 190.04 173.914C191.803 184.917 191.783 193.861 190.386 200.393C188.989 206.926 186.503 209.936 184.217 211.255C181.932 212.575 178.083 213.223 171.726 211.167C165.371 209.111 157.615 204.655 148.967 197.627C144.353 193.877 139.605 189.493 134.811 184.536C141.42 177.085 147.999 168.704 154.363 159.545ZM141.49 160.351C137.035 166.391 132.515 172.005 128 177.142C123.485 172.005 118.965 166.391 114.51 160.351C118.94 160.536 123.441 160.632 128 160.632C132.559 160.632 137.06 160.536 141.49 160.351ZM161.497 148.8C163.872 145.056 166.205 141.206 168.485 137.258C170.764 133.309 172.932 129.364 174.987 125.435C177.99 132.313 180.592 139.034 182.783 145.513C176.077 146.854 168.955 147.962 161.497 148.8ZM180.725 113.884C185.476 123.974 189.444 133.863 192.592 143.311C199.282 141.638 205.453 139.718 211.007 137.597C221.418 133.622 229.154 129.133 234.112 124.657C239.072 120.18 240.435 116.523 240.435 113.884C240.435 111.245 239.072 107.587 234.112 103.11C229.154 98.6344 221.418 94.1452 211.007 90.1702C205.453 88.0492 199.282 86.1298 192.592 84.4561C189.444 93.9046 185.476 103.793 180.725 113.884ZM174.987 102.333C177.99 95.4546 180.592 88.7331 182.783 82.2548C176.077 80.9132 168.955 79.8054 161.497 78.9676C163.872 82.7112 166.205 86.5615 168.485 90.5098C170.764 94.4581 172.932 98.4035 174.987 102.333Z";
    const p1 = roundtrip(Skia, Skia.Path.MakeFromSVGString(svg1)!);
    expect(p1.toSVGString()).toBe(svg1);

    const paint = Skia.Paint();
    paint.setAntiAlias(true);
    paint.setColor(Skia.Color("cyan"));
    canvas.drawPath(p1, paint);
    const p2 = roundtrip(Skia, Skia.Path.MakeFromSVGString(svg2)!);
    expect(p2.toSVGString()).toBe(svg2);

    p2.setFillType(FillType.EvenOdd);
    canvas.drawPath(p2, paint);
    const cmds1 = p1.toCmds();
    expect(cmds1).toEqual(Skia.Path.MakeFromCmds(cmds1)?.toCmds());
    processResult(surface, "snapshots/path/logo.png");
  });

  it("Should test that paths can be interpolated", () => {
    const { Skia } = setupSkia();
    const path1 = Skia.Path.Make();
    path1.moveTo(0, 0);
    path1.lineTo(100, 100);
    const path2 = Skia.Path.Make();
    path2.moveTo(100, 100);
    path2.lineTo(0, 0);
    expect(path1.isInterpolatable(path2)).toBe(true);
    path2.lineTo(0, 100);
    expect(path1.isInterpolatable(path2)).toBe(false);
  });

  it("Should interpolate Path", () => {
    const { Skia } = setupSkia();
    const path1 = Skia.Path.Make();
    path1.moveTo(0, 0);
    path1.lineTo(100, 100);
    const path2 = Skia.Path.Make();
    path2.moveTo(100, 100);
    path2.lineTo(0, 0);
    const path3 = Skia.Path.Make();
    path3.moveTo(50, 50);
    path3.lineTo(50, 50);
    const p3Cmds = path3.toCmds().flat();
    expect(path1.interpolate(path2, 0)!.toCmds().flat()).toEqual(
      path2.toCmds().flat()
    );
    expect(path1.interpolate(path2, 0.5)!.toCmds().flat()).toEqual(p3Cmds);
    path2.lineTo(0, 100);
    expect(path1.interpolate(path2, 1)).toBe(null);
  });

  it("Should interpolate more than one Path", () => {
    const { Skia } = setupSkia();
    const path1 = Skia.Path.Make();
    path1.moveTo(0, 0);
    path1.lineTo(100, 100);
    const path2 = Skia.Path.Make();
    path2.moveTo(100, 100);
    path2.lineTo(0, 0);
    const path3 = Skia.Path.Make();
    path3.moveTo(0, 0);
    path3.lineTo(200, 200);
    let path = interpolatePaths(0, [0, 0.5, 1], [path1, path2, path3]);
    expect(path.toCmds().flat()).toEqual(path1.toCmds().flat());
    path = interpolatePaths(0.5, [0, 0.5, 1], [path1, path2, path3]);
    expect(path.toCmds().flat()).toEqual(path2.toCmds().flat());
    path = interpolatePaths(1, [0, 0.5, 1], [path1, path2, path3]);
    expect(path.toCmds().flat()).toEqual(path3.toCmds().flat());
  });

  it("Should interpolate more than one path and clamp on the left side", () => {
    const { Skia } = setupSkia();
    const path1 = Skia.Path.Make();
    path1.moveTo(0, 0);
    path1.lineTo(100, 100);
    const path2 = Skia.Path.Make();
    path2.moveTo(100, 100);
    path2.lineTo(0, 0);
    const path3 = Skia.Path.Make();
    path3.moveTo(0, 0);
    path3.lineTo(200, 200);
    const path = interpolatePaths(-1, [0, 0.5, 1], [path1, path2, path3]);
    expect(path.toCmds().flat()).toEqual(path1.toCmds().flat());
  });

  it("Should interpolate more than one path and clamp on the right side", () => {
    const { Skia } = setupSkia();
    const path1 = Skia.Path.Make();
    path1.moveTo(0, 0);
    path1.lineTo(100, 100);
    const path2 = Skia.Path.Make();
    path2.moveTo(100, 100);
    path2.lineTo(0, 0);
    const path3 = Skia.Path.Make();
    path3.moveTo(0, 0);
    path3.lineTo(200, 200);
    const path = interpolatePaths(2, [0, 0.5, 1], [path1, path2, path3]);
    expect(path.toCmds().flat()).toEqual(path3.toCmds().flat());
  });
});
