const paths = require("../bunnies/output.json");

export default function generateSVG(params) {
  return `
    <svg width="500" height="500" viewBox="0 0 290 290" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      ${generateSVGDefs(params)}
      ${generateSVGBorderText(
        params.quoteToken,
        params.baseToken,
        params.quoteTokenSymbol,
        params.baseTokenSymbol
      )}
      ${generateSVGCardMantle(
        params.quoteTokenSymbol,
        params.baseTokenSymbol,
        params.feeTier
      )}
      ${generateSVGCurve(
        params.tickLower,
        params.tickUpper,
        params.tickSpacing,
        params.overRange
      )}
      ${generateSVGPositionDataAndLocationCurve(
        params.tokenId.toString(),
        params.tickLower,
        params.tickUpper
      )}
      ${generateSVGRareSparkle(params.isRare)}
    </svg>
  `;
}

function btoa(string) {
  return Buffer.from(string).toString("base64");
}

function generateSVGDefs(params) {
  return `
    <defs>
    <style>@import url('https://gateway.pinata.cloud/ipfs/QmRodGNTG8Jex8nQQwufuNi4Brb4Cqy16YBJ3CKqBYfQKP/DM_Mono.css');</style>
      <filter id="f1">
        <feImage result="p0" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <rect width='290px' height='290px' fill='#${params.color0}'/>
          </svg>
          `
        )}" />
        <feImage result="p1" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x1}' cy='${params.y1}' r='120px' fill='#${params.color1}'/>
          </svg>
          `
        )}" />
        <feImage result="p2" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x2}' cy='${params.y2}' r='120px' fill='#${params.color2}'/>
          </svg>
          `
        )}" />
        <feImage result="p3" xlink:href="data:image/svg+xml;base64,${btoa(
          `
          <svg width='290' height='290' viewBox='0 0 290 290' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='${params.x3}' cy='${params.y3}' r='100px' fill='#${params.color3}'/>
          </svg>
          `
        )}" />
        <feBlend mode="overlay" in="p0" in2="p1" />
        <feBlend mode="exclusion" in2="p2" />
        <feBlend mode="overlay" in2="p3" result="blendOut" />
        <feGaussianBlur in="blendOut" stdDeviation="42" />
      </filter> 
      <clipPath id="corners">
        <rect width="290" height="290" rx="42" ry="42" />
      </clipPath>',
      <path id="text-path-a" d="M40 12 H250 A28 28 0 0 1 278 40 V250 A28 28 0 0 1 250 278 H40 A28 28 0 0 1 12 250 V40 A28 28 0 0 1 40 12 z" />
      <path id="minimap" d="M234 444C234 457.949 242.21 463 253 463" />
      <filter id="top-region-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="24" />
      </filter>
      <linearGradient id="grad-up" x1="1" x2="0" y1="1" y2="0">
        <stop offset="0.0" stop-color="white" stop-opacity="1" />
        <stop offset=".9" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="grad-down" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0.0" stop-color="white" stop-opacity="1" />
        <stop offset="0.9" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-up" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-up)" />
      </mask>
      <mask id="fade-down" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#grad-down)" />
      </mask>
      <mask id="none" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="white" />
      </mask>
      <linearGradient id="grad-symbol">
        <stop offset="0.7" stop-color="white" stop-opacity="1" />
        <stop offset=".95" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fade-symbol" maskContentUnits="userSpaceOnUse">
        <rect width="290px" height="200px" fill="url(#grad-symbol)" />
      </mask>
    </defs>
    <g clip-path="url(#corners)">
      <rect fill="${
        params.color0
      }" x="0px" y="0px" width="290px" height="290px" />
      <rect style="filter: url(#f1)" x="0px" y="0px" width="290px" height="290px" />
      <g style="filter:url(#top-region-blur); transform:scale(1.5); transform-origin:center top;">
      <rect fill="none" x="0px" y="0px" width="290px" height="290px" />
      <ellipse cx="50%" cy="0px" rx="180px" ry="120px" fill="#000" opacity="0.85" /></g>
      <rect x="0" y="0" width="290" height="290" rx="42" ry="42" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)" />
    </g>
  `;
}

function generateSVGBorderText(
  quoteToken,
  baseToken,
  quoteTokenSymbol,
  baseTokenSymbol
) {
  return `
  <text text-rendering="optimizeSpeed">
      <textPath startOffset="-100%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          ${baseToken}
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="0%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
          ${baseToken}
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="50%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
            ${quoteToken}
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
      <textPath startOffset="-50%" fill="white" font-family="'Courier New', monospace" font-size="10px"
          xlink:href="#text-path-a">
            ${quoteToken}
          <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s"
              repeatCount="indefinite"></animate>
      </textPath>
  </text>
	`;
}

function generateSVGCardMantle(quoteTokenSymbol, baseTokenSymbol, feeTier) {
  // ${quoteTokenSymbol}/${baseTokenSymbol}
  // ${feeTier}
  return `
  <g mask="url(#fade-symbol)">
        <rect fill="none" x="0px" y="0px" width="290px" height="200px"></rect>
        <text y="54px" x="32px" fill="white" font-family="'Pixel', 'Courier New', monospace" font-weight="200"
            font-size="24px">
            ${quoteTokenSymbol}
        </text>
        <text y="74px" x="32px" fill="white" font-family="'Courier New', monospace" font-weight="200" font-size="16px">
            ${baseTokenSymbol}
        </text>
    </g>
  <rect x="16" y="16" width="258" height="258" rx="26" ry="26" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)">
  </rect>
  `;
}

function getCurve(tickLower, tickUpper, tickSpacing) {
  const curve1 = "M1 1C41 41 105 105 145 145";
  const curve2 = "M1 1C33 49 97 113 145 145";
  const curve3 = "M1 1C33 57 89 113 145 145";
  const curve4 = "M1 1C25 65 81 121 145 145";
  const curve5 = "M1 1C17 73 73 129 145 145";
  const curve6 = "M1 1C9 81 65 137 145 145";
  const curve7 = "M1 1C1 89 57.5 145 145 145";
  const curve8 = "M1 1C1 97 49 145 145 145";
  const tickRange = (tickUpper - tickLower) / tickSpacing;

  if (tickRange <= 4) {
    return curve1;
  } else if (tickRange <= 8) {
    return curve2;
  } else if (tickRange <= 16) {
    return curve3;
  } else if (tickRange <= 32) {
    return curve4;
  } else if (tickRange <= 64) {
    return curve5;
  } else if (tickRange <= 128) {
    return curve6;
  } else if (tickRange <= 256) {
    return curve7;
  } else {
    return curve8;
  }
}

function generateSVGCurveCircle(overRange) {
  const curvex1 = "73";
  const curvey1 = "190";
  const curvex2 = "217";
  const curvey2 = "334";

  if (overRange == 1 || overRange == -1) {
    return `
      <circle 
        cx="${overRange == -1 ? curvex1 : curvex2}px" 
        cy="${overRange == -1 ? curvey1 : curvey2}px" 
        r="4px" 
        fill="white" 
      />
      <circle 
        cx="${overRange == -1 ? curvex1 : curvex2}px" 
        cy="${overRange == -1 ? curvey1 : curvey2}px'" 
        r="24px" 
        fill="none" 
        stroke="white" 
      />`;
  } else {
    return `
      <circle 
        cx="${curvex1}px" 
        cy="${curvey1}px"
        r="4px" 
        fill="white" 
      />
			<circle 
        cx="${curvex2}px"
        cy="${curvey2}px" 
        r="4px" 
        fill="white" 
      />
		`;
  }
}

function generateSVGCurve(tickLower, tickUpper, tickSpacing, overRange) {
  if (overRange === 1) {
    overRange = "#fade-up";
  } else if (overRange === -1) {
    overRange = "#fade-down";
  } else {
    overRange = "#none";
  }
  const curve = getCurve(tickLower, tickUpper, tickSpacing);

  return `
	
	`;

  // <g mask="url('fade')" style="transform:translate(72px,189px)">
  //   <rect x="-16px" y="-16px" width="180px" height="180px" fill="none" />
  //   <path d="${curve}" stroke="rgba(0,0,0,0.3)" stroke-width="32px" fill="none" stroke-linecap="round" />
  // </g>
  // <g mask="url('fade')" style="transform:translate(72px,189px)">
  //   <rect x="-16px" y="-16px" width="180px" height="180px" fill="none" />
  //   <path d="${curve}" stroke="rgba(255,255,255,1)" fill="none" stroke-linecap="round" />
  // </g>
  // ${generateSVGCurveCircle(overRange)}
}

function tickToString(tick) {
  let sign = "";

  if (tick < 0) {
    tick = tick * -1;
    sign = "-";
  }
  return `${sign}${tick.toString()}`;
}

function rangeLocation(tickLower, tickUpper) {
  const midPoint = (tickLower + tickUpper) / 2;

  if (midPoint < -100_000) {
    return ["8", "7"];
  } else if (midPoint < -50_000) {
    return ["8", "10.5"];
  } else if (midPoint < -10_000) {
    return ["8", "14.25"];
  } else if (midPoint < -100) {
    return ["10", "18"];
  } else if (midPoint < 0) {
    return ["11", "21"];
  } else if (midPoint < 100) {
    return ["13", "23"];
  } else if (midPoint < 10_000) {
    return ["15", "25"];
  } else if (midPoint < 50_000) {
    return ["18", "26"];
  } else if (midPoint < 100_000) {
    return ["21", "27"];
  } else {
    return ["24", "27"];
  }
}

function s(x) {
  return x.charCodeAt(0);
}

function bytes(string) {
  return string.split("").map(s);
}

function generateSVGPositionDataAndLocationCurve(
  tokenId,
  tickLower,
  tickUpper
) {
  const tickLowerStr = tickToString(tickLower);
  const tickUpperStr = tickToString(tickUpper);
  const str1length = bytes(tokenId).length + 4;
  const str2length = bytes(tickLowerStr).length + 10;
  const str3length = bytes(tickUpperStr).length + 10;
  const [xCoord, yCoord] = rangeLocation(tickLower, tickUpper);

  return `

  <g style="transform:translate(29px, 204px)">
        <rect width="60.6666px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">ID: </tspan>
            ${tokenId}
        </text>
    </g>
    <g style="transform:translate(29px, 224px)">
        <rect width="98px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">Reserved: </tspan>
            ${Math.min(100, Math.max(0, tickUpper || 0))}%
        </text>
    </g>
    <g style="transform:translate(29px, 244px)">
        <rect width="98px" height="17.3333px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
        <text x="8px" y="11.333px" font-family="'Courier New', monospace" font-size="8px" fill="white">
            <tspan fill="rgba(255,255,255,0.6)">Minting: </tspan>
            ${Number(tickLower) ? "enabled" : "disabled"}
        </text>
    </g>

    <g transform="scale(0.4) translate(160, 175)">
    ${paths[Math.floor(Math.random() * paths.length)].replace(/[\\]["]/g, '"')}
    </g>

  <path style="transform:translate(226px, 226px) scale(0.1)" id="Selection" fill="white"
        d="M 146.00,64.00 C 153.56,65.52 160.73,67.80 168.00,70.34 171.38,71.53 176.09,73.24 178.26,76.21 180.53,79.32 180.99,89.94 181.00,94.00 181.00,94.00 181.00,162.00 181.00,162.00 181.00,162.00 180.00,177.00 180.00,177.00 180.00,177.00 180.00,206.00 180.00,206.00 180.00,206.00 178.96,223.00 178.96,223.00 178.96,223.00 178.96,239.00 178.96,239.00 178.96,239.00 178.00,249.00 178.00,249.00 177.95,253.95 177.94,265.83 175.83,270.00 172.97,275.62 162.77,281.04 157.00,283.40 138.16,291.09 122.85,291.23 103.00,291.00 86.28,290.80 51.09,282.65 34.00,278.37 28.20,276.92 11.05,272.45 7.31,268.61 4.73,265.96 4.48,261.52 4.00,258.00 4.00,258.00 1.58,236.00 1.58,236.00 1.58,236.00 0.91,224.00 0.91,224.00 0.91,224.00 0.00,212.00 0.00,212.00 0.00,212.00 0.00,147.00 0.00,147.00 0.00,147.00 1.00,132.00 1.00,132.00 1.00,132.00 3.91,88.00 3.91,88.00 4.19,84.21 4.47,73.25 6.74,70.63 9.03,67.98 22.09,62.96 26.00,61.40 34.98,57.81 60.95,50.19 70.00,50.18 70.00,50.18 88.00,52.59 88.00,52.59 88.00,52.59 115.00,57.20 115.00,57.20 117.47,57.67 123.43,59.14 125.57,57.89 128.38,56.25 130.28,45.40 131.13,42.00 131.13,42.00 136.58,20.00 136.58,20.00 138.28,12.35 139.13,5.41 147.00,1.45 150.40,-0.25 154.30,-0.04 158.00,0.00 165.96,0.11 172.77,4.01 180.00,6.99 180.00,6.99 216.00,22.22 216.00,22.22 223.21,25.40 233.61,27.26 228.91,38.00 224.21,48.76 216.65,43.52 209.00,40.14 209.00,40.14 174.00,24.70 174.00,24.70 171.62,23.62 162.67,19.02 160.59,19.58 156.57,20.66 155.23,27.54 154.37,31.00 154.37,31.00 146.00,64.00 146.00,64.00 Z M 124.00,69.00 C 124.00,69.00 72.00,60.32 72.00,60.32 67.35,59.97 54.19,62.85 50.00,65.00 50.00,65.00 112.00,79.87 112.00,79.87 117.41,81.23 133.47,85.93 138.00,85.45 142.55,84.96 157.13,80.37 161.00,78.00 161.00,78.00 146.14,74.61 146.14,74.61 142.67,75.03 143.18,78.25 138.94,80.55 134.35,83.03 125.51,81.82 123.46,76.56 122.80,74.88 123.73,70.92 124.00,69.00 Z M 124.00,88.00 C 124.00,88.00 59.00,72.35 59.00,72.35 45.30,69.20 36.90,64.66 24.00,74.00 24.00,74.00 95.00,88.58 95.00,88.58 104.21,90.24 115.96,94.45 124.00,88.00 Z M 109.00,102.00 C 109.00,102.00 44.00,88.58 44.00,88.58 44.00,88.58 14.00,82.00 14.00,82.00 14.00,82.00 11.00,130.00 11.00,130.00 11.00,130.00 10.00,147.00 10.00,147.00 10.00,147.00 10.00,213.00 10.00,213.00 10.00,213.00 10.91,223.00 10.91,223.00 10.91,223.00 12.72,247.00 12.72,247.00 13.11,250.03 13.71,258.36 15.17,260.61 17.65,264.42 34.07,268.10 39.00,269.37 39.00,269.37 62.00,274.65 62.00,274.65 65.99,275.55 73.09,277.25 77.00,276.66 86.29,275.25 93.68,266.96 97.73,259.00 105.49,243.74 109.97,213.23 110.00,196.00 110.00,196.00 110.00,136.00 110.00,136.00 110.00,136.00 109.00,121.00 109.00,121.00 109.00,121.00 109.00,102.00 109.00,102.00 Z M 165.00,88.00 C 165.00,88.00 151.00,93.00 151.00,93.00 156.84,99.26 153.13,108.76 156.00,116.00 156.00,116.00 165.00,88.00 165.00,88.00 Z M 150.00,93.00 C 144.50,95.21 145.98,99.76 146.00,105.00 146.00,105.00 147.00,126.00 147.00,126.00 152.14,125.14 152.71,123.91 154.00,119.00 152.15,118.54 151.21,118.63 150.02,116.77 148.78,114.83 149.03,111.26 149.00,109.00 148.89,101.12 146.78,100.63 150.00,93.00 Z M 138.00,97.00 C 138.00,97.00 125.00,100.00 125.00,100.00 127.71,105.74 132.89,110.34 138.00,114.00 138.00,114.00 138.00,97.00 138.00,97.00 Z M 170.00,101.00 C 167.61,104.89 163.46,117.04 161.69,122.00 160.68,124.85 159.42,129.42 157.35,131.57 154.35,134.70 144.63,134.97 141.31,132.26 138.72,130.15 139.57,127.81 136.69,124.00 133.67,120.01 121.17,107.98 117.00,105.00 117.00,105.00 117.00,147.00 117.00,147.00 117.00,147.00 118.00,164.00 118.00,164.00 118.00,164.00 118.00,240.00 118.00,240.00 118.00,240.00 119.00,255.00 119.00,255.00 119.00,255.00 119.00,281.00 119.00,281.00 130.12,280.97 143.79,277.97 154.00,273.57 157.41,272.10 163.91,268.87 165.83,265.68 167.04,263.66 167.98,249.10 168.04,246.00 168.04,246.00 168.04,234.00 168.04,234.00 168.04,234.00 169.00,222.00 169.00,222.00 169.00,222.00 169.00,203.00 169.00,203.00 169.00,203.00 170.00,187.00 170.00,187.00 170.00,187.00 170.00,138.00 170.00,138.00 170.00,138.00 170.96,124.00 170.96,124.00 170.96,124.00 170.96,110.00 170.96,110.00 170.96,110.00 170.00,101.00 170.00,101.00 Z M 61.00,170.00 C 61.00,170.00 26.00,166.83 26.00,166.83 23.09,166.54 14.42,166.63 16.17,161.94 17.15,159.32 26.51,149.59 28.91,147.00 28.91,147.00 57.72,115.00 57.72,115.00 62.04,110.08 67.30,102.14 74.00,101.00 74.00,101.00 67.30,119.00 67.30,119.00 67.30,119.00 57.00,142.00 57.00,142.00 57.00,142.00 87.00,142.00 87.00,142.00 87.00,142.00 105.00,143.00 105.00,143.00 103.03,149.25 89.97,169.20 85.68,176.00 85.68,176.00 52.95,229.00 52.95,229.00 52.95,229.00 41.20,248.00 41.20,248.00 38.68,252.12 38.18,254.67 33.00,254.00 33.00,254.00 46.33,213.00 46.33,213.00 46.33,213.00 61.00,170.00 61.00,170.00 Z"
        width="200" height="200" />
	`;
}

function generateSVGRareSparkle(isRare) {
  if (isRare) {
    return `
    <g style="transform: scale(0.5) translate(450px, 50px)">
        <g>
            <path style="transform:translate(6px,6px)"
                d="M12 0L12.6522 9.56587L18 1.6077L13.7819 10.2181L22.3923 6L14.4341 11.3478L24 12L14.4341 12.6522L22.3923 18L13.7819 13.7819L18 22.3923L12.6522 14.4341L12 24L11.3478 14.4341L6 22.3923L10.2181 13.7819L1.6077 18L9.56587 12.6522L0 12L9.56587 11.3478L1.6077 6L10.2181 10.2181L6 1.6077L11.3478 9.56587L12 0Z"
                fill="#ffffaa" />',
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s"
                repeatCount="indefinite" />
        </g>
    </g>
    <g style="transform: scale(0.5) translate(468px, 50px)">
        <g>
            <path style="transform:translate(6px,6px)"
                d="M12 0L12.6522 9.56587L18 1.6077L13.7819 10.2181L22.3923 6L14.4341 11.3478L24 12L14.4341 12.6522L22.3923 18L13.7819 13.7819L18 22.3923L12.6522 14.4341L12 24L11.3478 14.4341L6 22.3923L10.2181 13.7819L1.6077 18L9.56587 12.6522L0 12L9.56587 11.3478L1.6077 6L10.2181 10.2181L6 1.6077L11.3478 9.56587L12 0Z"
                fill="#ffffff" />',
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s"
                repeatCount="indefinite" />
        </g>
    </g>
    <g style="transform: scale(0.5) translate(486px, 50px)">
        <g>
            <path style="transform:translate(6px,6px)"
                d="M12 0L12.6522 9.56587L18 1.6077L13.7819 10.2181L22.3923 6L14.4341 11.3478L24 12L14.4341 12.6522L22.3923 18L13.7819 13.7819L18 22.3923L12.6522 14.4341L12 24L11.3478 14.4341L6 22.3923L10.2181 13.7819L1.6077 18L9.56587 12.6522L0 12L9.56587 11.3478L1.6077 6L10.2181 10.2181L6 1.6077L11.3478 9.56587L12 0Z"
                fill="#77ffff" />',
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="10s"
                repeatCount="indefinite" />
        </g>
    </g>
  `;
  } else {
    return "";
  }
}
